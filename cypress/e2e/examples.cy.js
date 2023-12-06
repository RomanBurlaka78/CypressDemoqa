//Examples of trics

//Close advertising:
        // cy.wait(8000)
        // .then(()=> {
        //  cy.wrap(window.top.document.querySelector('#closeLargeModal')).click({force: true})
        // })
//find element in array
   // cy.get('.rt-tbody .rt-tr:not(.-pad-row) .rt-td').then($els=> {
           //  const newArr = Cypress.$.makeArray($els).map($el => $el.innerText).slice(0,-64)
            // console.log(newArr);
            // console.log(testUser);
            //expect(testUser).to.be.equal(newArr)
        // })

// map elements
// showOutputData(userData) {
//         this.getOutput().then(($els)=> {
//             const outputData = Cypress._.map(Cypress.$.makeArray($els).map(($el)=>$el.textContent));
            
//            return outputData;
//         }).should('deep_eql', userData)
       
//     }