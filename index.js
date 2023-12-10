const express = require('express');
const routerApi = require('./routes');
const {logErrors,  errorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("muy buenas chavales");
})

app.listen(port, () => {
  console.log('mi port' + port);
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
