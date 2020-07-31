import { browser } from 'protractor';
import {
  MenuContentPage,
  AddressStepPage,
  BankPaymentPage,
  ProductAddedPage,
  ProductListPage,
  SummaryContentPage,
  SingInStepPage,
  OrderSummaryPage,
  ShippingStepPage,
  PaymentStepPage,
} from '../src/page';

describe('Should Load Page Browser', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('and purchasing T-Shirt process', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedPage: ProductAddedPage = new ProductAddedPage();
      const summaryContentPage: SummaryContentPage = new SummaryContentPage();
      await menuContentPage.goToTShirtMenu();
      await productListPage.checkProductList();
      await productAddedPage.addProduct();
      await summaryContentPage.goToSummary();
    });

    describe('and Log In the App', () => {
      beforeAll(async () => {
        const singInContentPage: SingInStepPage = new SingInStepPage();
        await singInContentPage.goTosignIn();
      });

      describe('and select default Address', () => {
        beforeAll(async () => {
          const addressContentPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          await addressContentPage.confirmAddress();
          await shippingStepPage.checkAcceptTerms();
          await shippingStepPage.goToShippingStep();
        });

        describe('and perform Bank Payment', () => {
          beforeAll(async () => {
            const bankContentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            await paymentStepPage.goToPaymentStep();
            await bankContentPage.checkBankPayment();
          });
          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.checkOrderSummary()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
