const express = require('express');
const path= require('path');
const app = express();
const port = 3030;

//Ruta elementos estaticos
app.use(express.static('public'))
app.use(express.static('public'))
app.listen(process.env.PORT ||port, () => console.log(`Servidor Funcionando! ${port}!`))

//Ruta index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
//Ruta login


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})





//Ruta product cart
  app.get('/carritoDeCompras', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html')
  })

//Ruta product detail
  app.get('/detalleDeProducto', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html')
  })

//Ruta register

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
  })

  
 
