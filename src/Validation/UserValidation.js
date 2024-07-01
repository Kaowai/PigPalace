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

const RegisterUserValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .matches(/^[a-zA-Z0-9]{6,20}$/, "Password must be alphanumeric with no special characters"),
    name: yup
        .string()
        .trim()
        .required("User Name is required"),
    address: yup
        .string()
        .required("Address is required"),
    phoneNumber: yup
        .string()
        .required("Phone number is required"),
    sex: yup
        .string()
        .required("Gender is required"),
    coefficientsSalary: yup
        .number()
        .required("Coefficients Salary is required"),
    roleName: yup
        .string()
        .required("Role is required"),
})

export {
    LoginValidation,
    RegisterValidation,
    ResetPasswordValidation,
    RegisterUserValidation
}