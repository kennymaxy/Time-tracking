class Alarm {
    constructor() {
        this.alarmTime = null;
        this.alarmTimeout = null;
    }

    setAlarm(time) {
        this.cancelAlarm(); // Clear any existing alarm
        this.alarmTime = new Date(time).getTime();
        const now = Date.now();
        const timeToAlarm = this.alarmTime - now;

        if (timeToAlarm > 0) {
            this.alarmTimeout = setTimeout(() => {
                this.triggerAlarm();
            }, timeToAlarm);
        } else {
            console.error("Alarm time must be in the future.");
        }
    }

    cancelAlarm() {
        if (this.alarmTimeout) {
            clearTimeout(this.alarmTimeout);
            this.alarmTimeout = null;
            this.alarmTime = null;
        }
    }

    checkAlarm() {
        return this.alarmTime ? new Date(this.alarmTime) : null;
    }

    triggerAlarm() {
        alert("Alarm ringing!");
        this.cancelAlarm(); // Automatically cancel the alarm after it rings
    }
}

export default Alarm;