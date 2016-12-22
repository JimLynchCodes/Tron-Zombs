import { TronZombsPage } from './app.po';

describe('tron-zombs App', function() {
  let page: TronZombsPage;

  beforeEach(() => {
    page = new TronZombsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
