import { Ejer05Page } from './app.po';

describe('ejer05 App', function() {
  let page: Ejer05Page;

  beforeEach(() => {
    page = new Ejer05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
