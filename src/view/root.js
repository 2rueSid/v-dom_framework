import { h } from 'virtual-dom';
import register from './register/register';
import login from './login/login';
import switchButtons from './switchButtons';

const root = (state = {}, props = {}) => {
	return h('div.root.container', props, [
		register({}, { regStyle: props.regStyle }),
		login({}, { logStyle: props.logStyle }),
		switchButtons(),
	]);
};

export default root;
