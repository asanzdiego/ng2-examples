import { Ejer10Page } from './app.po';

describe('ejer10 App', function() {
  let page: Ejer10Page;

  beforeEach(() => {
    page = new Ejer10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
