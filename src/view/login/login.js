import { h } from 'virtual-dom';
import loginForm from './loginForm';

const login = (state = {}, props = {}) => {
	return h('div.login', props, [loginForm({}, { logStyle: props.logStyle })]);
};

export default login;
