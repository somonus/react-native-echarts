// 修改后
import echarts from './echarts.min';
import toString from '../../util/toString';
var myChart = null;
export default function renderChart(props,isFirst) {
  // const height = props.height || 400;
  const height = `${props.height || 400}px`;
  const width = props.width ? `${props.width}px` : 'auto';
  if (isFirst){
    return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `
  }else{
    return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart.setOption(${toString(props.option)});
  `
  }
}
