import { Ejer11Page } from './app.po';

describe('ejer11 App', function() {
  let page: Ejer11Page;

  beforeEach(() => {
    page = new Ejer11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
