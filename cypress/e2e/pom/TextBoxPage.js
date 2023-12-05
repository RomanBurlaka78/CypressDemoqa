

class TextBoxPage {
    getUsertName = ()=> cy.get('#userName');
    getUserEmail = ()=> cy.get('#userEmail');
    getCurrentAddres = ()=> cy.get('#currentAddress');
    getPermanentAddress = ()=> cy.get('#permanentAddress');
    getSubmitButton = () => cy.get('#submit');
    getNameUser = () => cy.get('#output  #name');
    getEmail =() => cy.get('#output #email');
    getCurrAddress = () => cy.get('#output #currentAddress');
    getPepmAdderss =() => cy.get('#output #permanentAddress');

    
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

    // showOutput() {
    //     const data =[];
    //     this.getName().then(($el) =>  {
    //     data.push($el.text());
    //     expect(data[0]).to.equal('Roman');
    //     })
    //     this.getEmail().then(($el) => {
    //         data.push($el.text());
    //         expect(data[1]).to.equal('wery@wp.pl');
    //     })
    //     this.getCurrAddress().then(($el) => {
    //         data.push($el.text());
    //         expect(data[2]).to.equal('LA SK-77');
    //     })
    //     this.getPepmAdderss().then(($el) => {
    //         data.push($el.text());
    //         expect(data[3]).to.equal('NY BC-23');
    //     })

    //     return data;
    // }

    // showOutput() {
    //     this.getNameUser().then(($el) => {
    //         const name = Cypress.$.makeArray($el).map(($e)=> $e.innerText);
    //         data.push(name);
        
    //         return data;
    //     })
    // }


}

export default TextBoxPage;