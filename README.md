## Don't forget to give a :star: to make the project popular.

## :question: What is this Repository about?

- This repo has example code for running Web Automation Tests using [Playwright](https://playwright.dev/) and [Typescript](https://www.typescriptlang.org/)
- Websites used for testing are 
  - [LambdaTest e-commerce Playground](https://ecommerce-playground.lambdatest.io/)

## Test Journey covered in this project:

This repo provides sample code with:
1. Custom playwright fixture for configuring baseURL in multiple environments.
1. Sample code with Playwright's built-in fixture - page, context and browser.


## How to run the Tests?

- Clone the repository on your local machine

- Navigate to the root folder of the project and install all the dependencies using the following command
  
  - `npm install`

- Run the following command in the terminal

  ### 1. Running tests
    -  `npx playwright test tests/custom.fixture.spec.ts` >> Tests will run on all the configuration provided within the projects folder in the `playwright.config.ts`

    - To run the tests on LambdaTest cloud platform, create a new `.env` file add your LambdaTest credentials `LT_USERNAME` and `LT_ACCESS_KEY` to it. The following command should be run from the terminal to run the test on Chrome browser on MacOS Ventura on LambdaTest(Check projects in `playwright.config.ts` for more project names to run the tests):
    `npx playwright test tests/lambdatest-ecommerce-playground --project="chrome:latest:MacOS Ventura@lambdatest"`

    - To run all the tests available in `tests` folder on local(Runs in headless mode):
        `npx playwright test`

    - To run the tests in headed mode:
        `npx playwright test --headed`

## :question: Need Assistance?

- Discuss your queries by writing to me @ `mohammadfaisalkhatri@gmail.com`
  OR ping me on any of the social media sites using the below link:
    - [Linktree](https://linktr.ee/faisalkhatri)

## :computer: Paid Trainings

- Contact me for Paid trainings related to Test Automation and Software Testing,
  mail me @ `mohammadfaisalkhatri@gmail.com` or ping me on [LinkedIn](https://www.linkedin.com/in/faisalkhatri/)

## :thought_balloon: Checkout the blogs related to Testing written by me on the following links:

- [Medium Blogs](https://medium.com/@iamfaisalkhatri)
- [LambdaTest Blogs](https://www.lambdatest.com/blog/author/mfaisalkhatri/)
- [My Website](https://mfaisalkhatri.github.io)

### :bookmark: Checkout videos related to Software Testing and Test automation tools on [Testing Talks with Faisal Khatri](https://www.youtube.com/@faisalkhatriqa)