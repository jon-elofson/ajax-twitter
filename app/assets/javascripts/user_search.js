$.UserSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find('input');
  this.$ul = this.$el.find('ul');

};


$.fn.UserSearch = function () {
  return this.each(function (el) {
    new $.UserSearch(this);
  });
};


$(function () {
  $('div.user-search').UserSearch();
});
