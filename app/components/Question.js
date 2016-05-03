// Component: Question

import { Answer } from '../modules';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {}
    };
  }

  componentWillMount(){
    const localStateJson = localStorage.getItem(`state-${this.props.id}`);
    console.log(`componentWillMount
      ${this.constructor.name}
      state-${this.props.id}`, JSON.parse(localStateJson));
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(`state-${this.props.id}`, JSON.stringify(this.state));
  }

  componentWillUnmount() {
    // localStorage.removeItem(`state-${this.props.id}`);
  }

  _onAnswer(answer) {
    this.setState({
      answer: answer,
    });

    // Question passes info along to Questionairre
    this.props.onAnswer(answer.points, this.props.id);

    console.log(`
      -- Sends Answer to Questionairre --
      Component: ${this.constructor.name}
      answer: ${JSON.stringify(answer)}
    `);
  }

  render() {
    const answered = this.state.answer.answered ? 'answered' : '' ;

    return (
      <section className="question">
        <p className={answered}>
          <span>{this.props.id}. </span>
          {this.props.label}
        </p>

        <Answer
        onAnswer={this._onAnswer.bind(this)}
        questionId={this.props.id}
        choices={this.props.choices} />

        <footer>
          <span className={answered}>{answered}</span>
          <span>{this.props.id}</span>
        </footer>
      </section>
    )
  }
}
