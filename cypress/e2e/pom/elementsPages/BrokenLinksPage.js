class BrokenLinksPage {
    getBrokenImage = () => cy.get('img[src="/images/Toolsqa_1.jpg"]');
    getValidLink = () => cy.get('a[href="http://demoqa.com"]');
    getBrokenLink = () => cy.get(' a[href="http://the-internet.herokuapp.com/status_codes/500"]');
   

   


    checkBrokenImg() {
        this.getBrokenImage()
        .should('be.visible')
        .and('have.prop','naturalWidth')
        .should('not.be.greaterThan',0)
      
        return this;
    }

    checkValidLink() {
        this.getValidLink()
        .click()
        .request( {
            url: 'https://demoqa.com'
        })
        .then(function(response) {
            expect(response.status).to.be.eql(200);
            expect(response.statusText).to.be.eql('OK');
        })
        return this;
    }

    checkBrokenLink() {
        this.getBrokenLink()
        .click()
        .request({
            url: "http://the-internet.herokuapp.com/status_codes/500",
            failOnStatusCode: false
        })
        .then( 
            function(response) {
                expect(response.status).to.be.eql(500)     
        })

        return this;
    }

}

export default BrokenLinksPage;