import { Ejer07Page } from './app.po';

describe('ejer07 App', function() {
  let page: Ejer07Page;

  beforeEach(() => {
    page = new Ejer07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
