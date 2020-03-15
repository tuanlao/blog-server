import mongoose from 'feathers-mongoose';
import { authenticate } from '@feathersjs/authentication';
import models from 'models';

export default app =>
  app
    .use(
      '/categories',
      mongoose({
        Model: models.Category,
        paginate: app.get('paginate'),
        multi: true,
      }),
    )
    .service('categories')
    .hooks({
      before: {
        find: [],
        get: [],
        create: [authenticate('jwt')],
        update: [authenticate('jwt')],
        patch: [authenticate('jwt')],
        remove: [authenticate('jwt')],
      },
      after: {},
    });
