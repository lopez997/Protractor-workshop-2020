import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private shippingStep: ElementFinder;

  constructor () {
    this.shippingStep = $('#form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.shippingStep.click();
  }
}
