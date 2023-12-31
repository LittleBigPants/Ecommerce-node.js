const cors = require('cors');
const express = require('express');
const routerApi = require('./routes');
const {logErrors,  errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const whitelist = ['http://localhost:3000', 'http://myapp.co', 'http://localhost:8080'];
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(new Error ('no permitido'));
    }
  }
}


app.get('/api', (req, res) => {
  res.send("muy buenas chavales");
})

app.listen(port, () => {
  console.log('mi port' + port);
});

routerApi(app);
app.use(cors(options));
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
