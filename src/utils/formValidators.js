export function validateLoginForm({ email, password }) {
    const errorsObj = {};

    if (email.length < 5) {
        errorsObj.email = "Email has to be at least 5 characters!";
    }

    if (!email) {
        errorsObj.email = "Email is required!";
    }

    if (password.length < 3) {
        errorsObj.password = "Password has to be at least 5 characters!";
    }

    if (!password) {
        errorsObj.password = "Password is required!";
    }

    return errorsObj;
}
