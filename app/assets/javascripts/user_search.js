$.UserSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find('input');
  this.$ul = this.$el.find('ul');
  this.users = [];
  this.$input.on('input',this.handleInput.bind(this));
};

$.UserSearch.prototype.render = function () {
  this.$ul.empty();
  var that = this;
  this.users.forEach(function (user) {
    var $li = $('<li>');
    $li.html(user.username);
    var $button = $('<button>');
    $button.followToggle();
    $li.append($button);
    that.$ul.append($li);
  });
};

$.UserSearch.prototype.handleInput = function (event) {
  event.preventDefault();
  $form = event.currentTarget;
  var that = this;
  var input_str = $form.value;
  $.ajax({
    url: "search",
    type: "GET",
    dataType: "json",
    data: {
      query: input_str
    },
    success: function (data) {
      that.users = data;
      that.render();
    }
  });
};


$.fn.UserSearch = function () {
  return this.each(function (el) {
    new $.UserSearch(this);
  });
};


$(function () {
  $('div.user-search').UserSearch();
});
