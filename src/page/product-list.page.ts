import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor () {
    this.productList = $('[style*="display: block;"] .button-container > a');
  }

  public async checkProductList(): Promise<void> {
    await this.productList.click();
  }
}
