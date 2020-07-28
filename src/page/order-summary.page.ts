import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummary: ElementFinder;

  constructor () {
    this.orderSummary = $('#center_column > div > p > strong');
  }

  public async checkOrderSummary(): Promise<String> {
    return this.orderSummary.getText();
  }
}
