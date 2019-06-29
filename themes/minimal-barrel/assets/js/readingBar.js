window.onscroll = function () {
  updateReadingBar()
};

function updateReadingBar() {
  let fullHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  fullHeight = fullHeight - document.documentElement.clientHeight;
  let current = window.pageYOffset;
  let readingState = (current / fullHeight) * 100;
  let opacity = 1;
  if (readingState < 5 || readingState > 95) {
    opacity = 0;
  }
  document.getElementById('readingProgress').setAttribute("style",`height:${readingState}%;opacity:${opacity}`);
  document.getElementById('readingProgress').style.height=`${readingState}%`;
  document.getElementById('readingProgress').style.opacity=`${opacity}%`;
}