const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//midleware
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/productos', require('./src/productos'));

//empezando el servidor
app.listen(3000, () => {
    console.log('Server on port 3000');
});