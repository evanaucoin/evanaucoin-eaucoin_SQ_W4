function scene3B1() {
  drawTitle("THROUGH THE BELT");

  drawStoryText(
    [
      "You push the throttle and weave between tumbling rocks at full speed.",
      "Two close calls rattle your nerves, but you make it through — almost.",
      "",
      "A large fragment clips your starboard thruster. Helix-9 begins a slow",
      "spin. As you fight to stabilise, your sensors flag something remarkable:",
      "a small, unmarked station anchored to a large asteroid dead ahead.",
      "It's running on minimal power, but the airlock light is green.",
      "",
      "Your thruster damage means you can't make it home without repairs.",
      "",
      "Do you:",
    ],
    80
  );

  drawButton("Dock at the mystery station for repairs", width / 2, 360, "ending5");
  drawButton("Attempt to limp home on one thruster", width / 2, 420, "ending6");

  if (checkButton(width / 2, 360)) {
    currentScene = "ending5";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "ending6";
  }
}
