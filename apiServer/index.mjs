import "dotenv/config";
import express from "express";
import cors from "cors";
import { generateSlug } from "random-word-slugs";
import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_CLUSTER_ARN,
  AWS_TASK_DEFINITION,
  AWS_CLUSTER_SUBNET1,
  AWS_CLUSTER_SUBNET2,
  AWS_CLUSTER_SUBNET3,
  AWS_CLUSTER_SECURITY_GROUP,
  AWS_IMAGE_NAME,
} = process.env;

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const ecsClient = new ECSClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const config = {
  CLUSTER: AWS_CLUSTER_ARN,
  TASK: AWS_TASK_DEFINITION,
};

app.post("/project", async (req, res) => {
  try {
    console.log("Received request to /project");
    console.log("Request body:", req.body);
    
    const { gitUrl } = req.body;
    if (!gitUrl) {
      console.error("Missing gitUrl in request body");
      return res.status(400).json({ error: "gitUrl is required" });
    }

    console.log("Git URL:", gitUrl);
    const projectId = generateSlug();
    console.log("Generated Project ID:", projectId);

    // Spin container on AWS ECS
    const runTask = new RunTaskCommand({
      cluster: config.CLUSTER,
      taskDefinition: config.TASK,
      launchType: "FARGATE",
      count: 1,
      networkConfiguration: {
        awsvpcConfiguration: {
          subnets: [
            AWS_CLUSTER_SUBNET1,
            AWS_CLUSTER_SUBNET2,
            AWS_CLUSTER_SUBNET3,
          ],
          securityGroups: [AWS_CLUSTER_SECURITY_GROUP],
          assignPublicIp: "ENABLED",
        },
      },
      overrides: {
        containerOverrides: [
          {
            name: "vercel-clone-image",
            environment: [
              {
                name: "GIT_REPOSITORY__URL",
                value: gitUrl,
              },
              {
                name: "PROJECT_ID",
                value: projectId,
              },
            ],
          },
        ],
      },
    });

    console.log("Running ECS task with parameters:", JSON.stringify(runTask.input, null, 2));
    const response = await ecsClient.send(runTask);
    console.log("ECS Task Response:", response);

    return res.json({
      status: "queued",
      data: {
        projectId,
        url: `http://${projectId}.localhost:8000`,
        gitUrl,
      },
    });
  } catch (error) {
    console.error("Error launching ECS task:", error);
    return res.status(500).json({ error: "Failed to launch ECS task" });
  }
});
