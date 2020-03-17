import authorization from './authorization';
import logDebug from './logDebug';
import logError from './logError';

export default {
  allow: authorization.allow,
  deny: authorization.deny,
  next: authorization.next,
  logDebug,
  logError,
};
