import mongoose from 'feathers-mongoose';
import { authenticate } from '@feathersjs/authentication';
import { validateSchema } from 'feathers-hooks-common';
import ajv from 'ajv';
import schemas from 'schemas';
import models from 'models';
import hooks from './hooks';

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
        find: [authenticate('jwt')],
        get: [authenticate('jwt')],
        create: [
          validateSchema(schemas.UserCreateRequest, ajv),
          hooks.hashPassword('password'),
          hooks.assignRole,
        ],
        update: [
          authenticate('jwt'),
          hooks.hashPassword('password'),
          hooks.assignRole,
        ],
        patch: [authenticate('jwt'), hooks.assignRole],
        remove: [hooks.methodNotAllowed],
      },
      after: {
        all: [hooks.protect('password')],
      },
    });
