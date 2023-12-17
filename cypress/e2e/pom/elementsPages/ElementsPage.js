import BrokenLinksPage from './BrokenLinksPage';
import ButtonsPage from './ButtonsPage';
import CheckBoxPage from './CheckBoxPage';
import LinksPage from './LinksPage';
import RadioButtonPage from './RadioButtonPage';
import TextBoxPage from './TextBoxPage';
import WebTablesPage from './WebTablesPage';
class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');
    getCheckBox = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li');
    getRadioButton = () =>cy.get('.accordion :first-child .menu-list>li#item-2');
    getWebTables = () =>cy.get('.accordion :first-child .menu-list>li#item-3');
    getButtons = ()=>cy.get('.accordion :first-child .menu-list>li#item-4');
    getLinks = () => cy.get('.accordion :first-child .menu-list>li#item-5');
    geBrokentLinks = () => cy.get('.accordion :first-child .menu-list>li#item-6');



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

    clickBrokenLinks() {
        this.geBrokentLinks().click()

        return new BrokenLinksPage();
    }



}

export default ElementsPage;