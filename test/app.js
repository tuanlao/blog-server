// For testing services and hooks.

import util from 'util';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import { assign } from 'lodash';
import { isFunction } from 'lodash/fp';
import logger from 'logger';
import mongoose from './mongoose';

const create = () =>
  express(feathers())
    .configure(configuration())
    .configure(logger)
    .set('mongoose', mongoose)
    .set('apn', {
      async send() {
        return undefined;
      },
    })
    .set('fcm', {
      async send() {
        return undefined;
      },
    });
const configure = (app, path, service, hooks) => {
  app.set('fileStore', {
    toURL: async name => `${app.get('fileStoreURL')}/${name}`,
  });
  /* eslint-disable no-param-reassign */
  path = path || 'test';
  service = assign(
    {
      id: '_id',
      app,
      path,
      async find(params) {
        if (!params.query) {
          params.query = {};
        }
        return params.paginate === false
          ? [{ _id: 'test' }]
          : {
              total: 1,
              limit: params.query.$limit || 20,
              skip: params.query.$skip || 0,
              data: params.query.$skip > 0 ? [] : [{ _id: 'test' }],
            };
      },
      async get(id) {
        return { _id: id };
      },
      async create(data) {
        return data;
      },
      async update(id, data) {
        return id ? { _id: id, ...data } : [data];
      },
      async patch(id, data) {
        return id ? { _id: id, ...data } : [data];
      },
      async remove(id) {
        return id ? { _id: id } : [{ _id: 'test' }];
      },
    },
    service || {},
  );
  /* eslint-enable no-param-reassign */
  app.use(`/${path}`, service);
  if (hooks) {
    app.service(path).hooks(hooks);
  }
  if (isFunction(service.setup)) {
    service.setup(app, path);
  }
  return app;
};
const callHook = async (
  app,
  hook,
  path,
  type,
  method,
  params = [],
  pre = () => {},
) => {
  let result = null;
  const service = app.service(path);
  const hooks = {
    [type]: {
      [method]: [
        pre,
        hook,
        context => {
          result = context;
        },
      ],
    },
  };
  service.hooks(hooks);
  await service[method](...params);
  return result;
};
const delay = ms => util.promisify(setTimeout)(ms || 500);

export default { create, configure, callHook, delay };
