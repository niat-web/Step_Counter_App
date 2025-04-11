# Step_Counter_App

## Objective
This project is a step counter application built using HTML, CSS, and JavaScript. It allows users to set a daily step goal, track their progress, and view simulated stats such as calories burned, distance walked, and time active. The application features local storage for persisting the step goal and user preferences, along with UI enhancements like dark/light mode and notifications.

## Output
<iframe src="https://niat-web.github.io/Step_Counter_App" height="1000" width="300" title="Step_Counter_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Font Awesome (for icons)

## Features to Implement
- Set and persist a daily step goal using local storage.
- Track the number of steps (simulated with intervals and random numbers).
- Display progress towards the step goal with a progress bar.

## UI Enhancements
- Implement a dark/light mode toggle.
- Display notifications for user actions (e.g., goal updated, profile updated).

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement step goal input | User can enter a step goal and it updates the display. |
| Implement step counter | The step count increments automatically (simulated). |
| Implement local storage | The step goal and settings are saved and reloaded. |
| Update stats calculation | Update `caloriesBurned`, `distanceWalked`, and `timeActive` based on step count.|

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to update the progress bar, step count, and other UI elements dynamically. |
| Event Listeners | Used to handle button clicks (start/stop, set goal, profile update) and mode toggling.|
| Local Storage | Used to persist the step goal and settings across sessions. |
| Template Literals | Used for creating dynamic greeting messages and UI updates.|
| Type Conversion | Used to convert the step goal entered by the user as type Number |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| N/A | N/A | This project does not directly use any external APIs. |

## MISC Section:

### 1. Formulas/Calculations:
- Calories burned are calculated using the formula: `caloriesBurned = stepCount * 0.05` (approximate calculation).
- Distance walked is calculated using the formula: `distanceWalked = stepCount * 0.0008` (approximate calculation).
- Time active is calculated using the formula: `timeActive = stepCount * 0.005`.

### 2. Array Data:
- The `stepsArray = []` is declared as an empty array. While it's not directly used in the step counting logic, its presence suggests it could potentially be used to store historical step data or for other future enhancements.