import BasePage from "./BasePage";

class ProfilePage extends BasePage {

    static get userField() {
        return cy.get('#txt-username');
    }

    static get passField() {
        return cy.get('#txt-password');
    }

    static get loginBtn() {
        return cy.get('#btn-login');
    }

}

export default ProfilePage