"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Página principal do site');
});
router.get('/sobre', (req, res) => {
    res.send('Página sobre');
});
router.get('/lorem:paragrafos', (req, res) => {
});
exports.default = router;
