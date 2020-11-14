# mental-health-app

Prototype for mental health web-app using Patient Health Questionnaire (PHQ-9).

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
- CI: Travis

### Screenshots

![Start](/screenshots/screen_start.png?raw=true 'Start Screen')

![Unanswered Question](/screenshots/screen_unanswered.png?raw=true 'Unanswered Question')

![Answered Question](/screenshots/screen_answered.png?raw=true 'Answered Question')

![Therapists List](/screenshots/screen_therapists.png?raw=true 'Final Score & Results')

![Final](/screenshots/screen_scorebox.png?raw=true 'Final Score & Results')

### Optimizations

#### Basic PWA support
* allows for offline use

### Lazy load routes
* router no longer loads all the routes even if they are not in view.

#### Switch to preact compat

| React  | Preact  | Chunk Name |
| --- | --- | --- |
|76.11 KB|**46.66 KB**|js/bundle|
|4.95 KB|5.14 KB |js/main|
|3.8 KB|3.79 KB |js/DiagnosisRoute|
|2.79 KB|2.73 KB |js/TherapistsRoute|
|2.5 KB|2.58 KB |js/QuestionsRoute|
|1.25 KB |1.24 KB |js/runtime-main|
|895 B |891 B |js/WelcomeRoute|
|234 B |234 B|css/main|


|  Metric | React  | Preact  |
| --- | --- | --- |
|First Contentful Paint |2.3 s|1.9 s|
|Speed Index|2.8 s| 2.4 s|
|Largest Contentful Paint|2.4 s|1.9 s|
|Time to Interactive|2.4 s|2.1 s|
|Total Blocking Time|100 ms|130 ms|
