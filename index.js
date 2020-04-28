class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        let remainingTime = null;
        const seconds = document.querySelector('[data-value="secs"]');
        const minutes = document.querySelector('[data-value="mins"]');
        const hours = document.querySelector('[data-value="hours"]');
        const days = document.querySelector('[data-value="days"]');
        
        setInterval(() => {
            const current = Date.now();
            const currentDate = new Date(current);
            remainingTime = targetDate.getTime() - Date.now();
            if (remainingTime < 0) {return}
            const deltaTime = new Date(remainingTime);
            const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);
            const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const hrs = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const dys = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            seconds.textContent = secs;
            minutes.textContent = mins;
            hours.textContent = hrs;
            days.textContent = dys;
        }, 1000)
    }
}

const deadLine = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
  });
