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

export function validatecreateForm({ name, species, breed, age, description }) {
    const errorsObj = {};

    if (name.length < 3) {
        errorsObj.name = "Name has to be at least 3 characters!";
    }

    if (!name) {
        errorsObj.name = "Name is required!";
    }

    if (species.length < 3) {
        errorsObj.species = "Species has to be at least 3 characters!";
    }

    if (!species) {
        errorsObj.species = "Species is required!";
    }

    if (breed.length < 3) {
        errorsObj.breed = "Breed has to be at least 3 characters!";
    }

    if (!breed) {
        errorsObj.breed = "Breed is required!";
    }

    if (age < 0) {
        errorsObj.age = "Age has to be positive digit!";
    }

    if (!age) {
        errorsObj.age = "Age is required!";
    }

    if (description.length < 10) {
        errorsObj.description = "Description has to be at least 10 characters!";
    }

    if (!description) {
        errorsObj.description = "Description is required!";
    }

    //todo validation for image url

    return errorsObj;
}
