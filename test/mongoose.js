import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

export default mongoose;
