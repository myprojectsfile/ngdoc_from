import { NgdocPage } from './app.po';

describe('ngdoc App', () => {
  let page: NgdocPage;

  beforeEach(() => {
    page = new NgdocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
