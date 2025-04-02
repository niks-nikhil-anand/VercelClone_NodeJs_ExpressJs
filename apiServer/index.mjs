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

app.post("/post", async (res, req) => {
  const { gitUrl } = req.body;
  const projectId = generateSlug();

  // Spin container on AWS ECS
  const runTask = new RunTaskCommand({
    cluster: config.CLUSTER,
    taskDefinition: config.TASK,
    launchType: "FARGATE",
    count: 1,
    networkConfigration: {
      awsvpcConfigration: {
        subnets: [
          AWS_CLUSTER_SUBNET1,
          AWS_CLUSTER_SUBNET2,
          AWS_CLUSTER_SUBNET3,
        ],
        securityGroups: [AWS_CLUSTER_SECURITY_GROUP],
        assignPublicIp: "ENABLED",
      },
    },
    overides: {
      containerOverrides: {
        name: AWS_IMAGE_NAME,
        environment: [
          {
            name: "GIT_REPOSITORY__URL",
            vale: gitUrl,
          },
          {
            name: "PROJECT_ID",
            value: projectId,
          },
        ],
      },
    },
  });

  await ecsClient.send(runTask);

  return res.json({
    status: "queued",
    data: {
      projectId,
      url: `http://${projectId}.localhost:8000`,
    },
  });
});
