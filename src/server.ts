import http from 'http';
import express from 'express';
import { applyMiddleware } from './lib';
import middleware from './middleware';

const router = express();
applyMiddleware(middleware, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
