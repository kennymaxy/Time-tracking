class CountdownTimer {
    constructor() {
        this.duration = 0;
        this.remainingTime = 0;
        this.intervalId = null;
    }

    startCountdown(duration) {
        this.duration = duration;
        this.remainingTime = duration;
        this.intervalId = setInterval(() => {
            if (this.remainingTime > 0) {
                this.remainingTime -= 1000; // Decrease by 1 second
            } else {
                clearInterval(this.intervalId);
                this.intervalId = null;
                this.remainingTime = 0;
                // Optionally, trigger an alarm or notification here
            }
        }, 1000);
    }

    pauseCountdown() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetCountdown() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.remainingTime = this.duration;
    }

    getRemainingTime() {
        return this.remainingTime;
    }
}

export default CountdownTimer;