import { RadioGroupShell } from 'Choices/ui/styles-Choices';

const ChoiceList = ({ choices, questionId, answered, answerQuestion }) => (
  <RadioGroupShell className="choices">
    {choices.map((answer, index) => {
      const name = `answer-${questionId}`;
      const id = `${name}-${index}`;

      return (
        <label key={answer.label} htmlFor={id} className="answer">
          <input
            type="radio"
            id={id}
            name={name}
            value={answer.points}
            disabled={answered}
            onChange={() => answerQuestion(questionId, answer.points)}
          />
          <span>{answer.label}</span>
        </label>
      );
    })}
  </RadioGroupShell>
);

export default ChoiceList;
