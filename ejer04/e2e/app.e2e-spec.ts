import { ejer04Page } from './app.po';

describe('ejer04 App', function() {
  let page: ejer04Page;

  beforeEach(() => {
    page = new ejer04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('¡Hola, alumnos!');
  });
});
