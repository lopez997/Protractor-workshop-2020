import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor () {
    this.productList = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async checkProductList(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productList), 3000);
    await this.productList.click();
  }
}
