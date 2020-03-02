const propsValidate = (props, propRules) => {
	const propsValues = props;
	const propRulesValues = propRules;

	const validate = () => {
		if (!propsValues.length && propRulesValues.length) {
			return false;
		}
		if (!propRulesValues.length) {
			return true;
		}
		for (let key in propsValues) {
			if (propRulesValues[key]) {
				return propRulesValues[key](propsValues[key]) ? true : false;
			}
		}
	};

	return validate();
};

export default propsValidate;
