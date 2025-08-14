import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

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

export const addDockerExample = (scope: Construct) => {
  return new lambda.DockerImageFunction(scope, 'say-hello', {
    code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '..', 'functions', 'say-hello')),
    memorySize: 512
  })
}