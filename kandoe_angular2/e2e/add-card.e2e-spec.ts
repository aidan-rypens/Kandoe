import {browser, element, by, ExpectedConditions,  $} from "protractor";

describe('User should not be logged in', function () {

  beforeEach(function () {
    browser.get('http://localhost:4200/login');
  });

  it('User should go to login page', function () {
    expect(element(by.id('loginForm')).isPresent()).toBe(true);
  });
});

describe('Testing Add Card to Theme', function () {

  beforeEach(function () {
    browser.get('http://localhost:4200/themes');
  });

  it('A user should login with correct credentials', function () {
    browser.driver.findElement(by.id('username')).sendKeys('vdvx');
    browser.driver.findElement(by.id('password')).sendKeys('ww');
    browser.driver.findElement(by.id('loginBtn')).submit();

    let logo = $('#kandoeLogo');
    expect(logo.isPresent()).toBeTruthy();
  });

  it('A theme should exist', function () {
    browser.driver.findElement(by.className('btn btn-info btn-xs')).click();

    var navCard = element(by.id('nav-cards'));
    browser.driver.findElement(by.id('nav-cards')).click();
    browser.driver.findElement(by.id('page-header-add-btn')).click();

    browser.driver.findElement(by.id('tekst')).sendKeys('springplank');
    browser.driver.findElement(by.id('picurl')).sendKeys('thema over zwembad');
  });

});
