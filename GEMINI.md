# MATH 1014 Textbook Questions Project

## Overview
This project is an interactive academic aid for MATH 1014 students. It provides textbook questions, interactive answer verification, and step-by-step solution images.

## Architecture
The application is **data-driven**, meaning the UI is generated dynamically based on configurations in `script.js`.

### Core Files
- **`index.html`**: Home page displaying available chapters.
- **`chapter.html`**: Displays the specific questions assigned for the selected chapter.
- **`question.html`**: Interactive solver with a sidebar for quick navigation, a "Try it myself" mode, and solution display.
- **`script.js`**: The central engine. Contains the syllabus mapping and logic.

## How to Maintain Content
All modifications should be made in the **`// --- CONFIGURATION ---`** section at the top of `script.js`.

### 1. Adding/Reordering Chapters
Update the `assignedChapters` array. The order in this array determines the order of buttons on the home page.
```javascript
const assignedChapters = ["5.3", "5.4", "6.1", ...];
```

### 2. Updating Assigned Questions
Add or remove question numbers in the `assignedQuestions` object.
```javascript
"5.3": [7, 11, 15, 29, 41, 51, 63],
```

### 3. Adding Solutions & Answers
Update the `questionData` object. 
- **Key**: `"Chapter-Question"` (e.g., `"5.3-7"`)
- **answer**: The exact text/number for verification.
- **unit**: (Optional) Displayed unit.
- **solutionImg**: Path to the solution image (e.g., `"images/ch5_3_q7.png"`).

## Technical Features
- **Responsive Design**: Mobile-friendly layout using media queries.
- **Progress Tracking**: Uses `localStorage` to display green checkmarks (✓) for correctly answered questions.
- **Navigation**: "Next" and "Previous" buttons automatically respect the assigned question list.
