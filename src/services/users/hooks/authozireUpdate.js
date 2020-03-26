import hooks from 'hooks';

export default context => {
  if (
    context.params.user.role !== 'admin' &&
    context.id !== context.params.user._id
  ) {
    return hooks.deny();
  }
  return hooks.allow();
};
