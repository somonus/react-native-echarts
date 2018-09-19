import toString from "../../util/toString";
export default function renderChart(props, isFirst) {
    const height = `${props.height || 400}px`;
    const width = props.width ? `${props.width}px` : "auto";

    if (isFirst) {
        return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `;
    }
    return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    myChart.clear();
    myChart.resize();
    myChart.setOption(${toString(props.option)});
  `;
}
