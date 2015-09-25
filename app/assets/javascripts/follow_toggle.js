$.FollowToggle = function (el) {
  this.followState = $(el).attr('data-follow-state');
  this.userId = $(el).attr('data-user-id');
  this.$el = $(el);
  this.render();
};

$.FollowToggle.prototype.render = function () {
  if (this.followState == 'unfollowed') {
    this.$el.html('Follow!');
  } else {
    this.$el.html('Unfollow');
  }
};





$.fn.followToggle = function () {
  return this.each( function () {
    new $.FollowToggle(this);
  });
};


$(function () {
  $("button.follow-toggle").followToggle();
});
