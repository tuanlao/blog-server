import { set } from 'lodash';
import { isNumber, pick } from 'lodash/fp';
import errors from 'errors';
import statusCodes from 'statusCodes';

export default context => {
  const { app, path, method, error } = context;
  if (error) {
    let { name, message, code } = error;
    let err = error;
    if (!isNumber(code)) {
      name = 'InternalServerError';
      message = error.toString();
      code = statusCodes.InternalServerError;
      err = new errors.InternalServerError(message);
      set(context, 'statusCode', code);
      set(context, 'error', err);
    }
    const log = code >= statusCodes.InternalServerError ? app.error : app.warn;
    log(
      `${path} ${method} - ${code} ${name} - ${message} - ${JSON.stringify(
        pick(['data', 'errors'])(err),
      )}`,
    );
    log(error.stack);
  }
};
