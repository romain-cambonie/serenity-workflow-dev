# Deploying to Scalingo (~ ?? min)

#### Prerequisites
- Have a scalingo account

#### PSA
- If you are on a free trial you have only ONE available application, thus you need to delete it manually before redeploying

#### Step-by-step Scalingo deployment

##### Secrets
###### Api token
- SCALINGO_API_TOKEN 

1. Log into your scalingo account  
2. Create a token to allow you to interact with our APIs without using your account credentials.
  [https://dashboard.scalingo.com/account/tokens](https://dashboard.scalingo.com/account/tokens)

3. Add the token to your repository secrets (/settings/secrets/actions). 
  

##### Required Environment variables 
  - application-full-name (eg: 'my-awesome-app')

###### About required variables
- Your application full name must be unique
- Your application full name cannot contain 'scalingo'
- The app will be available at https://{YOUR_APP_NAME}.osc-fr1.scalingo.io/

##### Optionnal Environment variables
  - scalingo-remote-domain-url (default value: 'git@ssh.osc-fr1.scalingo.com')
  - scalingo-ssh-host-domain (default value: 'ssh.osc-fr1.scalingo.com')

###### About optional variables  
A scalingo deployment is a push to a git remote.  
You can find the domain on [https://dashboard.scalingo.com/apps/osc-fr1/{YOUR_APP_NAME}/deploy/config](https://dashboard.scalingo.com/apps/)

The push must be secure with a private ssh-key link to a known host.  
The keys generation / usage / suppression is handled by the workflow [Deploy application scalingo](.github/workflows/_deploy-application.scalingo.reusable.yml)  
However the ssh remote host is an external dependency and thus may change which is why it can be overriden as a workflow input.  

Do not change the default values unless you understand what you're doing.


