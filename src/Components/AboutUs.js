import React from "react";


export default function AboutUs(props) {
  let mystyle ={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#2B3035':'white',
    padding:'5px',
    borderRadius:'5px'

  }
  
  return (
    <div className="container my-2" style={mystyle}>
      The AWS Amplify Console provides continuous deployment and hosting for
      modern web apps (single page apps and static site generators) with
      serverless backends. The Amplify Console offers globally available CDNs,
      custom domain setup, feature branch deployments, and password protection.
      Login to the Amplify Console here. Connect your Create React App repo and
      pick a branch. If you're looking for a Create React App+Amplify starter,
      try the create-react-app-auth-amplify starter that demonstrates setting up
      auth in 10 minutes with Create React App. The Amplify Console
      automatically detects the build settings. Choose Next. Choose Save and
      deploy. If the build succeeds, the app is deployed and hosted on a global
      CDN with an amplifyapp.com domain. You can now continuously deploy changes
      to your frontend or backend. Continuous deployment allows developers to
      deploy updates to their frontend and backend on every code commit to their
      Git repository. Azure Azure Static Web Apps creates an automated build and
      deploy pipeline for your React app powered by GitHub Actions. Applications
      are geo-distributed by default with multiple points of presence. PR's are
      built automatically for staging environment previews. Create a new Static
      Web App here. Add in the details and connect to your GitHub repo. Make
      sure the build folder is set correctly on the "build" tab and create the
      resource. Azure Static Web Apps will automatically configure a GitHub
      Action in your repo and begin the deployment. See the Azure Static Web
      Apps documentation for more information on routing, APIs, authentication
      and authorization, custom domains and more. Firebase Install the Firebase
      CLI if you haven’t already by running npm install -g firebase-tools. Sign
      up for a Firebase account and create a new project. Run firebase login and
      login with your previous created Firebase account. Then run the firebase
      init command from your project’s root. You need to choose the Hosting:
      Configure and deploy Firebase Hosting sites and choose the Firebase
      project you created in the previous step. You will need to agree with
      database.rules.json being created, choose build as the public directory,
      and also agree to Configure as a single-page app by replying with y.
    </div>
  );
}
