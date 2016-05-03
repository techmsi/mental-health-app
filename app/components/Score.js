// Score: Displays props being passed in.


import { Result, appStyles } from '../modules';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { score, total, title, result, list } = this.props;

    const ResultsList = (list) ? list.map((item, i)=>{
      return <li key={`result-${i}`}>{item}</li>
    }) : '';

    return (
      <aside className={appStyles.score}>
      <Result title={title} result={result} list={list} />
        <p>Score:
        <span>
          <em> {score}</em> out of
          <em> {total}</em>
        </span>
        </p>
      </aside>
    );
  }
}
