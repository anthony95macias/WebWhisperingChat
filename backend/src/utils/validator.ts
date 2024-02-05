import { Request, Response, NextFunction } from 'express';
import { body, ValidationChain, validationResult } from 'express-validator';

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            await validation.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Send the errors as a JSON response with a 422 status code
            return res.status(422).json({ errors: errors.array() });
        }
        // If no errors, proceed to the next middleware
        next();
    };
};

export const signupValidator = [
    // name validation
    body('name')
        .notEmpty()
        .withMessage('Name is required'),

    // email validation
    body('email')
        .trim()
        .isEmail()
        .withMessage('Email is required'),

    // password validation
    body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

export default { validate, signupValidator };
