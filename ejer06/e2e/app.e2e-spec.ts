import { Ejer06Page } from './app.po';

describe('ejer06 App', function() {
  let page: Ejer06Page;

  beforeEach(() => {
    page = new Ejer06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
