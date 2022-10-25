const express = require('express');
const app = express();

//Muestra en el localhost
app.get('/', (req, res) => {
    res.send('Hablamelo care lagartija')
})

//Escucha el puerto e imprime
app.listen(3000, ()=> {
    console.log('estoy en el puerto 3000')
})