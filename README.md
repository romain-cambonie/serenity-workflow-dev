# Serenity Ops

:warning: for a workflow to appear in your available workflows ({ YOUR_REPOSITORY_URL }/actions) a file with the same workflow name must be present on your default branch (usually master / main).

Workflow files contents are however branch dependent.

## Deployers Setup

### Clevercloud (~ 15 min)
#### Prerequisites
- Have a clevercloud account.

#### tl;dr
Set up the
- CLEVER_TOKEN
- CLEVER_SECRET
- (Organisation) CLEVER_ORG_ID

repository variables.

#### Step-by-step
Run the 'Setup Deployer Clevercloud' workflow (/actions)

Go into the workflow run logs to find the url to the clevercloud console.  
It should have the form :
```
https://console.clevercloud.com/cli-oauth?cli_version=XXX&cli_token=YYYY
```

Login manually to get your clever token and secrets.

Add the tokens to your repository secrets (/settings/secrets/actions) :
- CLEVER_TOKEN=XXX
- CLEVER_SECRET=YYY

If you deploy for an organisation and not personal use you also REQUIRE the following secret:
- CLEVER_ORG_ID=orga_ZZZ

Found in https://console.clever-cloud.com/organisations/{{ ORG_ID }} on the top-right of your organisation overview.

### Scalingo
TBA


## Notifications :
Available workflows
DISCORD_NOTIFY_WEBHOOK_URL
MATTERMOST_NOTIFY_WEBHOOK_URL
