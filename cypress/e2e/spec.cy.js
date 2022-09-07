import AppointmentPage from "../pageObjects/AppointmentPage";
import BasePage from "../pageObjects/BasePage";
import FirstPage from "../pageObjects/firstPage";
import HistoryPage from "../pageObjects/HistoryPage";
import ProfilePage from "../pageObjects/ProfilePage";
import SummaryPage from "../pageObjects/SummaryPage";

describe('Katalon Demo Page Testing', () => {
    context('Demo Page Testing', () => {
        beforeEach(() => {
            BasePage.visit();
        });

        function logInUser() {
            ProfilePage.userField.click();
            ProfilePage.userField.type('John Doe');
            ProfilePage.passField.click();
            ProfilePage.passField.type('ThisIsNotAPassword');
            ProfilePage.loginBtn.click();
        }
        it('Scenario 1', () => {
                // Click Make Appoitment button
                FirstPage.makeAppointmentBtn.click();
                // ---> Create KatalonLoginPage <---
                // Input username
                // Input Password
                // Click login button
                logInUser();
                // ---> Create KatalonMakeAnappoitmentPage <---
                // Select facility Seoul CURA
                AppointmentPage.FacilityDropdown.select('Seoul CURA Healthcare Center');
                // Check Apply for hospital
                AppointmentPage.applyChkbx.click();
                // Select Medicaid
                AppointmentPage.medicAidRadioBtn.click();
                // Open widget, select date
                AppointmentPage.calendarWidget.click();
                // set date 30th of August
                AppointmentPage.prevMonthBtn.click();
                AppointmentPage.datePicker.contains('30').click();
                AppointmentPage.bodyOfPage.click(0, 0);
                // Add some comment
                AppointmentPage.commentBox.click();
                AppointmentPage.commentBox.type('This is a comment')
                    // Click book appoitment button
                AppointmentPage.bookAppointmentBtn.click();
                // ---> Create KatalonSummaryPage<---
                // Validate that previously added values have been correctly
                SummaryPage.facilityCheck.should('have.text', 'Seoul CURA Healthcare Center');
                SummaryPage.readmissionCheck.should('have.text', 'Yes');
                SummaryPage.programCheck.should('have.text', 'Medicaid');
                SummaryPage.dateCheck.should('have.text', '30/08/2022');
                SummaryPage.commentCheck.should('have.text', 'This is a comment');
            })
            // Scenario 2:
        it('Scenario 2', () => {
            FirstPage.makeAppointmentBtn.click();
            // Input username
            // Input Password
            // Click login button
            logInUser();
            // Press stack/burger icon
            AppointmentPage.burgerBtn.click();
            // Find element that has active class and
            // Validate it with should("have.class", "active")
            AppointmentPage.sidebarWrapper.should('have.class', 'active');
            // Click history
            AppointmentPage.sidebarWrapper.contains('History').click();
            // Validate that there are no appoitments
            HistoryPage.appointmentList.should('contain.text', 'No appointment');
        })
    })

})