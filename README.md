### Branch [`as-independent-cdk`](https://github.com/svidgen/amplify-docker-lambda-testing/tree/as-independent-cdk)

1. Configures docker lambda as a separate CDK resource.
1. Deploys successfully via sandbox: `npx ampx sandbox`.
1. Deploys successfully via Amplify hosting/build using custom build image: `aws/codebuild/amazonlinux-x86_64-standard:5.0`.

### Main ...

1. Configures docker lambda within `defineFunction`.
1. Deployes successfully via sandbox: `npx ampx sandbox`.
1. Testing hosting deployment now ... ⏳
