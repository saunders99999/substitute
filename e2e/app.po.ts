import { browser, by, element } from 'protractor';

export class SubstitutePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('subs-root h1')).getText();
  }
}
