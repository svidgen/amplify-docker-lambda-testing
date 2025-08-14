## This Branch

| | |
| -- | -- |
| Configures docker lambda via `defineFunction()`. | ✅ |
| Deploys via sandbox. | ✅ |
| Deploys via Amplify hosting/build. | ✅ |

### TLDR

```ts
export const sayHello = defineFunction(scope => {
  return new lambda.DockerImageFunction(scope, 'say-hello-in-define-function', {
    code: lambda.DockerImageCode.fromImageAsset(
      path.join(__dirname, '..', 'functions', 'say-hello'),
      {
        platform: ecr_assets.Platform.LINUX_AMD64
      }
    ),
    memorySize: 512
  })
});
```

**REQUIRED:** Amplify build image: `aws/codebuild/amazonlinux-x86_64-standard:5.0`. (Or similar image that includes docker.)

Return to [`main`](https://github.com/svidgen/amplify-docker-lambda-testing/tree/main)