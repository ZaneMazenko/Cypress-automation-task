import BasePage from "./BasePage";

class AppointmentPage extends BasePage {


    static get FacilityDropdown() {
        return cy.get('#combo_facility');
    }

    static get applyChkbx() {
        return cy.get('.checkbox-inline');
    }

    static get medicAidRadioBtn() {
        return cy.get('#radio_program_medicaid');
    }

    static get calendarWidget() {
        return cy.get('.input-group-addon');
    }

    static get calendarMonthYear() {
        return cy.get('.datepicker-switch');
    }

    static get prevMonthBtn() {
        return cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .prev');
    }

    static get datePicker() {
        return cy.get('.day');
    }

    static get commentBox() {
        return cy.get('#txt_comment');
    }

    static get bodyOfPage() {
        return cy.get('body');
    }

    static get bookAppointmentBtn() {
        return cy.get('#btn-book-appointment');
    }

    static get burgerBtn() {
        return cy.get('#menu-toggle');
    }

    static get sidebarWrapper() {
        return cy.get('#sidebar-wrapper');
    }
}

export default AppointmentPage