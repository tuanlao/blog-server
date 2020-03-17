import mongoose from 'feathers-mongoose';
import { authenticate } from '@feathersjs/authentication';
import models from 'models';
import hooks from './hooks';

export default app =>
  app
    .use(
      '/posts',
      mongoose({
        Model: models.Post,
        paginate: app.get('paginate'),
        multi: true,
      }),
    )
    .service('posts')
    .hooks({
      before: {
        find: [],
        get: [],
        create: [authenticate('jwt')],
        update: [authenticate('jwt')],
        patch: [authenticate('jwt')],
        remove: [authenticate('jwt'), hooks.authorizeRemove],
      },
      after: {},
    });
