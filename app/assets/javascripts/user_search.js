$.UserSearch = function (el) {
  this.$el = $(el);
  debugger;
};


$.fn.UserSearch = function () {
  return this.each(function (el) {
    new $.UserSearch(this);
  });
};


$(function () {
  $('div.user-search').UserSearch();
});
