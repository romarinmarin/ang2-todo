import { Ang2TodoPage } from './app.po';

describe('ang2-todo App', function() {
  let page: Ang2TodoPage;

  beforeEach(() => {
    page = new Ang2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
