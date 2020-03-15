import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import reactive from 'feathers-reactive';
import common from 'feathers-hooks-common';

import services from 'services';
import logger from 'logger';
import hooks from 'hooks';
import resources from 'resources';

const app = express(feathers())
  .configure(configuration())
  .configure(logger);

app
  .use(express.json({}))
  .use(express.urlencoded({ extended: true }))
  .configure(express.rest())
  .use(cors({ origin: true, exposedHeaders: ['Blog-Server'] }))
  .options('*', cors({ origin: true, exposedHeaders: ['Blog-Server'] }))
  .use(compress())
  .use(helmet())
  .configure(resources)
  .configure(services)
  .configure(reactive({ idField: '_id' }))
  .use(express.notFound())
  .use(express.errorHandler({ logger }))
  .hooks({
    before: {
      all: [
        hooks.logDebug,
        common.paramsFromClient('paginate', 'collation', 'mongoose'),
      ],
    },
    after: { all: [hooks.logDebug] },
    error: { all: [hooks.logError, hooks.logDebug] },
  });

export default app;
