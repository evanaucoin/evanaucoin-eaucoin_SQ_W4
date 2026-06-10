function scene3A1() {
  drawTitle("ABOARD THE CASSIAN DREAM");

  drawStoryText(
    [
      "You suit up and cross the docking bridge. The air inside is stale but",
      "breathable. In the crew quarters you find three survivors — gaunt,",
      "terrified, wrapped in emergency blankets.",
      "",
      "\"Don't go near the engine room,\" one whispers. \"We locked it.",
      "Something got in there after the accident. It's been... changing things.\"",
      "",
      "Your scanner confirms the energy pulse is strongest one deck below.",
      "Helix-9 can only carry two extra passengers safely.",
      "",
      "What do you do?",
    ],
    80
  );

  drawButton("Take the survivors — leave immediately", width / 2, 360, "ending1");
  drawButton("Investigate the engine room first", width / 2, 420, "ending2");

  if (checkButton(width / 2, 360)) {
    currentScene = "ending1";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "ending2";
  }
}
