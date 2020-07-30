import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor () {
    this.paymentStep = $('a[title="Pay by bank wire"]');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.paymentStep.click();
  }
}
