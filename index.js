const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/nodeStarter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
  console.log(`App is live on port ${PORT}`);
});
