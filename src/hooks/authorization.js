import errors from 'errors';

// Returning `undefined` authorizes the subject
const allow = () => undefined;

// Throwing `Forbidden` unauthorizes the subject
const deny = data => {
  throw new errors.Forbidden(data);
};

// Returning `context` continues authorization
const next = context => context;

export default {
  allow,
  deny,
  next,
};
