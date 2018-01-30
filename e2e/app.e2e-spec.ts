import { SubstitutePage } from './app.po';

describe('substitute App', () => {
  let page: SubstitutePage;

  beforeEach(() => {
    page = new SubstitutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to subs!');
  });
});
