"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Github, 
  Rocket, 
  Server, 
  Globe, 
  CheckCircle, 
  Terminal,
  Package,
  CheckCheck,
  FolderOpen,
  Database,
  Link,
  Upload,
  ExternalLink
} from 'lucide-react';

export default function VercelClone() {
  const [githubUrl, setGithubUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStep, setDeploymentStep] = useState(0);
  const [deploymentComplete, setDeploymentComplete] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState('');

  const handleDeploy = () => {
    if (!githubUrl || !githubUrl.includes('github.com')) return;
    
    setIsDeploying(true);
    setDeploymentStep(1);
    
    // Simulate deployment process
    const steps = [1, 2, 3, 4, 5, 6, 7];
    let currentStep = 1;
    
    const interval = setInterval(() => {
      currentStep++;
      setDeploymentStep(currentStep);
      
      if (currentStep > steps.length) {
        clearInterval(interval);
        setDeploymentComplete(true);
        setIsDeploying(false);
        // Generate a random deployment URL
        const randomStr = Math.random().toString(36).substring(2, 8);
        setDeploymentUrl(`https://${randomStr}.vercel-clone.app`);
      }
    }, 1500);
  };

  const deploymentSteps = [
    { id: 1, title: 'Fetching GitHub Repository', icon: <Github className="h-5 w-5" /> },
    { id: 2, title: 'Spinning up Docker Container on AWS ECS', icon: <Server className="h-5 w-5" /> },
    { id: 3, title: 'Installing Dependencies (npm install)', icon: <Package className="h-5 w-5" /> },
    { id: 4, title: 'Building Project (npm run build)', icon: <Terminal className="h-5 w-5" /> },
    { id: 5, title: 'Generating dist Folder', icon: <FolderOpen className="h-5 w-5" /> },
    { id: 6, title: 'Uploading to AWS S3', icon: <Upload className="h-5 w-5" /> },
    { id: 7, title: 'Configuring Reverse Proxy', icon: <Globe className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 p-4">
      {/* Left Side - How it works */}
      <div className="w-full md:w-1/2 space-y-4">
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
                  <p className="text-sm text-gray-600">The user provides the URL of a GitHub repository.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full text-orange-700 flex-shrink-0">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">2. Spin Up Docker Container on AWS ECS</h3>
                  <p className="text-sm text-gray-600">A Docker container is launched in AWS ECS.</p>
                  <p className="text-sm text-gray-600">The container clones the repository into a folder.</p>
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
                    <li><code>npm install</code> is executed.</li>
                    <li><code>npm run build</code> is run to compile the project.</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-700 flex-shrink-0">
                  <FolderOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">4. Generate 'dist' Folder</h3>
                  <p className="text-sm text-gray-600">The build process creates a 'dist' folder (or equivalent output folder).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-700 flex-shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">5. Upload to AWS S3</h3>
                  <p className="text-sm text-gray-600">A random folder name is generated.</p>
                  <p className="text-sm text-gray-600">The 'dist' folder is uploaded to an S3 bucket under that name.</p>
                  <p className="text-sm text-gray-600">A random public URL is created for access.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-700 flex-shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">6. Set Up Reverse Proxy</h3>
                  <p className="text-sm text-gray-600">A unique, friendly URL is generated.</p>
                  <p className="text-sm text-gray-600">The reverse proxy is configured to route requests to the app hosted on S3.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-full text-red-700 flex-shrink-0">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">7. Final Deployment</h3>
                  <p className="text-sm text-gray-600">The app is now live and accessible via the generated URL through the reverse proxy.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Right Side - Deploy Form */}
      <div className="w-full md:w-1/2">
        <Card className="shadow-md">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-bold">Deploy Your Project</CardTitle>
            <CardDescription>Paste your GitHub repository URL below</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="github-url" className="text-sm font-medium">
                  GitHub Repository URL
                </label>
                <div className="flex gap-2">
                  <Input 
                    id="github-url"
                    placeholder="https://github.com/username/repo" 
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    disabled={isDeploying}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleDeploy} 
                    disabled={isDeploying || !githubUrl}
                  >
                    Deploy
                  </Button>
                </div>
              </div>
            </div>
            
            {(isDeploying || deploymentComplete) && (
              <div className="mt-6 space-y-4">
                <h3 className="font-medium text-sm">Deployment Progress</h3>
                <div className="space-y-3">
                  {deploymentSteps.map((step) => (
                    <div 
                      key={step.id}
                      className={`flex items-center gap-3 p-3 rounded-md ${
                        deploymentStep >= step.id ? 'bg-blue-50' : 'bg-gray-50'
                      }`}
                    >
                      <div className={`p-1 rounded-full ${
                        deploymentStep > step.id ? 'bg-green-100' : 
                        deploymentStep === step.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {deploymentStep > step.id ? (
                          <CheckCheck className="h-4 w-4 text-green-600" />
                        ) : (
                          <div className="h-4 w-4">{step.icon}</div>
                        )}
                      </div>
                      <span className={`text-sm ${
                        deploymentStep === step.id ? 'font-medium' : ''
                      }`}>
                        {step.title}
                      </span>
                      {deploymentStep === step.id && (
                        <div className="ml-auto">
                          <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {deploymentComplete && (
              <div className="mt-6 p-4 bg-green-50 rounded-md border border-green-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h3 className="font-medium">Deployment Complete!</h3>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Your project is live at:</p>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline mt-1 flex items-center gap-1"
                  >
                    {deploymentUrl} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}