// cypress/pageObjects/InventoryPage.js

/*class InventoryPage {
  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html');
  }

  addFirstProductToCart() {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').contains('ADD TO CART').click();
    cy.get('.fa-layers-counter').click()
  }
 

  verifyProductAddedToCart() {
    cy.get('.cart_quantity').should('be.visible').and('contain', '1');
  }

  checkOuTheCart() {

    cy.get('.btn_action').click()

  }
  fillInYourInformation(firstName, lastName,postalCode){
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('.btn_primary').click()
  }
  checkOutOverview(){
    cy.get('.btn_action').click()
  }
}
  


export default InventoryPage;*/

// cypress/pageObjects/InventoryPage.js

class InventoryPage {
  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html');
  }

  addFirstProductToCart() {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').contains('ADD TO CART').click();
    cy.get('.fa-layers-counter').click()
  }

  verifyProductAddedToCart() {
    cy.get('.cart_quantity').should('be.visible').and('contain', '1');
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default InventoryPage;

