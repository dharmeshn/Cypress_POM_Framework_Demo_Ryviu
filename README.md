## Cypress POM Framework

Cypress POM Framework for Prestashop.ryviushop.com
This repository contains a sample Cypress POM (Page Object Model) framework for automating tests on the
`Prestashop.ryviushop.com` website. The framework is built using Cypress and JavaScript and is designed to perform
checks on the main(Homepage) and product details pages of the website.

### Prerequisites

- Node.js and npm should be installed on your system. You can download it from
  [https://nodejs.org/](https://nodejs.org/).

### Setup

1. Clone this repository or download and extract the ZIP file.
2. Open the project in Visual Studio Code.
3. Open the terminal and navigate to the project directory.
4. Run `npm init` and `npx i cypress` commands respectively to install the dependencies.

### Running Tests

To run the tests, execute the following command in the terminal:

```
npx cypress open
```

- This will open the Cypress Test Runner window to run all the tests in the `cypress/e2e` directory.
- Select the `E2E Testing` and then select browser `Chrome` (suggested)
- Select the test file to run a specific test file `Cypress_Task_Ryviu.cy.js`

### Project Structure

The project structure is as follows:

```
cypress/
    e2e/
    fixtures/
    pageObjects/
    support/
```


- `cypress/e2e`: This directory contains the test files. The test files are organized
  by page or feature and contain individual test cases.
- `cypress/fixtures`: This directory contains the test data in JSON format that can be used in tests.
- `cypress/pageObjects`: This directory contains the page object files. Each page object file contains the
  locators and methods for interacting with a specific page of the website.
- `cypress/support`: This directory contains the support files. These files contain reusable functions, methods
  and constants that are used across the tests.


## Test Cases

The following test cases are included in the framework:

### Main Page

- `Seven popular products displayed on homepage` - checks if seven popular products are displayed on the main page.
- `User gets the correct result when the user search for "blouse"` - checks if the search for "blouse" returns the correct result.
- `When user click on product the product detailed page should open` - checks if a product detail page is opened when a product is clicked.

### Product Details Page

- `Product contains the correct short description of the product` - checks if the short description of the product is correct.
- `Inform the user there is an item in their cart` - checks if the user is informed that
  there is an item(s) in their cart when a product is added.



