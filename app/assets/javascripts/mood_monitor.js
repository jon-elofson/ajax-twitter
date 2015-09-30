$.moodMonitor = function (el) {
  this.$el = $(el);
  this.mood = parseInt($(el).attr('data-mood'));
  this.userId = $(el).attr('data-user-id');
  this.$moodDisplay = this.$el.find('div.mood-display');
  this.$plus = this.$el.find('button.plus');
  this.$minus = this.$el.find('button.minus');
  this.$plus.on('click',this.increaseMood.bind(this));
  this.$minus.on('click',this.decreaseMood.bind(this));
  this.render();
};

$.moodMonitor.colorMap = {
  0: 'maroon',
  1: 'red',
  2: 'orange',
  3: 'yellow',
  4: 'green',
  5: 'gray',
  6: 'blue',
  7: 'teal',
  8: 'purple',
  9: 'pink',
  10: 'magenta'
};

$.moodMonitor.prototype.increaseMood = function (event) {
  if (this.mood < 100) {
    this.mood += 1;
    this.ajaxMoodUpdate();
  }
};

$.moodMonitor.prototype.ajaxMoodUpdate = function () {
  var that = this;
  var urlString = '/users/' + this.userId;
  $.ajax({
    url: urlString,
    method: 'PUT',
    data: {mood: this.mood},
    success: function () {
      that.render();
    }
  });
};

$.moodMonitor.prototype.decreaseMood = function (event) {
  if (this.mood > 0) {
    this.mood -= 1;
    this.ajaxMoodUpdate();
  }
};

$.moodMonitor.prototype.render = function () {
  this.$moodDisplay.css({'background-color': $.moodMonitor.colorMap[(this.mood / 10)]});
  this.$moodDisplay.html(this.mood);
};



$.fn.moodMonitor = function () {
  return this.each(function (el) {
    new $.moodMonitor(this);
  });
};

$(function () {
  $('div.mood-monitor').moodMonitor();
});
