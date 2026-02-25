import express from 'express';
import { engine } from 'express-handlebars';
import usersController from './controllers/users_controller.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersController);

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
