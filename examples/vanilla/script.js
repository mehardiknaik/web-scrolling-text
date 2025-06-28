console.log(ScrollingText.version);
const element = document.getElementById("container");

const scroller = new ScrollingText(element, ["Hello", "How", "Are", "You"]);
scroller.addPlugins([ScrollingTextModule.fade]);
scroller.start();
