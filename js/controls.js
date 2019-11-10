var searchInput = document.querySelector('.search-box input');

searchInput.onblur = function() {
  document.querySelector('.search-box i').style.display = 'block';
};

searchInput.onfocus = function() {
  document.querySelector('.search-box i').style.display = 'none';
};
