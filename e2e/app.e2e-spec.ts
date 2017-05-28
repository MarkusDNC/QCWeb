import { QuadCopterPage } from './app.po';

describe('quad-copter App', () => {
  let page: QuadCopterPage;

  beforeEach(() => {
    page = new QuadCopterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
