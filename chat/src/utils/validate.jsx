export default ({ isAuth, values, errors }) => {
    
    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = 'Input  email address';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Invalid email address";
            }
        },
        password: (value) => {
            if (!value) { 
                errors.password = "Enter password";
            }
            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
                errors.password = isAuth ? "Invalid password" : "Too easy password";
            }  
        }
    }

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));

};