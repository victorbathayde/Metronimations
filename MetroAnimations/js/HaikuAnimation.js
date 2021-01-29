var component = HaikuComponentEmbed_victorbathayde_transitMetro(
  document.getElementById('mount'),
  {loop: true}
);
var timeline = component.getDefaultTimeline();

// Check out the docs:  https://docs.haiku.ai

// Example: control playback
// timeline.gotoAndPlay(1200)

// Example: control states
// component.assignConfig({
//   states: {
//     someState: {value: 0},
//     anotherState: {value: 0}
//   }
// })