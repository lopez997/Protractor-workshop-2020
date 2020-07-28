import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private address: ElementFinder;

  constructor () {
    this.address = $('#center_column > form > p > button > span');
  }

  public async confirmAddress(): Promise<void> {
    await this.address.click();
  }
}
