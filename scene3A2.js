function scene3A2() {
  drawTitle("LONG-RANGE SCAN");

  drawStoryText(
    [
      "You keep a cautious distance and run a full-spectrum scan. The results",
      "are baffling. The Cassian Dream's reactor has been completely cold for",
      "at least two years — yet that energy pulse is growing stronger.",
      "",
      "Then your deep-range antenna picks up a secondary signal. Not a voice.",
      "A mathematical sequence. Prime numbers, broadcast on a loop from inside",
      "the freighter. Someone — or something — is trying to communicate.",
      "",
      "Two courses of action remain:",
    ],
    80
  );

  drawButton("Broadcast a response to the signal", width / 2, 360, "ending3");
  drawButton("Report everything to headquarters", width / 2, 420, "ending4");

  if (checkButton(width / 2, 360)) {
    currentScene = "ending3";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "ending4";
  }
}
