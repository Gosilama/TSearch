import { Router, Request, Response, NextFunction } from 'express';

type Wrapper = ((router: Router) => void);

export const applyMiddleware = ( middleware: Wrapper[], router: Router) => {
    for (const m of middleware) {
        m(router);
    }
};

type Handler = ((req: Request, res: Response, next: NextFunction) => Promise<void> | void);

type Route = {path: string, method: string, handler: Handler | Handler[]}

// we can either go this route or use a different route or approach. *pun intended
export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const { path, method, handler } = route;
        (router as any)[method](path, handler);
    }
};