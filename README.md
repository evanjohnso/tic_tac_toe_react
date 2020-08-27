## Auto Loan Application

This is a simple browser application that gives the framework for what a simple auto loan application flow might look like.

Users can input their car and financial information and be approved or denied.

To run the project:

- `npm install` will install all dependencies in `package.json`
- `npm start` will spin up a local instance of the application in the browser
- That should be it, it should be good to go!

## Notes

- I was unable to get the testing framework setup due to issues with create-react-app. I actually couldn't even create a new application. I had to branch out an old (very small) application and work from there. Please ignore the first few commits from years ago.

- Here's a link to the exact issue I have, but was unable to resolve `https://github.com/zkat/npx/issues/146`

## In Lieu of actual tests, I can speak to them a bit

- Most of the 'logic' in the app I pulled into separate functions to be easily unit tested. The loan approval process is very simple to unit test with a variety of inputs
- For UI flow, I absolutley love `react-testing library` which fully mounts the node tree. We used enzyme on previous projects, but ran into issues with fragility and issues with testing implementation details.
- It was well worth the time to port over, and got other developers to actually want to write tests with the new library. Happy to discuss more
