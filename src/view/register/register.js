import { h } from 'virtual-dom';
import registerForm from './registerForm';

const register = (state = {}, props = {}) => {
	return h('div.register', props, [registerForm({}, { regStyle: props.regStyle })]);
};

export default register;
