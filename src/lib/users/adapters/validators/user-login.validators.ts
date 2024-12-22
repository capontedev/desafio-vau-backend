import { check } from 'express-validator';

export const userLoginValidation = () => [
  check('email')
    .exists().withMessage('email requerido')
    .isEmail().withMessage('Debe se un email válido'),
  check('password')
    .exists().withMessage('password requerido')
    .isString().isLength({ min: 6 }).withMessage('password debe tener mínimo 6 caracteres')
];
