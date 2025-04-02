import "dotenv/config";
import express from "express";
import cors from "cors";
import { generateSlug } from "random-word-slugs";
import { ECSClient, RunTaskCommand } from "@aws-sdk/client-ecs";

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const ecsClient = new ECSClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

app.post("/post", (res, req) => {
  const { gitUrl } = req.body;
  const projectId = generateSlug();

  // Spin container on AWS ECS
  const runTask = new RunTaskCommand({
    
  })
});
