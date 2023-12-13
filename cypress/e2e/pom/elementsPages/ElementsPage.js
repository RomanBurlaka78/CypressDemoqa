import ButtonsPage from './ButtonsPage';
import CheckBoxPage from './CheckBoxPage';
import LinksPage from './LinksPage';
import RadioButtonPage from './RadioButtonPage';
import TextBoxPage from './TextBoxPage';
import WebTablesPage from './WebTablesPage';
class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');
    getCheckBox = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li');
    getRadioButton = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li+li');
    getWebTables = () =>cy.xpath('//li//span[contains(text(), "Web Tables")]');
    getButtons = ()=>cy.get('div.accordion>:first-child .menu-list> :first-child+li+li+li+li');
    getLinks = () => cy.get('.accordion :first-child .menu-list>li#item-5');
   


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

    clickGetButtons() {
        this.getButtons().click();

        return new ButtonsPage();
    }

    clickLinks() {
        this.getLinks().click();

        return new LinksPage();
    }
}

export default ElementsPage;