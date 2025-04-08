import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Rocket, 
  Server, 
  Globe, 
  FolderOpen,
  Database,
  Link,
  ExternalLink,
  Package 
} from 'lucide-react';

const Workflow = () => {
  return (
    <div>
      <div className="w-full  space-y-4">
        <Card className="shadow-md">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Vercel Clone Workflow
            </CardTitle>
            <CardDescription>Deployment process explained</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-700 flex-shrink-0">
                  <Link className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">1. User Submits GitHub URL</h3>
                  <p className="text-sm text-gray-600">
                    The user provides the URL of a GitHub repository.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full text-orange-700 flex-shrink-0">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">
                    2. Spin Up Docker Container on AWS ECS
                  </h3>
                  <p className="text-sm text-gray-600">
                    A Docker container is launched in AWS ECS.
                  </p>
                  <p className="text-sm text-gray-600">
                    The container clones the repository into a folder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-700 flex-shrink-0">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">3. Install & Build Project</h3>
                  <p className="text-sm text-gray-600">Inside the container:</p>
                  <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                    <li>
                      <code>npm install</code> is executed.
                    </li>
                    <li>
                      <code>npm run build</code> is run to compile the project.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-700 flex-shrink-0">
                  <FolderOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">4. Generate 'dist' Folder</h3>
                  <p className="text-sm text-gray-600">
                    The build process creates a 'dist' folder (or equivalent
                    output folder).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-700 flex-shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">5. Upload to AWS S3</h3>
                  <p className="text-sm text-gray-600">
                    A random folder name is generated.
                  </p>
                  <p className="text-sm text-gray-600">
                    The 'dist' folder is uploaded to an S3 bucket under that
                    name.
                  </p>
                  <p className="text-sm text-gray-600">
                    A random public URL is created for access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-700 flex-shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">6. Set Up Reverse Proxy</h3>
                  <p className="text-sm text-gray-600">
                    A unique, friendly URL is generated.
                  </p>
                  <p className="text-sm text-gray-600">
                    The reverse proxy is configured to route requests to the app
                    hosted on S3.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-700 flex-shrink-0">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">7. Final Deployment</h3>
                  <p className="text-sm text-gray-600">
                    The app is now live and accessible via the generated URL
                    through the reverse proxy.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workflow;