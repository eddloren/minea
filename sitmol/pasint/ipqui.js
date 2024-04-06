describe('comments', function () {
  const addComment = (comment) => {
    element(by.id('comment-input')).sendKeys(comment);
    element(by.id('add-comment-button')).click();
  };

  beforeEach(() => {
    browser.get('/');
  });

  it('should add a comment', function () {
    addComment('This is a comment');
    expect(element.all(by.css('.comment')).count()).toEqual(1);
  });

  it('should delete a comment', function () {
    addComment('This is a comment');
    element.all(by.css('.comment')).first().element(by.css('.delete-comment-button')).click();
    expect(element.all(by.css('.comment')).count()).toEqual(0);
  });
});
