# mental-health-app

Prototype for mental health web-app using Patient Health Questionnaire (PHQ-9)

### Disclaimer

>This tool does not provide medical advice, and is for informational and educational purposes only, and is not a substitute for professional medical advice, treatment or diagnosis. Call your doctor to receive medical advice. If you think you may have a medical emergency, please dial your local emergency response phone number.

## User Story

As a patient, I would like to take the PHQ-9 depression screener and get the assessment score along with its explanation. If I score _moderate_ depression or higher, I would like to be presented with 3 options for therapists that I can choose. Then I will select one and receive a thank you message.


## Prerequisites

- node must be installed

## Run app locally

```
cd mental-health-app
yarn
yarn start

```

Go to http://localhost:3001

- click on Questionnaire

### Technologies

- Side Effects Management: redux-saga
- State Management: redux
- Router: react-router
- Front-end: react
- Styling: styled-components
- Transpiler & Bundler: webpack + babel
- Backend: serverless function (see mental-health-api)

### Screenshots

![Start](/screenshots/screen_start.png?raw=true 'Start Screen')

![Unanswered Question](/screenshots/screen_unanswered.png?raw=true 'Unanswered Question')

![Answered Question](/screenshots/screen_answered.png?raw=true 'Answered Question')

![Therapists List](/screenshots/screen_therapists.png?raw=true 'Final Score & Results')

![Final](/screenshots/screen_scorebox.png?raw=true 'Final Score & Results')
