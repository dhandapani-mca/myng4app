import { Myng4appPage } from './app.po';

describe('myng4app App', () => {
  let page: Myng4appPage;

  beforeEach(() => {
    page = new Myng4appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
