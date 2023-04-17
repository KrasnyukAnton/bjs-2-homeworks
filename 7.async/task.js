class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock = (timeStart, alarmPlay) => {
    if (!timeStart || !alarmPlay) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.includes(timeStart)) {
      console.warn("Уже есть звонок на это же время");
      return;
    }

    const alarmItem = {
      callback: alarmPlay,
      time: timeStart,
      canCall: true,
    };

    this.alarmCollection.push(alarmItem);
  };

  removeClock = (time) => {
    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.time !== time
    );
  };

  getCurrentFormattedTime = () => {
    const nowTime = new Date();

    const nowTimeFormated = `${
      nowTime.getHours() < 9 ? `0${nowTime.getHours()}` : nowTime.getHours()
    }:${
      nowTime.getMinutes() < 9
        ? `0${nowTime.getMinutes()}`
        : nowTime.getMinutes()
    }`;

    return nowTimeFormated;
  };

  start = () => {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  resetAllCalls = () => {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    });
  };

  clearAlarms = () => {
    this.stop();
    this.alarmCollection = [];
  };
}
