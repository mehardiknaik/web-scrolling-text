console.log(ScrollingText.version);
const element = document.getElementById("container");

const scroller = new ScrollingText(element, ["Hello", "How", "Are", "You"], {
  ...ScrollingTextAnimation.fade,
  // Other options can be added here
});
scroller.start();

scroller.on('onChange', (index) => {
  console.log('onChange:', index);
});

scroller.on('onStart', (index) => {
  console.log('onStart:', index);
});

scroller.on('onStop', (index) => {
  console.log('onStop:', index);
});

scroller.on('onPause', (index) => {
  console.log('onPause:', index);
});

scroller.on('onReachEnd', (index) => {
  console.log('onReachEnd:', index);
});
