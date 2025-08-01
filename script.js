// JavaScript logic for the Time Tracking Tool

let startTime = null; // Start time of the task
let intervalId = null; // Interval reference for updating time
let totalTime = 0; // Total tracked time in seconds

// Function to start tracking time
function startTracking() {
  if (!startTime) {
    startTime = Date.now();
    intervalId = setInterval(updateTimeDisplay, 1000);
  }
}

// Function to stop tracking time and log task
function stopTracking() {
  if (startTime) {
    clearInterval(intervalId);
    totalTime += Math.floor((Date.now() - startTime) / 1000);
    logTask();
    startTime = null;
  }
}

// Function to reset tracking values
function resetTracking() {
  clearInterval(intervalId);
  startTime = null;
  totalTime = 0;
  document.getElementById('timeDisplay').textContent = '00:00:00';
}

// Function to update the on-screen timer
function updateTimeDisplay() {
  const elapsed = totalTime + Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('timeDisplay').textContent = formatTime(elapsed);
}

// Helper function to format seconds into HH:MM:SS
function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Function to log task in the task list
function logTask() {
  const taskName = document.getElementById('taskNameInput').value || 'Unnamed Task';
  const formattedTime = formatTime(totalTime);
  const li = document.createElement('li');
  li.textContent = `${taskName}: ${formattedTime}`;
  document.getElementById('taskLog').appendChild(li);
}
