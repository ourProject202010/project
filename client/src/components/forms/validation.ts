import {FormsErrorsType, FormsValuesType} from "../../types";

const validation = (values: FormsValuesType) => {
    const errors: FormsErrorsType = {};
    if (!values.phone) {
        errors.phone = 'Обьязательное поле!';
    } else if (values.phone.length < 13) {
        errors.phone = `Номер телефона должен состоять из 13 символов. Вы ввели ${values.phone.length}`;
    }

    if (!values.email) {
        errors.email = 'Обьязательное поле!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Не корректный email';
    }

    if (!values.password) {
        errors.password = 'Обьязательное поле!';
    } else if (values.password.length < 6) {
        errors.password = `Пароль должен состоять из не менее 6-ти символов. Вы ввели ${values.password.length}`
    }
    return errors
}

export default validation;