import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedPage {
  private productAdded: ElementFinder;

  constructor () {
    this.productAdded = $('a[title="Proceed to checkout"]');
  }

  public async addProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productAdded), 3000);
    await this.productAdded.click();
  }
}
