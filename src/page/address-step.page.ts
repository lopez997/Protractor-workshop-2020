import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private address: ElementFinder;

  constructor () {
    this.address = $('[name="processAddress"]');
  }

  public async confirmAddress(): Promise<void> {
    await this.address.click();
  }
}
