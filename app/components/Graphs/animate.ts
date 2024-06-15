const totalDuration = 10000;
const delayBetweenPoints = totalDuration / 50;
const previousY = (ctx: { index: number; chart: { scales: { y: { getPixelForValue: (arg0: number) => any; }; }; getDatasetMeta: (arg0: any) => { (): any; new(): any; data: { getProps: (arg0: string[], arg1: boolean) => { (): any; new(): any; y: any; }; }[]; }; }; datasetIndex: any; }) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx: { type: string; xStarted: boolean; index: number; }) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx: { type: string; yStarted: boolean; index: number; }) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};

export default animation