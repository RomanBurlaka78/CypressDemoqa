/// <reference types="cypress" />

import HomePage from "./pom/HomePage";
import variables from "../fixtures/variables.json";

describe('Textbox testing', ( )=> {
    const homePage =new HomePage();
   
    beforeEach(()=> {
        homePage.navigateHomePage(variables.URL.site);
       
    })


   it('fill textbox', function () {
    homePage
        .gotoElementsPage()
        .clickGetTexBox()
        .fillUserName(variables.formData.firstName)
        .fillUserEmail(variables.formData.email)
        .fillCurrentAddress(variables.formData.currentAddress)
        .fillPermanentAddress(variables.formData.permanentAddress)
        .clickSubmitForm();
        // .getNameUser()
        // .should("be.visible")
        // .and("have.text", variables.formData.firstName);

  
   });
  


  });
  