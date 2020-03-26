import { hooks as authHooks } from '@feathersjs/authentication-local';
import hooks from 'hooks';
import authorizeUpdate from './authozireUpdate';
import assignRole from './assignRole';

export default {
  ...authHooks,
  ...hooks,
  assignRole,
  authorizeUpdate,
};
