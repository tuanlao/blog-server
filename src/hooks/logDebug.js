import { pick } from 'lodash/fp';

export default context => {
  context.app.debug(
    `Context: ${JSON.stringify(
      pick([
        'path',
        'type',
        'method',
        'route',
        'id',
        'data',
        'params',
        'result',
        'dispatch',
        'error',
        'statusCode',
      ])(context),
    )}`,
    null,
    2,
  );
};
