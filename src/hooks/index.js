import authorization from './authorization';
import methodNotAllowed from './methodNotAllowed';
import logDebug from './logDebug';
import logError from './logError';

export default {
  allow: authorization.allow,
  deny: authorization.deny,
  next: authorization.next,
  methodNotAllowed,
  logDebug,
  logError,
};
