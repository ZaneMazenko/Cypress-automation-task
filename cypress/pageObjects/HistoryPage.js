import BasePage from "./BasePage";

class HistoryPage extends BasePage {

    static get appointmentList() {
        return cy.get('.col-sm-12 > p');
    }

}

export default HistoryPage