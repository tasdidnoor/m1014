# MATH 1014 Study Aid (Section M)

An interactive, data-driven academic aid designed specifically for **York University MATH 1014 (Section M)** students. This tool provides a centralized platform to practice problems from the textbook and review key questions covered in lectures.

## Source Material
- **Textbook**: *Calculus: Early Transcendentals*, 9th Edition.
- **Lectures**: Includes specific problems highlighted during MATH 1014 Section M lecture sessions.

While tailored for a specific section, this resource is open and encouraged for use by any student studying Calculus II.

## Key Features
- **Interactive Solver**: "Try it myself" mode with real-time answer verification.
- **Step-by-Step Solutions**: High-quality solution images for every assigned problem.
- **Progress Tracking**: Automatic checkmarks (✓) for correctly answered questions, persisted via `localStorage`.
- **Lecture Review**: A dedicated space to revisit complex problems solved in class.
- **Mobile-First Design**: Optimized for quick study sessions on phones, tablets, or desktops.
- **Seamless Navigation**: Sidebar access to all assigned questions within a chapter for efficient practice.

## How It Works (Maintenance)
The application is entirely data-driven. The UI, chapter lists, and question data are generated dynamically from the `// --- CONFIGURATION ---` section in `script.js`.

### To update content:
1. Open `script.js`.
2. **Add/Reorder Chapters**: Update the `assignedChapters` array.
3. **Update Questions**: Add or remove question numbers in the `assignedQuestions` object.
4. **Add Solutions**: Update the `questionData` object with the correct answer and image path.

## Tech Stack
- **Frontend**: HTML5, Vanilla CSS3 (Responsive Design).
- **Logic**: Vanilla JavaScript (ES6+).
- **Storage**: Browser `localStorage` for progress persistence.

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
Created by **Tasdid Noor**
