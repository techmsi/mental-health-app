
import { Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav>
          <Link to="/" activeClassName="active">Home</Link>
          <Link to="/questionnaire">Questionnaire</Link>
          {this.props.children}
        </nav>
    );
  }
}
