import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from 'App/ui/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders a snapshot of <App />', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
