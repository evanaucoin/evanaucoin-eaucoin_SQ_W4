function scene2A() {
  drawTitle("THE CASSIAN DREAM");

  drawStoryText(
    [
      "You fire thrusters and close the distance. The Cassian Dream floats dark",
      "and silent, hull scarred by micrometeorite impacts. One cargo bay door",
      "hangs open. Emergency lights flicker weakly inside.",
      "",
      "Your sensors pick up faint heat signatures — possibly survivors.",
      "But something else triggers on your scanner: an unknown energy reading",
      "deep in the ship's core. It doesn't match any known power source.",
      "",
      "You have two options:",
    ],
    80
  );

  drawButton("Dock and board the ship", width / 2, 340, "scene3A1");
  drawButton("Scan from a safe distance first", width / 2, 400, "scene3A2");

  if (checkButton(width / 2, 340)) {
    currentScene = "scene3A1";
  }
  if (checkButton(width / 2, 400)) {
    currentScene = "scene3A2";
  }
}
