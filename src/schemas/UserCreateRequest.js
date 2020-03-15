export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'UserCreateRequest',
  type: 'object',
  properties: {
    email: {
      type: 'string',
      minLength: 6,
      maxLength: 50,
      format: 'email',
    },
    password: {
      type: 'string',
      pattern: '^(?=.*[0-9])(?=.*[A-Za-z])[ -~]{6,}$',
    },
  },
  required: ['email', 'password'],
};
