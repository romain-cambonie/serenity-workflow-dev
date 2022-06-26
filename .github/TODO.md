- scalingo
  - feature apps lifecycle management (echo APP_NAME | scalingo -a APP_NAME destroy) : Exploratory ok
    - add notifications (trying to delete... / deleted) : Todo
    

- github actions : 
  - deploy-on-demand though feature workflow dispatch: https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event
    - ability to start a workflow though an hyperlink => In Progress 
      - send a curl request though pure html because js is disabled in most chat apis => In Progress
        - Problem : This exposes a PAT in the resulting request, ABANDONING
      - hyperlink then should be generated an posted though curl notification

- front application example use case

- general:
  - (qol) workflow renovate bot github actions + config

- extract "nightly docker build that target a github executable release" (docker-scalingo-cli)
- extract "crons pipeline as scheduled one off scripts" (average)


### ABANDONNED
- github actions :
  - deploy-on-demand though feature workflow dispatch: https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event
    - ability to start a workflow though an hyperlink => In Progress
      - send a curl request though pure html because js is disabled in most chat apis => In Progress
        - Problem : This exposes a PAT in the resulting request, ABANDONING
      - hyperlink then should be generated an posted though curl notification