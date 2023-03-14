const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const passport = require('passport');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(passport.initialize())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});