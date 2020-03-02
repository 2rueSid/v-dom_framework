import { create, diff, patch } from 'virtual-dom';
import validator from './validators/propsValidate';
import observable from './observable';

const App = () => {
	const appDom = {
		node: null,
		rootTree: null,
		tree: null,
	};

	const listener = state => {
		let newTree = appDom.rootTree({}, state);

		let patches = diff(appDom.tree, newTree);
		appDom.node = patch(appDom.node, patches);
		appDom.tree = newTree;
	};
	return {
		createComponent: (state = {}, props = {}, view) => {
			const observableState = observable(state, listener);

			return () => {
				if (validator(props, view.propTypes ? view.propTypes : {})) {
					return view(observableState, props);
				} else {
					return 'props not valid';
				}
			};
		},

		renderDOM: component => {
			appDom.rootTree = component;
			appDom.tree = component();
			appDom.node = create(appDom.tree);
			document.body.appendChild(appDom.node);
		},
	};
};

export default App();
