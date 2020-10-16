import {FormsErrorsType, FormsValuesType} from "../../types";

const validation = (values: FormsValuesType) => {
    const errors: FormsErrorsType = {};
    if (!values.phone) {
        errors.phone = 'Обьязательное поле!';
    } else if (!/^(\+38|8)?0{1}[5679]{1}[03456789]{1}\d{7}$/.test(values.phone)) {
        errors.phone = `Не корректный номер телефона`;
    }
    else {
        if (values.phone.charAt(0) === '0') {
            values.phone = '+38'+values.phone;
        }
         else if (values.phone.charAt(0) === '8') {
            values.phone = '+3'+values.phone;
        }
    }

    if (!values.email) {
        errors.email = 'Обьязательное поле!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Не корректный email';
    }

    if (!values.password) {
        errors.password = 'Обьязательное поле!';
    } else if (values.password.length < 6) {
        errors.password = `Пароль должен состоять из не менее 6-ти символов.`
    }

    if (!values.repassword) {
        errors.repassword = 'Обьязательное поле!';
    } else if (values.repassword !== values.password) {
        errors.repassword = `Пароли не совпадают`
    }
    return errors
}

export default validation;
