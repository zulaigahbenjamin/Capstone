import express from 'express';
import { check, validationResult } from 'express-validator';
import userController from '../controllers/users.js';

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

router.post(
  '/register',
  [
    check('firstName').notEmpty().withMessage('First name is required'),
    check('lastName').notEmpty().withMessage('Last name is required'),
    check('emailAdress').isEmail().withMessage('Enter a valid email'), // Should be 'emailAddress'
    check('Pwd')
      .isLength({ min: 4 })
      .withMessage('Password must be at least 6 characters long'), // Should be 'pwd'
  ],
  validate,
  userController.register
);

router.post(
  '/login',
  [
    check('emailAddress').isEmail().withMessage('Enter a valid email'),
    check('pwd').exists().withMessage('Password is required'), // Fixed field name
  ],
  validate,
  userController.login
);

router.get('/', userController.getAllUsers); // This is just for testing and should be removed in production!

export default router;
