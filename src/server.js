import app from 'app';

export default () => {
  const port = app.get('port');
  app.listen(port, () => {
    app.info(`App listening on ${port}`);
  });
};
