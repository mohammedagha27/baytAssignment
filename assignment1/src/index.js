const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`server is running in port http://localhost:${app.get('port')}`);
});
