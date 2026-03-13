const express = require('express');
const router = express.Router();

// Defina as rotas com 'router', não 'app'
router.get('/produtos', (req, res) => {
    res.send('Lista de usuários');
});

module.exports = router; // Exporte o roteador