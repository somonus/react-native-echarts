import React, { Component } from "react";
import { WebView, View } from "react-native";
import renderChart from "./renderChart";

export default class App extends Component {
    // 预防过渡渲染
    shouldComponentUpdate(nextProps = {}, nextState) {
        const thisProps = this.props || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
            return true;
        }
        for (const key in nextProps) {
            if (JSON.stringify(thisProps[key]) !== JSON.stringify(nextProps[key])) {
                return true;
            }
        }
        return false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.option !== this.props.option) {
            // 解决数据改变时页面闪烁的问题
            this.refs.chart.injectJavaScript(renderChart(nextProps, false));
        }
    }

    render() {
        const messageFn = this.props.onMessage || null;
        return (
            <View style={{ flex: 1, height: this.props.height || 400 }}>
                <WebView
                    ref="chart"
                    scrollEnabled={false}
                    scalesPageToFit={false}
                    injectedJavaScript={renderChart(this.props, true)}
                    style={{
                        height: this.props.height || 400,
                    }}
                    onMessage={messageFn}
                    source={require("./tpl.html")}
                />
            </View>
        );
    }
}
