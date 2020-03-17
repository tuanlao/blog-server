import hooks from 'hooks';

export default context => {
  if (context.params.user.role !== 'admin') {
    return hooks.deny();
  }
  return hooks.allow();
};
