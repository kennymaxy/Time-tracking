// src/index.js
import { Alarm } from './alarm.js';
import { CountdownTimer } from './countdown.js';
import { NotificationManager } from './notifications.js';
import { Reminder } from './reminders.js';
import { TaskManager } from './taskManager.js';

const alarm = new Alarm();
const countdownTimer = new CountdownTimer();
const notificationManager = new NotificationManager();
const reminder = new Reminder();
const taskManager = new TaskManager();

// Example usage of the components
function initializeApp() {
    // Set up event listeners and initial states
    document.getElementById('startAlarmButton').addEventListener('click', () => {
        const time = document.getElementById('alarmTimeInput').value;
        alarm.setAlarm(time);
    });

    document.getElementById('startCountdownButton').addEventListener('click', () => {
        const duration = document.getElementById('countdownDurationInput').value;
        countdownTimer.startCountdown(duration);
    });

    document.getElementById('addTaskButton').addEventListener('click', () => {
        const taskName = document.getElementById('taskNameInput').value;
        taskManager.addTask(taskName);
    });

    document.getElementById('setReminderButton').addEventListener('click', () => {
        const time = document.getElementById('reminderTimeInput').value;
        const message = document.getElementById('reminderMessageInput').value;
        reminder.setReminder(time, message);
    });
}

// Initialize the application
initializeApp();