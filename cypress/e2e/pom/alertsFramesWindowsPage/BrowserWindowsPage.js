class BrowserWindowsPage {
    getNewTab = () => cy.get('#tabButton');
    getBrowserWindow =() => cy.get('div.accordion :first-child +.element-group +div>div>ul> :first-child');

    openBrowserWindowPage() {
        this.getBrowserWindow().click();

        return this;
    }



    checkOpenNewPage() {
        this.getNewTab()
            .url().should('have.text','https://demoqa.com/sample');
         
            return this;
    }






}
export default BrowserWindowsPage;