/// <reference types="cypress" />

import LoginPage from '../../pageObjects/LoginPage';

describe('Teste de Login no SauceDemo', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Deve fazer login com sucesso', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    loginPage.verifyLoginSuccess();
  });

  it('Deve falhar o login com credenciais inválidas', () => {
    loginPage.fillUsername('usuario_invalido');
    loginPage.fillPassword('senha_invalida');
    loginPage.submit();
    loginPage.verifyLoginFailure();
  });
});
