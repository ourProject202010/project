const validation = (values) => {
	let errors = {};

	Object.keys(values).forEach((key) => {
		switch (key) {
			case 'phone': {
				let phone = '';
				const regexp = /^(\+38|8)?0{1}[5679]{1}[03456789]{1}\d{7}$/;
				if (values[key] === '') {
					phone = 'Упс, забыли ввести номер телефона!';
				}
				else if (!regexp.test(values[key])) {
					phone = 'Не корректный номер телефона'
				}
				else {
					if (values.phone.charAt(0) === '0') {
						values.phone = '+38'+values.phone;
					}
					else if (values.phone.charAt(0) === '8') {
						values.phone = '+3'+values.phone;
					}
				}
				if (phone) {
					errors = { ...errors, phone };
				}
				break;
			}
			case 'email': {
				let email = '';
				const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
				if (values[key] === '') {
					email = 'Упс, забыли ввести имейл!';
				}
				else if (!regexp.test(values[key])) {
					email = 'Не корректный имейл'
				}
				else {
					email = '';
				}
				if (email) {
					errors = { ...errors, email };
				}
				break;
			}
			case 'password':
				let password = '';
				if (values[key] === '') {
					password = 'Упс, забыли ввести пароль!';
				}
				else if (values[key].length < 6) {
					password = 'Слишком короткий пароль'
				}
				else {
					password = ''
				}
				if (password) {
					errors = { ...errors, password };
				}
				break;
			case 'repassword':
				let repassword = '';
				if (values[key] === '' || values.password !== values[key]) {
					repassword = 'Пароли не сповпадают';
				}
				else {
					repassword = '';
				}
				if (repassword) {
					errors = { ...errors, repassword };
				}
				break;
			case 'isMaster': {
				let checkBox = '';
				if (!values[key] && !values['isClient']) {
					checkBox = 'Необходимо выбрать один из вариантов'
				}
				else {
					checkBox = '';
				}
				if (checkBox) {
					errors = { ...errors,checkBox };
				}
				break;
			}
			case 'isClient':
				let checkBox = '';
				if (!values[key] && !values['isMaster']) {
					checkBox = 'Необходимо выбрать один из вариантов'
				}
				else {
					checkBox = '';
				}
				if (checkBox) {
					errors = { ...errors,checkBox };
				}
				break;
		}
	})
	return errors
}

export default validation;
