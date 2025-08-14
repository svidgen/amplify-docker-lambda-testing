import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ecr_assets from 'aws-cdk-lib/aws-ecr-assets';
import { Construct } from 'constructs';
import { type ClientSchema, a, defineData, defineFunction } from '@aws-amplify/backend';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

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