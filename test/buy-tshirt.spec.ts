import { $, browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, ProductAddedPage,
  ProductListPage, SummaryContentPage, SignInContent, OrderSummaryPage,
  ShippingStepPage, PaymentStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressContentPage: AddressStepPage = new AddressStepPage();
  const bankContentPage: BankPaymentPage = new BankPaymentPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const productListPage: ProductListPage = new ProductListPage();
  const summaryContentPage: SummaryContentPage = new SummaryContentPage();
  const singInContentPage: SignInContent = new SignInContent();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    // product-added-modal.page
    await productAddedPage.addProduct();
    await(browser.sleep(3000));
    // product-list.page
    await productListPage.checkProductList();
    await(browser.sleep(3000));
    // summary-step.page
    await summaryContentPage.goToSummary();
    await(browser.sleep(3000));
    // sign-in-step.page
    await singInContentPage.goTosignIn();
    await(browser.sleep(3000));
    // address-step.page
    await addressContentPage.confirmAddress();
    await(browser.sleep(3000));
    // order-summary.page
    await orderSummaryPage.checkOrderSummary();
    await(browser.sleep(3000));
    // shipping-step.page
    await shippingStepPage.goToShippingStep();
    await(browser.sleep(3000));
    // payment-step.page
    await paymentStepPage.goToPaymentStep();
    await(browser.sleep(3000));
    // bank-payment.page
    await bankContentPage.checkBankPayment();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
