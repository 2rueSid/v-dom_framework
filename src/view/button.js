import { h } from 'virtual-dom';

const button = (state = {}, props = {}, name = '') => {
	return h('button', props, name);
};

export default button;
