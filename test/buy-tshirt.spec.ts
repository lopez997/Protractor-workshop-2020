import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, ProductAddedPage,
  ProductListPage, SummaryContentPage, SingInStepPage, OrderSummaryPage,
  ShippingStepPage, PaymentStepPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressContentPage: AddressStepPage = new AddressStepPage();
  const bankContentPage: BankPaymentPage = new BankPaymentPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const productListPage: ProductListPage = new ProductListPage();
  const summaryContentPage: SummaryContentPage = new SummaryContentPage();
  const singInContentPage: SingInStepPage = new SingInStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    // product-list.page
    await productListPage.checkProductList();
    // product-added-modal.page
    await productAddedPage.addProduct();
    // summary-step.page
    await summaryContentPage.goToSummary();
    // sign-in-step.page
    await singInContentPage.goTosignIn();
    // address-step.page
    await addressContentPage.confirmAddress();
    // shipping-step.page
    await shippingStepPage.checkAcceptTerms();
    await shippingStepPage.goToShippingStep();
    // payment-step.page
    await paymentStepPage.goToPaymentStep();
    // bank-payment.page
    await bankContentPage.checkBankPayment();
    // order-summary.page
    await expect(orderSummaryPage.checkOrderSummary())
      .toBe('Your order on My Store is complete.');
  });
});
