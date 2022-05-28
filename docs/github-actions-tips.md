# How to have and env var as a valid workflow input
It it not possible to directly set an env variable as a reusable workflow input.

Here is a pattern that enable you to bypass this limitation.

```yaml
env:
  an-env-variable: 'plop'

jobs:
  dynamic-variables:
    outputs:
      my-env-variable: ${{ steps.my-env-variable-id.outputs.value }}
        runs-on: ubuntu-latest
    steps:
      - name: My job output from env variable
        id: my-env-variable-id
        run: |
          MY_VARIABLE=${{ env.an-env-variable }}
          echo "::set-output name=value::$MY_VARIABLE"

  some-other-job:
    needs:
      - dynamic-variables
    uses: ./.github/workflows/a-workflow-that-need-my-env-variable-as-input.yml
    with:
      worflow-input-name: ${{ needs.dynamic-variables.outputs.my-env-variable }}
  
```