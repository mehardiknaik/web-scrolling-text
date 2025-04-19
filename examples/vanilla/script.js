console.log(ScrollingText.version)
const element = document.getElementById('container')
const scrollingText = new ScrollingText(element, ["Hello", "World", "How", "Are", "You"])
scrollingText.start()