import { ProjetAngPage } from './app.po';

describe('projet-ang App', () => {
  let page: ProjetAngPage;

  beforeEach(() => {
    page = new ProjetAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
