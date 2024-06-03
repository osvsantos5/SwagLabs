/// <reference types="cypress" />

import LoginPage from '../../pageObjects/LoginPage';
import InventoryPage from '../../pageObjects/InventoryPage';
import CheckoutPage from '../../pageObjects/CheckoutPage';

describe('Adicionar Produto ao Carrinho', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    loginPage.verifyLoginSuccess();
    inventoryPage.verifyInventoryPage();
    inventoryPage.addFirstProductToCart();
    inventoryPage.verifyProductAddedToCart();
    inventoryPage.goToCart(); // Corrigido de checkOuTheCart() para goToCart()
  });

  it('Deve fazer login e adicionar um produto ao carrinho', () => {
    checkoutPage.proceedToCheckout();
    checkoutPage.fillInYourInformation('Osvaldo', 'Santos', '06434020');
    checkoutPage.completeCheckout();
    checkoutPage.verifyCheckoutComplete();
  });
});
