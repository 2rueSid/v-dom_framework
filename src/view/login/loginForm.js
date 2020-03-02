import { h } from 'virtual-dom';
import input from '../input';
import button from '../button';

const loginForm = (state = {}, props = {}) => {
	return h('form.form-view.login-form', { id: 'login', style: { left: props.logStyle } }, [
		input(
			{},
			{ className: 'input-field', type: 'text', placeholder: 'user name', required: 'true' },
		),
		input(
			{},
			{ className: 'input-field', type: 'password', placeholder: 'user password', required: true },
		),
		input({}, { className: 'form-remember-checkbox', type: 'checkbox' }),
		h('span', {}, 'remember password'),
		button({}, { type: 'submit', className: 'submit-btn' }, 'login'),
	]);
};

export default loginForm;
