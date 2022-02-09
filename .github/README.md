# Serenity Ops

# Setup

# Clevercloud

Run the setup deployer workflow (/actions)

Go into the worflow run logs to find the url to console.clevercloud.com/cli-oauth it should have the form
```
https://console.clevercloud.com/cli-oauth?cli_version=XXX&cli_token=YYYY
```

Login manually to get your cli token.

Add the tokens to your repository secrets (/settings/secrets/actions) :
- CLEVER_TOKEN=XXX
- CLEVER_SECRET=YYY 

If you deploy for an organisation and not personal use you also REQUIRE the following secret:
- CLEVER_ORG_ID=orga_ZZZ

Found in https://console.clever-cloud.com/organisations/{{ ORG_ID }} on the top-right of your organisation overview.

Available workflows 


todo : workflow that delete old workflows
todo : workflow renovate bot github actions + config
todo : workflow login clevercloud
 
yarn 3.11
