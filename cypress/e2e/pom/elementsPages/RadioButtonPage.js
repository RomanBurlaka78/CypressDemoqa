class RadioButtonPage {
    getRadioYes = ()=> cy.get('#yesRadio');
    getRadioImpressive = ()=> cy.get('#impressiveRadio');
    getRadioNo = ()=> cy.get('#noRadio');


    clickRadioYes() {
         this.getRadioYes().check({force:true});

        return new RadioButtonPage();
    }

    clickRadioImpressive() {
        this.getRadioImpressive().check({force:true});

        return new RadioButtonPage();
    }

    clickRadioNo() {
        this.getRadioNo().check({force:true});

        return new RadioButtonPage();
    }


    

}
export default RadioButtonPage;