
class TextBoxPage {
    getUsertName = ()=> cy.get('#userName');
    getUserEmail = ()=> cy.get('#userEmail');
    getCurrentAddres = ()=> cy.get('#currentAddress');
    getPermanentAddress = ()=> cy.get('#permanentAddress');
    getSubmitButton = () => cy.get('#submit');
    // getNameUser = () => cy.get('#output  #name');
    // getEmail =() => cy.get('#output #email');
    // getCurrAddress = () => cy.get('#output #currentAddress');
    // getPepmAdderss =() => cy.get('#output #permanentAddress');
    getOutput=() => cy.get('div#output');

    
    fillUserName(name) {
        this.getUsertName().clear();
        this.getUsertName().type(name);

        return this;
    }

    fillUserEmail(email) {
        this.getUserEmail().clear();
        this.getUserEmail().type(email);

        return this;
    }

    fillCurrentAddress(currentAddress) {
        this.getCurrentAddres().clear();
        this.getCurrentAddres().type(currentAddress);

        return this;
    }

    fillPermanentAddress(permanentAddress) {
        this.getPermanentAddress().clear();
        this.getPermanentAddress().type(permanentAddress)

        return this;
    }

    clickSubmitForm() {
        this.getSubmitButton().click();

        return this;
    } 

}

export default TextBoxPage;