import { Ejer02Page } from './app.po';

describe('ejer02 App', function() {
  let page: Ejer02Page;

  beforeEach(() => {
    page = new Ejer02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
