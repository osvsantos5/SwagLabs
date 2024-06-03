// cypress/pageObjects/LoginPage.js

class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/v1/');
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('#login-button').click();
    }
  
    verifyLoginSuccess() {
      cy.url().should('include', '/inventory.html');
    }
  
    verifyLoginFailure() {
      cy.get('[data-test="error"]', { timeout: 10000 }).should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    }
  }
  
  export default LoginPage;
  