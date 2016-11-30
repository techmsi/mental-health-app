# mental-health-app
Prototype for mental health web-app using Patient Health Questionnaire (PHQ-9)

## User Story
As a patient, I would like to take the PHQ-9 depression screener and get the assessment score along with its explanation. If I score *moderate* depression or higher, I would like to be presented with 3 options for therapists that I can choose. Then I will select one and receive a thank you message.

## Prerequisites
- node must be installed

## Install

```
cd mental-health-app
npm install
npm start

```

Go to http://localhost:3001
- click on Questionnaire

### Endpoints

* `/api/phq9`
  * GETS PHQ-9 questionnaire

* `/api/therapists`
  * GETS a list of therapists

* `/api/therapists?limit=5` default is `3`
  * GETS an `n` number of therapists

### Technologies
* State Management: redux
* Front-end: React
* Router: React Router
* Transpiler & Bundler: Webpack + Babel 6
  * Hot reloading enabled for redux as well
* Backend: Node + Express

### Screenshots

![Start](/screenshots/screen_start.png?raw=true "Start Screen")

![Unanswered Question](/screenshots/screen_unanswered.png?raw=true "Unanswered Question")

![Answered Question](/screenshots/screen_answered.png?raw=true "Answered Question")

![Final](/screenshots/screen_scorebox.png?raw=true "Final Score & Results")
