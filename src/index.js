const path = require("path");
const express = require('express')
const morgan = require('morgan');
const handlebars = require('express-handlebars') ;
const app = express();
const port = 3000;



//HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);


app.get('/tin-tuc', (req, res) => {
    res.render(
        'home'
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})