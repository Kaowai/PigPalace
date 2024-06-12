import * as yup from 'yup';

// login validation
const LoginValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
        .string()
        .required("Password is required").trim()
});

const RegisterValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(/^[a-zA-Z0-9]{6,20}$/, "Password must be alphanumeric with no special characters"),
    userName: yup
        .string()
        .trim()
        .required("User Name is required")
        .min(6, "User Name must be at least 6 characters")
        .max(20, "User Name must be at most 20 characters")
        .matches(/^[a-zA-Z0-9 ]{6,20}$/, "User Name must be alphanumeric with no special characters"),
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(/^[a-zA-Z0-9]{6,20}$/, "Password must be alphanumeric with no special characters")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});
const ResetPasswordValidation = yup.object().shape({
    newPassword: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(/^[a-zA-Z0-9]{6,20}$/, "Password must be alphanumeric with no special characters")
});

export {
    LoginValidation,
    RegisterValidation,
    ResetPasswordValidation
}