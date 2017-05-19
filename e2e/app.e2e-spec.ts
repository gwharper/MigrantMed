import { MigrantMedPage } from './app.po';

describe('migrant-med App', () => {
  let page: MigrantMedPage;

  beforeEach(() => {
    page = new MigrantMedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
