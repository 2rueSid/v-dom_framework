import { h } from 'virtual-dom';
import app from '../lib/reactive';
import button from './button';

const buttons = (state = {}, props = {}) => {
	const loginButtonClicked = () => {
		state.regStyle = '450px';
		state.logStyle = '50px';
	};
	const regButtonClicked = () => {
		state.regStyle = '50px';
		state.logStyle = '-400px';
	};

	return h('div.buttons', {}, [
		button(
			{},
			{
				className: `switch_button`,
				type: 'button',
				onclick: loginButtonClicked,
			},
			'login',
		),
		button(
			{},
			{
				className: `switch_button`,
				type: 'button',
				onclick: regButtonClicked,
			},
			'register',
		),
	]);
};

export default app.createComponent({ regStyle: null, logStyle: null }, {}, buttons);
