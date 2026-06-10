function scene2B() {
  drawTitle("THE LONG WAY HOME");

  drawStoryText(
    [
      "You silence the comms and plot a direct course for Earth. Survival first.",
      "The signal fades behind you. You've barely gone two hours when your",
      "navigation alerts scream — a dense asteroid belt has drifted into your",
      "calculated route. It wasn't there six months ago.",
      "",
      "The belt is three light-minutes wide. Your two options:",
      "",
      "Cut straight through — risky, but faster and cheaper on fuel.",
      "Detour around the outer edge — safer, but burns precious reserves.",
    ],
    80
  );

  drawButton("Navigate straight through the belt", width / 2, 360, "scene3B1");
  drawButton("Detour around the outer edge", width / 2, 420, "scene3B2");

  if (checkButton(width / 2, 360)) {
    currentScene = "scene3B1";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "scene3B2";
  }
}
