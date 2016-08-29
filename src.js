Array.prototype.forEach.call(
  document.querySelectorAll('.js-comment-container'),
  function(comment) {
    comment.setAttribute('style', 'display:none');
  }
);
