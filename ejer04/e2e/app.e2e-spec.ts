import { Ejer04Page } from './app.po';

describe('ejer04 App', function() {
  let page: Ejer04Page;

  beforeEach(() => {
    page = new Ejer04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
