import swaggerAutogen from 'swagger-autogen';

import dotenv from "dotenv";
dotenv.config();
const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Swagger Demo Project',
    description: 'Implementation of Swagger with TypeScript'
  },
  servers: [
    {
      url: `${process.env.BASE_URL}:${process.env.PORT}/api/v1`,
      description: ''
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      }
    }
  },
  definitions: {
    SingupDTO: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        name: { type: 'string' },
        password: { type: 'string' }
      }
      
    },
    LoginDTO: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/router/index.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
