# Givebacks Skill Assessment Project

To get a better understanding of how you code. We at Givebacks, ask that you complete this assessment to the best of your ability

As a developer here, you'll be tasks with completed cards that have built out requirements. Not only do we ask that you delivery the best quality of code, we ask that we strive to deliver the best quality of product. With that in mind, we have built this project in a way that may not have all the information needed, but will leave choices up to you.

## What this is

This project is a website that displays and searches for Causes using the Givebacks Cause Search API

## The Requirements

- [ ] As a user when I navigate to the application, by default, I should be viewing a list of Causes rendered by the Givebacks Cause Search API
- [ ] As a user, I should be able to search for a Cause by name, rendering the causes found from my search
- [ ] As a user, I should be able to search for a Cause by city and state, rendering the causes found
- [ ] As a user, I should be able to tell if there are more causes that are not being displayed based on my search and data from the API

## Duration

This project is meant to test your skill level. We have set a time limit of 4 hours, at the end of this duration please submit your work. This time limit helps us evaluate candidates fairly.

## The Tech Specs

You'll use our Givebacks Cause Search API in order to render Cause data.

#### Base URL

`https://api.givebacks.com/services/core/causes/search`

#### Query Parameter Options:

- Search by name: `search[name][value]=XYZ`
- Search by city: `search[city][value]=Raleigh`
- Search by state: `search[state][value]=Raleigh`
- Search by AND: `join=AND` ie `join=AND&search[name][value]=XYZ&search[city][value]=Raleigh`

#### React

We have provided a **optional** react library via [create-react-app](https://create-react-app.dev/) that you are welcome to use. It also provides a HTTP client you can use to interact with our Cause Search API. Choosing or not choosing this library does **not** change your assessment results

## The Delivery

- A github repository with all of your work you are ready to submit
- Instructions for how to start and navigate to your UI
- A writeup of the challenges or decisions you had to make as you build out this project
- Send an email to provided emails, sent with the instructions by the employee you met with the above information

## How we assess

We have our team leads review & assess your submission based on a 1-5 rating on the following

- Based upon the completion of the requirements
- Quaility of code
- User Experience (UX)
- Bonus
  - These are different based on the team lead but they could be things like:
    - Git history & cleanliness
    - User feedback as they interact with the UI
    - The choice/use of third party libraries

---

## Create React App README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
