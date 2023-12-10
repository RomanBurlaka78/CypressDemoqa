import CheckBoxPage from './CheckBoxPage';
import RadioButtonPage from './RadioButtonPage';
import TextBoxPage from './TextBoxPage';
class ElementsPage {
    getTextBox = ()=> cy.get('div.accordion>:first-child .menu-list> :first-child');
    getCheckBox = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li');
    getRadioButton = () =>cy.get('div.accordion>:first-child .menu-list> :first-child+li+li');


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
}

export default ElementsPage;