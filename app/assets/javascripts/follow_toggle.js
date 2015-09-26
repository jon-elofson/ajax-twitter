$.FollowToggle = function (el) {
  this.followState = $(el).attr('data-follow-state');
  this.userId = $(el).attr('data-user-id');
  this.$el = $(el);
  this.$el.on('click',this.handleClick.bind(this));
  this.render();
};

$.FollowToggle.prototype.render = function () {
  if (this.followState == 'unfollowed') {
    this.$el.html('Follow!');
    this.$el.prop('disabled',false);
  } else if (this.followState == 'followed') {
    this.$el.html('Unfollow');
    this.$el.prop('disabled',false);
  } else if (this.followState == 'unfollowing') {
    this.$el.html('Unfollowing');
    this.$el.prop('disabled',true);
  } else if (this.followState == 'following') {
    this.$el.html('Following');
    this.$el.prop('disabled',true);
  }
};

$.FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();
  var that = this;
  userId = $(event.currentTarget).data('userId');
  urlString = '/users/' + userId + '/follow';
  followState = $(event.currentTarget).data('followState');
  if (followState == 'unfollowed') {
    that.followState = 'following';
    that.render();
    $.ajax({
      url: urlString,
      type: "POST",
      success: function () {
        that.followState = "followed";
        that.render();
      }
    });
  } else if (followState == 'followed') {
    that.followState = 'unfollowing';
    that.render();
    $.ajax({
      url: urlString,
      type: "DELETE",
      success: function () {
        that.followState = "unfollowed";
        that.render();
      }
    });
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
