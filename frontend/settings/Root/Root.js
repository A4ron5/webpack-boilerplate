import React from 'react';
import { hot } from 'react-hot-loader';

import 'common/styles';
import Root from './styles';

class RootComponent extends React.PureComponent {
	render() {
		return (
			<Root>
				GG WO
			</Root>
		);
	}
}

export default hot(module)(RootComponent);
