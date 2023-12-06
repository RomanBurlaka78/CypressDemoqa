class CheckBoxPage {
    getCheckElement = () => cy.get('span.rct-checkbox>svg');
    getArrowCheckBox = () => cy.get('.rct-text>button');
    getDropDownElement =()=>cy.get('#tree-node > ol > li > ol > li:nth-child(3) > span > label > span.rct-checkbox > svg');
    getUncheckElement = () => cy.get('#tree-node > ol > li > ol > li:nth-child(3) > span > label > span.rct-checkbox > svg > path')



    clickGetcheckElement() {
        this.getCheckElement().click();

        return new CheckBoxPage();
    }

    clickGetArrowCheckBox() {
        this.getArrowCheckBox().click();
        
        return new CheckBoxPage();
    }

    clickDropDownElement() {
        this.getDropDownElement().click();

        return new CheckBoxPage();
    }

    uncheckDropDownElement() {
        this.getUncheckElement().click();

        return new CheckBoxPage();
    }


}
export default CheckBoxPage;