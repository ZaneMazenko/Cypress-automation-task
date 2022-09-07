import BasePage from "./BasePage";

class FirstPage extends BasePage {

    static get makeAppointmentBtn() {
        return cy.get('#btn-make-appointment');
    }

}

export default FirstPage