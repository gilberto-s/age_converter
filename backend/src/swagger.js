const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Time Converter API',
    description: 'Voxus Challenge',
  },
  host: 'localhost:8081',
  schemes: ['http'],
};

const outputFile = './docs/swagger.json';

const endpointsFiles = ['./app/routes/timeConverter.routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
