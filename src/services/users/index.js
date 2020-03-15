import mongoose from 'feathers-mongoose';
import { authenticate } from '@feathersjs/authentication';
import { hooks } from '@feathersjs/authentication-local';
import { validateSchema } from 'feathers-hooks-common';
import ajv from 'ajv';
import schemas from 'schemas';
import models from 'models';

export default app =>
  app
    .use(
      '/users',
      mongoose({
        Model: models.User,
        paginate: app.get('paginate'),
        multi: true,
      }),
    )
    .service('users')
    .hooks({
      before: {
        find: [],
        get: [],
        create: [
          authenticate('jwt'),
          validateSchema(schemas.UserCreateRequest, ajv),
          hooks.hashPassword('password'),
        ],
        update: [authenticate('jwt'), hooks.hashPassword('password')],
        patch: [authenticate('jwt')],
        remove: [authenticate('jwt')],
      },
      after: {
        all: [hooks.protect('password')],
      },
    });
