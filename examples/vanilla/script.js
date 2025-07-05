console.log(ScrollingText.version);
const element = document.getElementById("container");

const scroller = new ScrollingText(element, ["Hello", "How", "Are", "You"], {
  ...ScrollingTextAnimation.fade,
  // Other options can be added here
});
scroller.start();
