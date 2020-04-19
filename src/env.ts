if (process.env.NODE_ENV !== 'production') require('dotenv').config();

export const HTTP_PORT = Number(process.env.HTTP_PORT);
export const HTTP_HOSTNAME = process.env.HTTP_HOSTNAME;
