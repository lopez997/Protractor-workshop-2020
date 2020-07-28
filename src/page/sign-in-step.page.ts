import { $, ElementFinder } from 'protractor';

export class SingInStepPage {
  private signIn: ElementFinder;

  constructor () {
    this.signIn = $('#SubmitLogin > span');
  }

  public async goTosignIn(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.signIn.click();
  }
}
