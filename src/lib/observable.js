const observable = (target, listener) => {
	const handler = {
		set: (target, name, value) => {
			target[name] = value;
			listener(target);
			return true;
		},
		get: (target, name) => {
			return Object.freeze(target[name]);
		},
	};
	const observable = new Proxy(target, handler);
	return observable;
};

export default observable;
