class BrowserWindowsPage {
    getNewTab = () => cy.get('#tabButton');
    getBrowserWindow =() => cy.get('div.accordion :first-child +.element-group +div>div>ul> :first-child');

    openBrowserWindowPage() {
        this.getBrowserWindow().click();

        return this;
    }



    checkOpenNewPage() {
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as("popup")})
        this.getNewTab()
            .click();

        cy.get('@popup')
            .should("be.called")
        cy.url()
            .should('include', '/sample')

        
            return this;
    }






}
export default BrowserWindowsPage;