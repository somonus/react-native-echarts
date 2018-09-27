export default function renderChart(props) {
    const height = `${props.height || 400}px`;
    const width = props.width ? `${props.width}px` : "auto";
    return `
    setTimeout(()=>{
      document.getElementById('main').style.height = "${height}";
      document.getElementById('main').style.width = "${width}";
      var myChart = echarts.init(document.getElementById('main'), null, {renderer: 'svg'});
      myChart.on('legendselectchanged',function(params){
        params = params || {};
        if(typeof window.postMessage  === 'function'){
          window.postMessage(JSON.stringify(params))
        }
      })
      myChart.setOption(${JSON.stringify(props.option)});
    }, 100)
  `;
}
