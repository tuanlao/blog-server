import authentication from './authentication';
import categories from './categories';
import users from './users';
import posts from './posts';

export default app =>
  app
    .configure(users)
    .configure(authentication)
    .configure(categories)
    .configure(posts);
