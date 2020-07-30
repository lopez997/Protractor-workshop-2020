import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummary: ElementFinder;

  constructor () {
    this.orderSummary = $('.cheque-indent');
  }

  public async checkOrderSummary(): Promise<String> {
    return this.orderSummary.getText();
  }
}
