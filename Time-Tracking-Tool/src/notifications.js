class NotificationManager {
    constructor() {
        this.notifications = [];
    }

    sendNotification(message) {
        // Create a new notification
        const notification = new Notification(message);
        this.notifications.push(notification);
        console.log(`Notification sent: ${message}`);
    }

    scheduleNotification(time, message) {
        const notificationTime = new Date(time).getTime();
        const currentTime = Date.now();

        if (notificationTime > currentTime) {
            const timeout = notificationTime - currentTime;
            setTimeout(() => {
                this.sendNotification(message);
            }, timeout);
            console.log(`Notification scheduled for ${new Date(time)}: ${message}`);
        } else {
            console.log("Scheduled time must be in the future.");
        }
    }

    clearNotifications() {
        this.notifications = [];
        console.log("All notifications cleared.");
    }
}