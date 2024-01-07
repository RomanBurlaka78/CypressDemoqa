class AlertsPage {

    getButtonToSeeAlert =() => cy.get("button#alertButton");
    getButtonFiveSecAlert = ()=> cy.get("#timerAlertButton");
    getButtonConfirmBox = () => cy.get("#confirmButton");
    getButtonPromptBox = () => cy.get("#promtButton");


    clickButtonToSeeAlert() {
        this.getButtonToSeeAlert()
            .click();

            return this;
    }

    confirmAlert(message) {
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.eql(message);
        })

        return this;
    }

    clickButtonAllertAfterFiveSec() {
        this.getButtonFiveSecAlert()
            .click();

            return this;
    }

    confirmAlertWait(message) {
        cy.on('window:alert',(t)=>{
            cy.wait(6000)
            //assertions
            expect(t).to.eql(message);
        })

        return this;
    }




}
export default AlertsPage;