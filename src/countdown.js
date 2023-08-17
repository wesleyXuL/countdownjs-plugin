class Countdown {
	constructor(startTime, endTime, onTick, onEnd) {
		this.startTime = startTime;
		this.endTime = endTime;
		this.onTick = onTick;
		this.onEnd = onEnd;
		this.timer = null;
		this.tickInterval = 1000; // 每一秒触发一次 onTick 回调函数

		this.start();
	}

	start() {
		const now = Date.now();
		if (now >= this.startTime && now <= this.endTime) {
			// 当前时间在起始时间和结束时间之间，启动倒计时
			this.startCountdown();
		} else if (now < this.startTime) {
			// 当前时间早于起始时间，延迟启动倒计时
			const delay = this.startTime - now;
			setTimeout(() => {
				this.startCountdown();
			}, delay);
		} else {
			// 当前时间晚于结束时间，直接触发结束回调
			this.onEnd();
		}
	}

	startCountdown() {
		const distance = this.endTime - Date.now();

		if (distance > 0) {
			const timeRemaining = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			};

			const formattedTime = Object.keys(timeRemaining).reduce((acc, key) => {
				acc[key] = String(timeRemaining[key]).padStart(2, '0');
				return acc;
			}, {});

			this.onTick(formattedTime);

			this.timer = setTimeout(() => {
				this.startCountdown();
			}, this.tickInterval);
		} else {
			this.stop();
			this.onEnd();
		}
	}

	stop() {
		clearTimeout(this.timer);
	}
}
export default Countdown;
