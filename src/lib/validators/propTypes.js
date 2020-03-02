const rules = {
	string: value => typeof value === 'string',
	boolean: value => typeof value === 'boolean',
	array: value => typeof value === 'object',
	object: value => typeof value === 'object',
	number: value => typeof value === 'number',
	function: value => typeof value === 'function',
};

export default rules;
