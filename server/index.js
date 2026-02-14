const jsonServer = require('json-server');
const path = require('path');

const ALLOWED_ORIGINS = [
    'https://ephadeev.github.io',
    'http://localhost:5173'
];

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
    const origin = req.headers.origin;

    if (!origin) {
        res.status(403).json({ error: 'Direct access forbidden' });
        return;
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
        res.status(403).json({ error: 'CORS policy violation' });
        return;
    }

    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }
    next();
});

server.use(middlewares);
server.use(router);

module.exports = server;