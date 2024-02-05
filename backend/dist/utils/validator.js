"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            await validation.run(req);
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            // Send the errors as a JSON response with a 422 status code
            return res.status(422).json({ errors: errors.array() });
        }
        // If no errors, proceed to the next middleware
        next();
    };
};
exports.validate = validate;
exports.signupValidator = [
    // name validation
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('Name is required'),
    // email validation
    (0, express_validator_1.body)('email')
        .trim()
        .isEmail()
        .withMessage('Email is required'),
    // password validation
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];
exports.default = { validate: exports.validate, signupValidator: exports.signupValidator };
//# sourceMappingURL=validator.js.map