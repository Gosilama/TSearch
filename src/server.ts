import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './lib';
import middleware from './middleware';
import routes from './services';
import errorHandlers from "./middleware/errorHandlers";

process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});

process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
});
