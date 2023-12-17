class BrokenLinksPage {
    getBrokenImage = () => cy.get('img[src="/images/Toolsqa_1.jpg"]');


    checkBrokenImg() {
        this.getBrokenImage()
        .should('be.visible')
        .and('have.prop','naturalWidth')
        .should('not.be.greaterThan',0)
      
        return this;
    }

}

export default BrokenLinksPage;