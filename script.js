// script.js
 

 // --- 1. Core Concepts ---
 // Primitive Types
 let stepCount = 0; // Number
 const stepGoalDefault = 10000;
 let userName = "User"; // String
 let isRunning = false; // Boolean
 let caloriesBurned = 0; // Number
 let distanceWalked = 0; // Number
 let timeActive = 0; // Number
 let weightKg = 70;  //Weight default
 

 // Type Conversion and Coercion
 let stepGoal = Number(localStorage.getItem('stepGoal')) || stepGoalDefault; //String to Number
 

 // Template Literals
 const greeting = `Welcome, ${userName}! Let's get stepping.`;
 

 // Variable Scoping (Demonstrated throughout the code)
 

 // --- 2. Control Flow ---
 // Conditionals, Logical Operators, Error Handling
 

 // Function to display a notification
 function showNotification(message, type = 'info') {
  const notificationArea = document.getElementById('notificationArea');
  const notification = document.createElement('div');
  notification.classList.add('notification', `notification-${type}`);
  notification.textContent = message;
  notificationArea.appendChild(notification);
 

  // Show notification
  setTimeout(() => {
  notification.classList.add('show');
  }, 10);
 

  // Hide notification after 3 seconds
  setTimeout(() => {
  notification.classList.remove('show');
  setTimeout(() => {
  notificationArea.removeChild(notification);
  }, 300); // Wait for the transition to complete
  }, 3000);
 }
 

 // --- 3. User Input & Math ---
 // Form Inputs & Validation
 const stepGoalInput = document.getElementById('stepGoal');
 const setGoalBtn = document.getElementById('setGoalBtn');
 const profileForm = document.getElementById('profileForm');
 const nameInput = document.getElementById('name');
 const weightInput = document.getElementById('weight');
 

 

 setGoalBtn.addEventListener('click', () => {
  const newGoal = Number(stepGoalInput.value);
  if (isNaN(newGoal) || newGoal <= 0) {
  showNotification('Invalid step goal. Please enter a positive number.', 'error');
  return;
  }
  stepGoal = newGoal;
  localStorage.setItem('stepGoal', stepGoal);
  updateUI();
  showNotification(`Step goal updated to ${stepGoal} steps.`);
 });
 

 profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!profileForm.checkValidity()) {
  event.stopPropagation();
  profileForm.classList.add('was-validated');
  return;
  }
  userName = nameInput.value;
  weightKg = Number(weightInput.value);
 

  //Clear Input Fields
  nameInput.value = '';
  weightInput.value = '';
  profileForm.classList.remove('was-validated');
 

  showNotification(`Profile updated for ${userName}. Weight: ${weightKg} kg`);
 

 });
 

 // --- 4. Arrays & Objects ---
 // Example (Not directly used in step counting, but demonstrates functionality)
 const stepsArray = [];
 

 // --- 5. Functions & Events ---
 // Named/Arrow Functions, Callbacks, Event Listeners
 const startStopButton = document.getElementById('startStopButton');
 

 startStopButton.addEventListener('click', () => {
  isRunning = !isRunning;
  startStopButton.innerHTML = isRunning ? '<i class="fas fa-pause"></i> Stop' : '<i class="fas fa-play"></i> Start';
  startStopButton.classList.toggle('btn-success');
  startStopButton.classList.toggle('btn-danger');
  if (isRunning) {
  stepCountInterval = setInterval(incrementStepCount, 1000); //Simulate Step counter with intervals
  } else {
  clearInterval(stepCountInterval);
  }
 });
 

 // --- 6. Async Operations (Simulated) ---
 // Promises, async/await (Illustrative example)
 

 function simulateAsyncStepUpdate() {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve(stepCount);
  }, 500); //Simulating delay
  });
 }
 

 async function incrementStepCount() {
  stepCount += Math.floor(Math.random() * 100); //Simulating steps
  await simulateAsyncStepUpdate();
  updateStats();
  updateUI();
 }
 

 // --- 7. API Integration (Skipped, as no API URL was provided) ---
 

 // --- 8. DOM Manipulation ---
 // Create, Modify, Delete Elements, Toggle CSS Classes, Update Content Dynamically
 

 function updateUI() {
  const stepProgressBar = document.getElementById('stepProgressBar');
  const stepProgressText = document.getElementById('stepProgressText');
  const caloriesBurnedElement = document.getElementById('caloriesBurned');
  const distanceWalkedElement = document.getElementById('distanceWalked');
  const timeActiveElement = document.getElementById('timeActive');
  const stepCountElement = document.getElementById('stepCount');
 

  const progress = Math.min((stepCount / stepGoal) * 100, 100);
  stepProgressBar.style.width = `${progress}%`;
  stepProgressBar.setAttribute('aria-valuenow', progress);
  stepProgressText.textContent = `${stepCount} / ${stepGoal} Steps`;
  caloriesBurnedElement.textContent = caloriesBurned.toFixed(2);
  distanceWalkedElement.textContent = distanceWalked.toFixed(2);
  timeActiveElement.textContent = timeActive.toFixed(2);
  stepCountElement.textContent = stepCount;
 }
 

 // --- 9. Forms & Storage ---
 // Validate Inputs, Prevent Invalid Submissions, Store/Retrieve Data from localStorage, Enable Offline Use
 

 // Load data from localStorage
 function loadData() {
  stepGoal = Number(localStorage.getItem('stepGoal')) || stepGoalDefault;
 }
 

 // --- 10. UI Enhancements ---
 // Dark/Light Mode, Modals, Notifications, Smooth UI Transitions
 const darkModeToggle = document.getElementById('darkModeToggle');
 

 darkModeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  darkModeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
 });
 

 // --- 11. Best Practices ---
 // Modular Code, Design Patterns, Clean Separation of Concerns, Error Handling
 

 // Function to update stats
 function updateStats() {
  // Approximate calculations
  caloriesBurned = stepCount * 0.05; //Rough Calculation
  distanceWalked = stepCount * 0.0008; //Rough Calculation
  timeActive = stepCount * 0.005;
 

  //Error Handling
  if (isNaN(caloriesBurned) || isNaN(distanceWalked) || isNaN(timeActive)) {
  console.error('Error: Stats calculation resulted in NaN.');
  return;
  }
 }
 

 //Initialization Function
 function initializeApp() {
  loadData();
  updateUI();
 }
 

 // --- Initialize the App ---
 initializeApp();