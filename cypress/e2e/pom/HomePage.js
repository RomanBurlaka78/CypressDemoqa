import ElementsPage from './ElementsPage';
//import variables from "../fixtures/variables.json";


class HomePage  {

   getElements = () =>  cy.get('div.home-body>.category-cards> :first-child.card');


   gotoElementsPage() {
    this.getElements().click();

    return new ElementsPage();
   }


   navigateHomePage(url) {
       cy.visit(url);
       
    }


}
export default HomePage;