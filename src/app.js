import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import { redisStore } from './databases/redisStore.js';

const app = express();

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(
  session({
    // descomentar para almacenar las sesiones en redis
    // store: redisStore,
    secret: 'secret_key',
    saveUninitialized: false,
    name: 'grupal3-session',
    cookie: { maxAge: 86400000 }, // 1 día
    resave: false,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static('src/public'));
app.use('/', routes);

export default app;
