import { check } from 'express-validator';

export const userCreateValidation = () => [
  check('username')
    .exists().withMessage('username requerido')
    .isString().isLength({ min: 3 }).withMessage('username debe tener mínimo 3 caracteres'),
  check('email')
    .exists().withMessage('email requerido')
    .isEmail().withMessage('Debe se un email válido'),
  check('password')
    .exists().withMessage('password requerido')
    .isString().isLength({ min: 6 }).withMessage('password debe tener mínimo 6 caracteres')
];
