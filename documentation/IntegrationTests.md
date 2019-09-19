# Portfolio Integration Tests

The integration tests that I have written for my portfolio provide assurance that:

- Routes correctly redirect.
- Element characteristics exist when interacted with.
- Certain DOM elements are hidden or seen based on the state of the application.

In generall Cypress proves that the components that I have created all work in harmony together to achieve the functionality I want my portfolio to have.

___

## Table of Contents

### [Tested Views](#tested-views)

### [Custom Functions](#custom-functions)

### [Using Cypress](#using-cypress)

___

## Tested Views

### `/contact`

The contact form has tests written to test the behavior of the Button component, the Form component, and the submission message at the end of the form.

#### Button

The Button component is used to advance through the steps of the form by hiding and showing different divs. I broke these tests into two separate contexts: the `advance` button and the `goBack` button.

- **`advance`**
  - When the `advance` button is clicked the form inputs should switch, so the tests for this button involve seeing if different divs are shown or hidden based off of the button click.
- **`goBack`**
  - When the `goBack` button is clicked, the form inputs should switch to the previous view. These tests are very similar to the `advance` button tests.

#### Form Component

The contact form itself needs to be tested for accessibility and behavior. I require form inputs to have valid entries, focus given to the inputs as the pages advance, and the values that a user inputs should stay constant when navigating through the form.

#### Submission Message

The submission of the form is handled by EmailJS. I decided to display a modal with a success message and an error message. Cypress tests which message is shown based off of the server response from the EmailJS api.

___

## Using Cypress

___

## Custom Functions

___

[Return to main page](/README.md)
