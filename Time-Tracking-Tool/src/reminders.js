class Reminder {
    constructor() {
        this.reminders = [];
        this.nextId = 1; // To assign unique IDs to reminders
    }

    setReminder(time, message) {
        const reminder = {
            id: this.nextId++,
            time: new Date(time),
            message: message,
            isActive: true
        };
        this.reminders.push(reminder);
        this.checkReminders();
        return reminder.id;
    }

    getReminders() {
        return this.reminders.filter(reminder => reminder.isActive);
    }

    deleteReminder(id) {
        const reminderIndex = this.reminders.findIndex(reminder => reminder.id === id);
        if (reminderIndex !== -1) {
            this.reminders[reminderIndex].isActive = false; // Mark as inactive instead of removing
            return true;
        }
        return false;
    }

    checkReminders() {
        const now = new Date();
        this.reminders.forEach(reminder => {
            if (reminder.isActive && reminder.time <= now) {
                this.sendNotification(reminder.message);
                reminder.isActive = false; // Mark as inactive after notifying
            }
        });
    }

    sendNotification(message) {
        // Placeholder for notification logic
        console.log(`Reminder: ${message}`);
    }
}

export default Reminder;