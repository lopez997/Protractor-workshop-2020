import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private productAdded: ElementFinder;

  constructor () {
    this.productAdded = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addProduct(): Promise<void> {
    await this.productAdded.click();
  }
}
