import { Ejer09Page } from './app.po';

describe('ejer09 App', function() {
  let page: Ejer09Page;

  beforeEach(() => {
    page = new Ejer09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
