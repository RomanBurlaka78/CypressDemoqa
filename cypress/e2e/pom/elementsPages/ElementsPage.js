import CheckBoxPage from './CheckBoxPage';
import RadioButtonPage from './RadioButtonPage';
import TextBoxPage from './TextBoxPage';
import WebTablesPage from './WebTablesPage';
class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');
    getCheckBox = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li');
    getRadioButton = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li+li');
    getWebTables = () =>cy.xpath('//li//span[contains(text(), "Web Tables")]');


    clickGetTexBox() {
        this.getTextBox().click();

        return new TextBoxPage();
    }

    clickGetCheckBox() {
        this.getCheckBox().click();

        return new CheckBoxPage();
    }

    clickRadioButton() {
        this.getRadioButton().click();

        return new RadioButtonPage();
    }

    clickWebTables() {
        this.getWebTables().click();

        return new WebTablesPage();
    }
}

export default ElementsPage;