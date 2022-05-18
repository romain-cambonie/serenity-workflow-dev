# Deploying to Clevercloud (~ 15 min)

#### Prerequisites
- Have a clevercloud account

#### Step-by-step Clevercloud deployment
- Run the 'Setup Deployer Clevercloud' workflow (/actions) the workflow will show as failed (this is expected as it is a login failure)

- Go into the workflow run logs to find the url to the clevercloud console.  
It should have the form :
```
https://console.clevercloud.com/cli-oauth?cli_version=XXX&cli_token=YYYY
```

- Log into your account to get your clever token and secrets.

-Add the tokens to your repository secrets (/settings/secrets/actions) :
  - CLEVER_TOKEN=XXX
  - CLEVER_SECRET=YYY

:warning: If you deploy for an organisation and not personal use you also REQUIRE the following secret:
- CLEVER_ORG_ID=orga_ZZZ

This secret can be found on https://console.clever-cloud.com/organisations/{{ ORG_ID }} on the top-right of your organisation overview.