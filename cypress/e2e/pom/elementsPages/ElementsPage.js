import TextBoxPage  from './TextBoxPage';

class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');

    clickGetTexBox() {
        this.getTextBox().click();

        return new TextBoxPage();
    }
}

export default ElementsPage;