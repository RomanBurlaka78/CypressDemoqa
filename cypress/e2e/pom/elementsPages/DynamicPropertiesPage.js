class DynamicPropertiesPage {
    getDynamicId = ()=> cy.get('.col-md-6>div >p');
    getColorChange =() => cy.get('#colorChange');
    getVisibleAfter =() => cy.get('#visibleAfter');

    
    checkDynamicId() {
        this.getDynamicId()
        .should('be.visible')
        .and('have.text', 'This text has random Id')

        return this;
    }

    checkColorChange() {
        this.getColorChange()
       .should('have.css', 'color', 'rgb(220, 53, 69)')
    }

    checkVisibleAfter() {
        this.getVisibleAfter()
        .wait(6000)
        .should('be.visible');

        return this;
    }


}

export default DynamicPropertiesPage;