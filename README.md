# Lost in the Void — A Choose-Your-Own-Adventure Space Game

A browser-based interactive story game built with [p5.js](https://p5js.org/) for a university creative coding assignment.

---

## Game Overview

Year 2247. You are **Commander Yara**, pilot of the deep-space scout vessel *Helix-9*. Six months into a solo mapping mission, a distress signal crackles through your comms — originating from the *Cassian Dream*, a freighter reported missing three years ago.

Every choice you make leads to a different outcome. With **8 unique endings**, no two playthroughs are the same.

---

## Features

- **Fully branching narrative** — 3 levels of choices leading to 8 distinct endings
- **15 separate scene files** — each scene is its own self-contained JavaScript file
- **Reusable button system** — a shared `drawButton()` and `checkButton()` function used across every scene
- **Hover effects** — buttons highlight when the mouse moves over them
- **Restart from any ending** — a Play Again button resets the game to the opening scene
- **Click safety fix** — a `prevMousePressed` guard prevents a single click from accidentally skipping through multiple scenes
- **Minimal design** — black background, white monospace text, clean rectangles for buttons

---

## How to Run

No installation or build step required.

1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Or use the **Live Server** extension in VS Code (right-click `index.html` → *Open with Live Server*)

---

## File Structure
