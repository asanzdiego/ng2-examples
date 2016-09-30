import { Ejer08Page } from './app.po';

describe('ejer08 App', function() {
  let page: Ejer08Page;

  beforeEach(() => {
    page = new Ejer08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
