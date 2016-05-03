/**
  * Questionnaire: Container for Questions, Answers, & Score.
  *
  * - Patient Health Questionnaire (PHQ-9)
  * - Diagnoses depression severity
  */

import { Link, browserHistory } from 'react-router';
import { Question, Score, appStyles } from '../modules';
import data from '../../data/diagnosticPHQ9.json';

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getState();
  }

  _createAnswerSet(len) {
    return new Set([...Array(len).keys()].map(x => ++x));
  }

  _getState() {
    return {
      data: data,
      diagnosis: {},
      unanswered: this._createAnswerSet(data.questions.length),
      step: 1,
      score: 0
    }
  }
  // Remove all question items in localStorage
  _removeAllLocalStorage() {
    const ids = [...this._createAnswerSet(this.state.data.questions.length)];

    for (let id in ids) {
      localStorage.removeItem(`state-${ids[id]}`);
    }
  }

  componentWillUnmount() {
    this._removeAllLocalStorage();
  }

  answerQuestion(points, questionId) {
    const { unanswered, score } = this.state;

    unanswered.delete(questionId);
    this.setState({ unanswered: unanswered });

    // If question answered then updateScore
    if (!unanswered.has(questionId)) {
      this.updateScore(points);
    }
    // this.autoNext();

    console.log(`
      -- Call update score & show next question --
      Component: ${this.constructor.name}
      Unanswered: ${[...unanswered]} Size: ${unanswered.size}
      Answered QuestionId: ${questionId}
      Points: ${points}
      Score: ${score}
    `);

  }

  updateScore(points) {
    const { data, score, unanswered } = this.state;
    const scoreSoFar = score + Number(points);
    const allAnswered = unanswered.size === 0;

    if (allAnswered || scoreSoFar > data.outOfScore) {
      this._interpretResults();
    } else {
      this.setState({score: scoreSoFar});
    }
  }

  _interpretResults() {
    const { data, score } = this.state;
    let checkRange = (min, max) =>{ return score >= min && score <= max };

    const result = data.scale.filter((obj)=>{
      const { range } = obj;
      return checkRange(range.min, range.max);
    });

    this.setState({diagnosis: result});
  }

  autoNext() {
    this.next();
    // Programmtically move to next question.
    browserHistory.push(`/question/${(this.state.step) + 1}`);
  }

  goToQuestion(questionId) {
    this.setState({step: questionId});
  }

  prevNext(isNext) {
    const step = isNext ? (this.state.step || 1) + 1 : (this.state.step || 1) - 1;
    this.setState({step: step});

    console.log(`
      -- Next & update browserHistory --
      Component: ${this.constructor.name}
      < Previous: ${step - 1}
      * Step(current): ${step}
      > Next: ${step + 1}
      `);
  }

  // Helper to render a single quesiton
  renderItem(question) {
    return <Question onAnswer={this.answerQuestion.bind(this)} key={`question-${question.id}`} id={question.id} {...question} label={question.label} choices={this.state.data.choices} />
  }

  // Helper to render unanswered list
  renderUnanswered() {
    const { unanswered } = this.state;
    const allAnswered = unanswered.size === 0;

    const UnasweredList = [...unanswered].map((value, i)=>{
      return <li key={`unanswered-${i}`}>
      <Link to={'/question/' + value} onClick={this.goToQuestion.bind(this, value)}>{value}</Link>
      </li>;
    });

    return (<ul className={appStyles.inline}>
      {allAnswered ? '': <li>Unanswered</li>}
      {UnasweredList}
      </ul>);
  }

  // Helper to render nav
  renderNav(){
    const { data, step } = this.state;

    const isLast = step === data.questions.length;
    const isFirst = step === 1;

    // Prev/Next Links
    const Prev = <Link to={'/question/' + step} onClick={this.prevNext.bind(this,false)}> &laquo; Question {step - 1} </Link>;
    const Next = <Link to={'/question/' + step} onClick={this.prevNext.bind(this,true)}>Question {step + 1} &raquo; </Link>;

    return (
      <header className={appStyles.nav}>
        {isFirst ? '' : Prev}
        {isLast ? '' : Next}
      </header>);
  }

  render() {
    const { params, location } = this.props;
    const { data, step, score, diagnosis, unanswered } = this.state;
    const { title, subtitle, questions, choices, scale, outOfScore, therapists } = data;

    const severity = diagnosis[0] ? diagnosis[0].severity : null;
    const therapistsList = severity === 'moderate' || severity === 'severe' ? therapists : null;

    const allAnswered = unanswered.size === 0;
    // Sets current question to display to the step
    let currentQuestion = questions[step - 1];
    const SingleQuestion = this.renderItem(currentQuestion);
    const ScoreComponent = <Score score={score} total={outOfScore} title="Diagnosis of Depression Severity" result={severity} list={therapistsList}/>;

    if (allAnswered || unanswered.size === questions.length) {
      this._removeAllLocalStorage();
    }

    return (
    <div>
      <h1>{title}</h1>
      {allAnswered ? '' : <h2>{subtitle}</h2>}
      {allAnswered ? '' : this.renderUnanswered()}
      {allAnswered ? '' : this.renderNav()}
      {allAnswered ? ScoreComponent : SingleQuestion }
  </div>
    );
  }
}
