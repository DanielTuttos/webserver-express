
const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('hola mundo jovenes');

    res.render('home.hbs', {
        nombre: 'Daniel'
    });

});

app.get('/about', (req, res) => {
    //res.send('hola mundo jovenes');

    res.render('about.hbs', {
        img: 'assets/img/imagen.jpg'
    });

});

app.listen(port, () => {
    console.log(`escuchando peticiones en puerto ${port}`);
});