import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users';
import auth from './routes/auth';
import posts from './routes/posts';

const port = process.env.PORT || 3001;

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Running on localhost: ${port}`));
