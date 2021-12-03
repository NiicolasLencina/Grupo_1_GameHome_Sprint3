const express = require('express');
const path= require('path');
const app = express();
const port = 3030;


// vistas y public static
app.use(express.static('public'));
app.set('view engine', 'ejs');
// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));

//Require de las rutas
const indexRutas= require('./src/routes/indexRutas')
const productCartRutas= require('./src/routes/productCartRutas')
const productDetailRutas = require('./src/routes/productDetailRutas')
const loginRutas= require('./src/routes/loginRutas')
const crearProductoRutas = require('./src/routes/createProductRutas')





app.listen(process.env.PORT ||port, () => console.log(`Servidor Funcionando! ${port}!`))



//Ruta index
app.use('/', indexRutas)



//Ruta login
app.use('/login',loginRutas)



//Ruta product cart
  app.use('/carritoDeCompras', productCartRutas)


  
//Ruta product detail
app.use('/detalleDeProducto',productDetailRutas)



//Ruta register

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
  })



  // Ruta creacion de producto

app.use('/crearProducto',crearProductoRutas)