import { HTTP_PORT, HTTP_HOSTNAME } from './env';
import server from './server';

server.listen(HTTP_PORT, HTTP_HOSTNAME, () =>
  console.log(`Example app listening at http://${HTTP_HOSTNAME}:${HTTP_PORT}`)
);
