class LinksPage {
    getTitleOfPage = () => cy.get('.main-header');
    getHomeLink = () =>cy.get('#simpleLink');
    getDinamicLink = () =>cy.get('#dynamicLink');
    getBack = () => cy.go('back');
    getApiLinkCreated = () => cy.get('#created');
    getApiLinkNoContent = () => cy.get('#no-content');
    getApiLinkMoved = () => cy.get('#moved');
    getApiLinkBadRequest = () => cy.get('a#bad-request');
    getApiLinkUnauthorized = () => cy.get('#unauthorized');
    getApiLinkForbidden = () => cy.get('#forbidden');
    getApiLinkNotFound = () => cy.get('#invalid-url');

    
    checkTitleOfPage(name) {
        this.getTitleOfPage().should('have.text', name);
       
        return this;
    }

    goLinkHome() {
        this.getHomeLink()
            .should('have.attr', 'target', '_blank')
            .invoke('attr','target','_self')
            .click()

        return this;
    }
    goLinkHomeIVtB() {
        this.getDinamicLink()
            .should('have.attr', 'target', '_blank')
            .invoke('attr','target','_self')
            .click()

        return this;
    }

    checkLocation() {
        cy.location('host').should('equal', 'demoqa.com');

        return this;
    }

    returnBack() {
        this.getBack();

        return this;
    }

    clickApiLinkCreated() {
        this.getApiLinkCreated()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/created"
        }).then(function(response){
            expect(response.status).to.be.eql(201); 
            expect(response.statusText).to.be.eql("Created");
        })

        return this;
    }

    clickApiLinkNoContent() {
        this.getApiLinkNoContent()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/no-content"
        }).then(function(response)  {
            expect(response.status).to.be.eql(204); 
            expect(response.statusText).to.be.eql("No Content");
            expect(response.body).to.be.eql(""); 
        })
    
        return this;
    }

    
    clickApiLinkMoved() {
        this.getApiLinkMoved()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/moved"
        }).then(function(response) {
            expect(response.status).to.be.eql(301); 
            expect(response.statusText).to.be.eql("Moved Permanently");
            expect(response).to.have.property('body')
           
        })

        return this;
    }

    clickApiLinkBadRequest() {
        this.getApiLinkBadRequest()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/bad-request",
            failOnStatusCode: false,
        }).then(function(response) {
            expect(response.status).to.be.eql(400); 
            expect(response).to.have.property('headers')
        })

        return this;
    }

    clickApiLinkUnauthorized() {
        this.getApiLinkUnauthorized()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/unathorized",
            failOnStatusCode: false,
        }).then(function(response) {
            expect(response).to.have.property('headers')
            if(expect(response.status).not.be.eql(401))
            {
                console.log('bug');
                return this
            }
           
        })

        return this;
    }

    clickApiLinkForbidden() {
        this.getApiLinkForbidden()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/forbidden",
            failOnStatusCode: false,
        }).then(function(response){
            expect(response.status).to.be.eql(403); 
            expect(response.statusText).to.be.eql("Forbidden");
            expect(response).to.have.property('headers')
        })

        return this;
    }

    clickApiLinkNotFound() {
        this.getApiLinkNotFound()
        .click()
        .request({
            method: "GET",
            url: "https://demoqa.com/invalid-url",
            failOnStatusCode: false,
        }).then(function(response){
            expect(response.status).to.be.eql(404); 
            expect(response).to.have.property('headers')
        })

        return this;
    }

}
export default LinksPage;