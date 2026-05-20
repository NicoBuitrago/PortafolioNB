import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { body, validationResult } from 'express-validator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post(
  '/api/contact',
  [
    body('name').trim().isLength({ min: 2 }).withMessage('El nombre es obligatorio.'),
    body('email').isEmail().withMessage('Correo inválido.'),
    body('message').trim().isLength({ min: 10 }).withMessage('El mensaje debe tener mínimo 10 caracteres.')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false, errors: errors.array() });
    }

    // En producción puedes conectar este punto con SendGrid, Resend, Nodemailer o un CRM.
    console.log('Nuevo contacto desde portafolio:', req.body);
    return res.status(200).json({ ok: true, message: 'Mensaje recibido correctamente.' });
  }
);

app.use(express.static(path.join(__dirname, '')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio running on port ${PORT}`);
});
