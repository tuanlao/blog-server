import { set, get } from 'lodash';

export default context => {
  if (get(context, 'params.user.role') !== 'admin') {
    set(context, 'data.role', 'member');
  }
};
