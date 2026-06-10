function scene1() {
  drawTitle("LOST IN THE VOID");

  drawStoryText(
    [
      "Year 2247. You are Commander Yara, pilot of the deep-space scout vessel",
      "Helix-9. Six months into a solo mapping mission, your comms crackle alive.",
      "",
      "\"SOS... coordinates... anyone who hears this... please...\"",
      "",
      "The signal is faint but real. It originates from a derelict freighter,",
      "the Cassian Dream, reported missing three years ago. Your fuel reserves",
      "are already low. Headquarters is eight days away.",
      "",
      "What do you do?",
    ],
    80
  );

  drawButton("Investigate the distress signal", width / 2, 360, "scene2A");
  drawButton("Ignore it — head straight home", width / 2, 420, "scene2B");

  if (checkButton(width / 2, 360)) {
    currentScene = "scene2A";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "scene2B";
  }
}
