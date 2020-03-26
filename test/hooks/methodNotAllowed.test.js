import methodNotAllowed from 'hooks/methodNotAllowed';

import mockApp from '../app';

describe('hooks/methodNotAllowed', () => {
  test('return forbidden MethodNotAllow', async () => {
    const app = mockApp.create();
    mockApp.configure(app);
    await mockApp.callHook(
      app,
      context => {
        expect(() => {
          methodNotAllowed(context);
        }).toThrow();
      },
      'test',
      'before',
      'create',
      [{}, {}],
    );
  });
});
