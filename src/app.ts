import express = require('express');
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Chau World!');
});

export default app;
