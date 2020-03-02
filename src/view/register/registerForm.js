import { h } from 'virtual-dom';
import input from '../input';
import button from '../button';

const registerForm = (state = {}, props = {}) => {
	return h('form.form-view.register-form', { id: 'register', style: { left: props.regStyle } }, [
		input(
			{},
			{ className: 'input-field', type: 'text', placeholder: 'user name', required: 'true' },
		),
		input(
			{},
			{ className: 'input-field', type: 'email', placeholder: 'user email', required: true },
		),
		input(
			{},
			{ className: 'input-field', type: 'password', placeholder: 'user password', required: true },
		),
		button({}, { type: 'submit', className: 'submit-btn' }, 'register'),
	]);
};

export default registerForm;
