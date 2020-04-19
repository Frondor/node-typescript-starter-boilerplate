import express = require('express');
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const result: number = 2 + 22 + 22;
  res.send('Hello World!' + result);
});

export default app;
