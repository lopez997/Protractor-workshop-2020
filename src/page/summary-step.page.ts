import { $, ElementFinder } from 'protractor';

export class SummaryContentPage {
  private summaryButton: ElementFinder;

  constructor () {
    this.summaryButton = $('.cart_navigation span');
  }

  public async goToSummary(): Promise<void> {
    await this.summaryButton.click();
  }
}
