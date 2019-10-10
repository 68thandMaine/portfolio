# Known Bugs

This document contains a list of known bugs in my portfolio.

| Bug | Description | Where In Code |
|--|--|--|
| **Inefficient Testing** | Cypress cannot interact with the fetch API. Unfortunately I use the fetch api to set the state for the `/projects` view. To hack around testing this component I dispatch different JSON files to the reducer to set the UI state. Not a best practice. I might have to refactor the Github Service to an ajax call. |  `~/cypress/integration/projects_view.spec.js : 12`  |