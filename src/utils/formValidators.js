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

export function validateRegisterForm({
    email,
    username,
    password,
    rePassword,
}) {
    const errorsObj = {};

    if (email.length < 5) {
        errorsObj.email = "Email has to be at least 5 characters!";
    }

    if (!email) {
        errorsObj.email = "Email is required!";
    }

    if (username.length < 5) {
        errorsObj.username = "Username has to be at least 5 characters!";
    }

    if (!username) {
        errorsObj.username = "Username is required!";
    }

    if (password.length < 3) {
        errorsObj.password = "Password has to be at least 5 characters!";
    }

    if (!password) {
        errorsObj.password = "Password is required!";
    }

    if (password !== rePassword) {
        errorsObj.rePassword = "Passwords must match!";
        if (!errorsObj.password) {
            errorsObj.password = "Passwords must match!";
        }
    }

    if (!password) {
        errorsObj.rePassword = "Repeat password is required!";
    }

    return errorsObj;
}
