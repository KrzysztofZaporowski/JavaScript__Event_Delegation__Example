# JavaScript**Event_Delegation**Example

Example of event delegation in JavaScript

## What is Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent “delegates” the handling of events to its children, often using the event’s bubbling phase to detect which child triggered the event.

## How it's work in this example?

We have a container where we can add boxes. Insted of maaking some list of bexes and handle event delegation to each other we sectect parent element and then we choose whot we are looking for and if selected element require our description i can be for example deleted.

```javascript
boxArea.addEventListener("click", (e) => {
  const box = e.target.closest(".box"); //select what we are looking for
  if (box) {
    console.log("Removing box");
    box.remove();
  }
});
```
