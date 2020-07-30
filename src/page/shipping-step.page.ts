import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private shippingStep: ElementFinder;
  private acceptTerms: ElementFinder;

  constructor () {
    this.shippingStep = $('.cart_navigation span');
    this.acceptTerms = $('#cgv');
  }

  public async checkAcceptTerms(): Promise<void> {
    await this.acceptTerms.click();
  }
  public async goToShippingStep(): Promise<void> {
    await this.shippingStep.click();
  }
}
