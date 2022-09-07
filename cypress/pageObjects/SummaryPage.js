import BasePage from "./BasePage";

class SummaryPage extends BasePage {

    static get facilityCheck() {
        return cy.get('#facility');
    }

    static get readmissionCheck() {
        return cy.get('#hospital_readmission');
    }

    static get programCheck() {
        return cy.get('#program');
    }

    static get dateCheck() {
        return cy.get('#visit_date');
    }

    static get commentCheck() {
        return cy.get('#comment');
    }
}

export default SummaryPage