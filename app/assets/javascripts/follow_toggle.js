$.FollowToggle = function (el) {
  this.followState = el.data('follow-state');
  this.userId = el.data('user-id');
  this.$el = el;
};

$.FollowToggle.prototype.render = function () {
  if (this.followState == 'unfollowed') {
    this.$el.html('Follow');
  } else {
    this.$el.html('Unfollow');
  }
  return this.$el;
};


$.fn.followToggle = function () {
  return this.each( function () {
    new $.FollowToggle(this);
  });
};


$(function () {
  $("button.follow-toggle").followToggle();
});
