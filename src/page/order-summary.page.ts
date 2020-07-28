import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummary: ElementFinder;

  constructor () {
    this.orderSummary = $('#cgv');
  }

  public async checkOrderSummary(): Promise<void> {
    await this.orderSummary.click();
  }
}
