import { ElementFinder, by, element } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor () {
    this.bankPayment = element(by.partialButtonText('I confirm my order'));
  }

  public async checkBankPayment(): Promise<void> {
    await this.bankPayment.click();
  }
}
