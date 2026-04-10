const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MIDDLEWARE CAPTCHA
async function validarCaptcha(req, res, next) {
    const token = req.body.token;

    if (!token) {
        return res.status(400).json({ erro: 'Captcha não enviado' });
    }

    try {
        const response = await axios.post(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET,
                response: token
            })
        );

        if (!response.data.success) {
            return res.status(403).json({ erro: 'Captcha inválido' });
        }

        next();

    } catch {
        res.status(500).json({ erro: 'Erro no captcha' });
    }
}

// VALIDAR CAPTCHA
app.post('/validar-captcha', validarCaptcha, (req, res) => {
    res.json({ ok: true });
});

// BUSCAR CEP
app.post('/buscar-cep', validarCaptcha, async (req, res) => {
    const { cep, numero } = req.body;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        if (response.data.erro) {
            return res.status(404).json({ erro: 'CEP não encontrado' });
        }

        res.json({
            logradouro: response.data.logradouro,
            numero: numero || 'S/N',
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            uf: response.data.uf
        });

    } catch {
        res.status(500).json({ erro: 'Erro ao buscar CEP' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});