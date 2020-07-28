import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor () {
    this.bankPayment = $('#cart_navigation > button > span');
  }

  public async checkBankPayment(): Promise<void> {
    await this.bankPayment.click();
  }
}
