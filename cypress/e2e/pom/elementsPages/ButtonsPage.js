class ButtonsPage {
    getDoubleClick = ()=> cy.get('#doubleClickBtn');
    getDoubleClickMessage = ()=> cy.get('#doubleClickMessage');
    getRigthClick = () => cy.get('#rightClickBtn');
    getRigthClickMessage = () => cy.get('#rightClickMessage');
    getDinamicClick = () => cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div:nth-child(3)>button');
    getDimamicMessage =() => cy.get('#dynamicClickMessage');



    clickDoubleClick() {
        this.getDoubleClick().dblclick();

        return this;
    }

    clickRigthClick() {
        this.getRigthClick().rightclick();

        return this;
    }

    clickDinamicClick() {
        this.getDinamicClick().click();

        return this;
    }

    

    checkDoubleClickMessage(message) {
        this.getDoubleClickMessage().should('have.text', message)
        
        return this;
    }

    checkRigthClickMessage(message) {
        this.getRigthClickMessage().should('have.text', message)
        
        return this;
    }

    checkDinamicClickMessage(message) {
        this.getDimamicMessage().should('have.text', message)
        
        return this;
    }



}

export default ButtonsPage;