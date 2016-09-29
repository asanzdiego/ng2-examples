import { Ejer03Page } from './app.po';

describe('ejer03 App', function() {
  let page: Ejer03Page;

  beforeEach(() => {
    page = new Ejer03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
