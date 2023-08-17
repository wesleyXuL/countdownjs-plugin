## v1.0.0

倒计时组件，传入4个参数，开始时间，结束时间，倒计中回调，结束回调

# 安装

```
    npm install countdownjs-plugin
```

# 使用

```
    import Countdown from 'Countdown';

    // 创建倒计时1
    const countdown1 = new Countdown(
      new Date('2023-08-16T12:00:00').getTime(),
      new Date('2023-08-16T13:00:00').getTime(),
      (time) => {
        console.log('倒计时1:', time);
      },
      () => {
        console.log('倒计时1 结束');
      }
    );

    // 创建倒计时2
    const countdown2 = new Countdown(
      new Date('2023-08-1T12:00:00').getTime(),
      new Date('2023-08-16T13:00:00').getTime(),
      (time) => {
        console.log('倒计时2:', time);
      },
      () => {
        console.log('倒计时2 结束');
      }
    );


    // 停止倒计时1和2
    countdown1.stop();
    countdown2.stop();
```

| 属性名 | 是否必填 | 说明 |
|-------|------|------|
| startTime | 是 | 开始时间的时间戳 |
| endTime | 是 | 结束的时间戳 |
| onTick | 是 | 倒计时中回调 |
| onEnd | 是 | 结束回调 | 