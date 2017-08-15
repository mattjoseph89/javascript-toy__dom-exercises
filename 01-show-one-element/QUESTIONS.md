# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The page is reset, therefore the text is hidden again, as that is how the source code is written. 

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

the first parameter within the addeventlistener method is the type of event. Therefore since the rest of our code is nested upon the page load occuring, nothing else is functional without that trigger. 

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

The 'addeventlistener' method attaches an event handler to the specified element. The first parameter within this is the event, followed by the specific function we want to occur upon that events occurence. 

