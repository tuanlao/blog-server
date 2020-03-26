import errors from 'errors';

export default context => {
  throw new errors.MethodNotAllowed({
    method: context.method,
    path: context.path,
  });
};
