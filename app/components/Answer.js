// Component: Answer

export default class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answered: false
    };
  }

  _setPoints(e) {
    const answer = {
      answered: e.currentTarget.checked,
      points: e.currentTarget.value,
      label: e.currentTarget.nextElementSibling.innerText
    };

    this.setState({ answered: answer.answered });
    this.props.onAnswer(answer);

    console.log(`
      -- Set points & send points Question --
      Component: ${this.constructor.name}
      answer: ${JSON.stringify(answer)}
      currentTarget(checked): ${e.currentTarget.checked}
    `);
  }
  componentWillMount() {
    const newState = JSON.parse(localStorage.getItem(`state-${this.props.questionId}`));
    if (newState) {
      this.setState(newState.answer);
    }
  }
  render() {
    const { choices, questionId } = this.props;

    const AnswersList = choices.map((answer)=> {
      return (<label key={answer.label}>
        <input type="radio"
          name={`answer-${questionId}`}
          value={answer.points}
          onChange={this._setPoints.bind(this)}
          disabled={this.state.answered}
          checked={this.state.label && (answer.label === this.state.label)}
          {...answer} />
        <span>{answer.label}</span>
      </label>)
    });

    return (
      <div className="answers">
      {AnswersList}
      </div>
    )
  }
}
