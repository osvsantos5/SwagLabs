/// <reference types="cypress" />

import LoginPage from '../../pageObjects/LoginPage';
import InventoryPage from '../../pageObjects/InventoryPage';
import CheckoutPage from '../../pageObjects/CheckoutPage';

describe('Checkout do Carrinho', () => {
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
    inventoryPage.goToCart();
  });

  it('Deve preencher as informações de checkout e completar a compra', () => {
    checkoutPage.proceedToCheckout();
    checkoutPage.fillInYourInformation('Osvaldo', 'Santos', '06434020');
    checkoutPage.completeCheckout();
    checkoutPage.verifyCheckoutComplete();
  });
});
