import echarts from './echarts.min';

export default function renderChart(option) {
  return `
    <!DOCTYPE html>\n
    <html>
      <head>
        <title>echarts</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <style type="text/css">
          html,body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          #main {
            height: 100%;
          }
        </style>
        <script>
          ${echarts}
        </script>
      </head>
      
      <body>
        <div id="main" ></div>
        <script>
          // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(${JSON.stringify(option)});
        </script>
      <body>
    <html>
    `
}
