# mental-health-app

Prototype for mental health web-app using Patient Health Questionnaire (PHQ-9)

## User Story

As a patient, I would like to take the PHQ-9 depression screener and get the assessment score along with its explanation. If I score _moderate_ depression or higher, I would like to be presented with 3 options for therapists that I can choose. Then I will select one and receive a thank you message.

## Prerequisites

- node must be installed

## Run server in one tab

```
cd mental-health-app/server
yarn
yarn start

```

## Run app in a different tab

```
cd mental-health-app
yarn
yarn start

```

Go to http://localhost:3001

- click on Questionnaire

### Endpoints

- `/api/phq9`

  - GETS PHQ-9 questionnaire

- `/api/diagnosis`

  - POSTS PHQ-9 score to receive diagnosis

- `/api/therapists`

  - GETS a list of therapists

- `/api/therapists?limit=5` default is `3`
  - GETS an `n` number of therapists

### Technologies

- Side Effects Management: redux-saga
- State Management: redux
- Router: react-router
- Front-end: react
- Styling: styled-components
- Transpiler & Bundler: webpack + babel
- Backend: node + express

### Screenshots

![Start](/screenshots/screen_start.png?raw=true 'Start Screen')

![Unanswered Question](/screenshots/screen_unanswered.png?raw=true 'Unanswered Question')

![Answered Question](/screenshots/screen_answered.png?raw=true 'Answered Question')

![Therapists List](/screenshots/screen_therapists.png?raw=true 'Final Score & Results')

![Final](/screenshots/screen_scorebox.png?raw=true 'Final Score & Results')
