import { Angular2MetronicPage } from './app.po';

describe('angular2-metronic App', function() {
  let page: Angular2MetronicPage;

  beforeEach(() => {
    page = new Angular2MetronicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
