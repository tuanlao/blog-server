import authorization from 'hooks/authorization';
import errors from 'errors';

describe('hooks/authorization', () => {
  describe('allow', () => {
    test('return underfined', () => {
      expect(authorization.allow()).toBeUndefined();
    });
  });
  describe('deny', () => {
    test('throw Forbidden error', () => {
      const data = {};
      expect(() => authorization.deny(data)).toThrowError(
        new errors.Forbidden(data),
      );
    });
  });
  describe('next', () => {
    test('return context', () => {
      const context = {};
      expect(authorization.next(context)).toEqual(context);
    });
  });
});
