# Deadlands Character Sheet

[Link to hosted character sheet](https://coldplazma.github.io/Deadlands-sheet/deadlands-character-sheet.html)

A custom character sheet for **Deadlands: The Weird West** using **Savage Worlds Adventure Edition** rules. This sheet is built with HTML, CSS, and JavaScript, and allows users to create, save, and load character data in JSON format.

## Features

- **Attributes Section**  
  Easily select each Attribute’s die (Agility, Smarts, Spirit, Strength, Vigor) by clicking on the desired die button (d4, d6, etc.).

- **Skills Section**  
  Standard skills (Athletics, Common Knowledge, Notice, Persuasion, Stealth) included by default.  
  Ability to **Add** new custom skills dynamically.

- **Powers Section**  
  A grid layout for listing powers, including their Power Point (PP) cost, range, duration, and effects.  
  Ability to **Add** new powers dynamically.

- **Gear, Hindrances, and Edges/Advances**  
  Add new gear, hindrances, or edges/advances using the “Add” buttons.

- **Weapons**  
  A grid layout to list weapons with range, damage, armor penetration (AP), rate of fire (ROF), weight (WT), and notes.  
  Ability to **Add** new weapons dynamically.

- **Wounds and Fatigue**  
  Radio buttons to track wound penalties and fatigue penalties, including incapacitation (INC).

- **Save/Load Functionality**  
  - **Save Character**: Collects all character data (Attributes, Skills, Powers, Gear, Hindrances, Edges, Weapons, etc.) and converts it to JSON.  
  - **Load Character**: Restores the character data from JSON, re-populating all fields.

## Getting Started

1. **Clone or Download** this repository.
2. Open `deadlands-character-sheet.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. You can now edit the fields, add skills/powers/weapons, etc.

## How to Use

1. **Filling Out the Sheet**  
   - Click on any of the dice buttons (e.g., d4, d6, etc.) to select the die type for each attribute or skill.  
   - Use the “Add” buttons to insert more skills, powers, gear, hindrances, edges/advances, or weapons.

2. **Saving**  
   - Click **Save Character**.  
   - The JSON data for your character will appear in the `textarea` at the bottom of the page.  
   - **Copy** and save this JSON text in a safe place (e.g., a text file) to keep your character data.

3. **Loading**  
   - **Paste** previously saved JSON data into the `textarea`.  
   - Click **Load Character**.  
   - The sheet will automatically populate with the pasted data.

## Customizing

- **CSS Customization**  
  - The main styling is defined at the top of `deadlands-character-sheet.html` within a `<style>` block.  
  - You can modify colors, fonts, and layout by changing the `:root` variables and the `.section`, `.dice-button`, `.weapon-row`, etc. classes.

- **Adding More Skills/Powers by Default**  
  - In the HTML, simply duplicate the existing rows or write new rows with the desired skill/power name.  
  - Adjust the JavaScript if you want custom logic (like specialized skill dice or special fields).

- **Resizing Grids**  
  - Each grid (for powers, weapons, etc.) is set with `grid-template-columns`.  
  - Update those definitions if you need more or fewer columns, or if you want different widths.

---

## License

This application references the **Savage Worlds** game system, available from **Pinnacle Entertainment Group** at [www.peginc.com](https://www.peginc.com/).

Savage Worlds and all associated logos and trademarks are copyrights of **Pinnacle Entertainment Group**. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

### MIT License

Copyright (c) [2025] [Coldplazma]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
