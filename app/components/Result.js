// Result: Displays props being passed in.
import { Link, browserHistory } from 'react-router';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { result, title, list } = this.props;

    const ResultsList = (list) ? list.map((item, i)=>{
      return (<li key={`result-${i}`}>
      <Link to={'/therapists/' + item}>{item}</Link>
      </li>);
    }) : '';

    return (
      <header>
        <h3>{title}</h3>
        <p><em>{result ? result : 'You still have unaswered quesitons.'}</em></p>
        <ul>{ResultsList}</ul>
      </header>
    );
  }
}
