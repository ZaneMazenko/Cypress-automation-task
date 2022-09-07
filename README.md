# Cypress-automation-task

This is an automation task for https://katalon-demo-cura.herokuapp.com/ by using Cypress testing tool.

Two scenarios are covered:
Scenario 1:
    // Open Katalon page
    // Click Make Appointment button
    // Input username
    // Input Password
    // Click login button
    // Select facility Seoul CURA
    // Check Apply for hospital
    // Select Medicaid
    // Open widget, select date
    // set date 30th of August
    // Add some comment
    // Click book appointment button
    // Validate that previously added values have been correctly
Scenario 2:
    // Input username
    // Input Password
    // Click login button
    // Press stack/burger icon
    // Find element that has active class and validate it with should("have.class", "active")
    // Click history
    // Validate that there are no appointments
