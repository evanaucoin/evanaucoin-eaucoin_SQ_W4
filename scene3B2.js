function scene3B2() {
  drawTitle("THE OUTER EDGE");

  drawStoryText(
    [
      "The long detour costs you four hours and a significant chunk of fuel,",
      "but Helix-9 comes through without a scratch. You exhale with relief.",
      "",
      "Then — out of nowhere — a new signal. Encrypted, military-band.",
      "The decryption key embedded in it matches a cipher only Earth Command",
      "would know. But Earth Command has not contacted you in six months.",
      "",
      "The message, once decoded, reads only: \"FOLLOW THE BEACON. TRUST NO ONE.\"",
      "Coordinates are attached. They lead somewhere far off your route.",
      "",
      "What do you do?",
    ],
    80
  );

  drawButton("Follow the beacon coordinates", width / 2, 360, "ending7");
  drawButton("Ignore it — something feels wrong", width / 2, 420, "ending8");

  if (checkButton(width / 2, 360)) {
    currentScene = "ending7";
  }
  if (checkButton(width / 2, 420)) {
    currentScene = "ending8";
  }
}
