# Calculator_Project

A web-based calculator built from scratch with vanilla JavaScript, HTML, and CSS, as a hands-on frontend foundation learning project from The Odin Project.

## Overview

This calculator handles standard arithmetic input such as numbers, operators, decimals, and backspace; by tracking state across three variables: `firstOperand`, `operator`, and `secondOperand`, rather than building one long expression string. That design choice shaped most of the interesting logic problems solved along the way.

## Live Preview

🔗 Try the calculator here: **[Live Demo](https://kreemyy.github.io/top_calculator/)**

No installation required; just open the link to use calculator.

## Features

- Basic arithmetic operations (add, subtract, multiply, divide)
- Chained operator support (pressing a new operator after a result mid-calculation)
- Decimal point handling — the `.` button disables itself once the currently active operand already contains a decimal, preventing invalid numbers like `3.4.5`
- Backspace — removes the last character typed, correctly figuring out which variable (`secondOperand`, `operator`, or `firstOperand`) is currently "active" and cascading back through the previous stage when a variable is emptied
- Handles edge cases like leading minus signs and type coercion between string input and numeric operations

## Lessons Learned

1. State Model and Switching States: Three seperate variables were used for the calculation expressions (firstOperand, operator and secondOperand) and each variable is manipulated independently by inferring which variable is "active".

2. Backspace logic: Backspace undoes input in reverse order of entry
   - If secondOperand has content, trim its last character.
   - Else if operator is set, clear it (falling back to editing firstOperand).
   - Else if firstOperand has content, trim its last character.

3. Decimal Point Guard: The decimal button checks if the operand being typed into already has a decimal point and if yes disables itself to avoid invalid inputs like 4.5.6

4. Event Delegation: Setting an event listener on the container for all the buttons and using the event.target to infer which button was clicked.

## Author

Created by _Kareem_

## Acknowledgement

Project idea and requirements provided by **The Odin Project**
