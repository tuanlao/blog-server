import authentication from './authentication';
import users from './users';

export default app => app.configure(users).configure(authentication);
