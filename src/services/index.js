import authentication from './authentication';
import categories from './categories';
import users from './users';

export default app =>
  app
    .configure(users)
    .configure(authentication)
    .configure(categories);
