## This Branch

| | |
| -- | -- |
| Configures docker lambda "independently" with "raw" CDK. | ✅ |
| Deploys via sandbox. | ✅ |
| Deploys via Amplify hosting/build. | ✅ |

### TLDR

```ts
export const addDockerExample = (scope: Construct) => {
  return new lambda.DockerImageFunction(scope, 'say-hello', {
    code: lambda.DockerImageCode.fromImageAsset(
      path.join(__dirname, '..', 'functions', 'say-hello'),
      {
        platform: ecr_assets.Platform.LINUX_AMD64
      }
    ),
    memorySize: 512
  })
}
```

And then in `amplify/backend.ts`:

```ts
const backend = defineBackend({
  auth,
  data,
});

addDockerExample(backend.stack);
```

**REQUIRED:** Amplify build image: `aws/codebuild/amazonlinux-x86_64-standard:5.0`. (Or similar image that includes docker.)

Return to [`main`](https://github.com/svidgen/amplify-docker-lambda-testing/tree/main)