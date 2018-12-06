$('.feed').breakingNews({
  url: 'http://feeds.feedburner.com/jquery-script',
  feedSize: {
    height: '20px',
    width: '920px'
  },
  numberToShow: 5,
  refresh: 2000,
  effect: 'tricker',
  effectDuration: 50,
  onComplete: function() {
    $(this).prepend('<div class="feed-title">');
    $('.feed-title').html(arguments[0].responseData.feed.title);
  }
});