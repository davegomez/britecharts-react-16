import React, { Fragment } from 'react';
import ChartWrapper from './components/ChartWrapper'
import { Bar, Donut, GroupedBar, Line, Sparkline, StackedArea, StackedBar, Step, Tooltip } from 'britecharts-react'
import barData from './json/barData.json'
import donutData from './json/donutData.json'
import groupedBarData from './json/groupedBarData.json'
import lineData from './json/lineData.json'
import sparklineData from './json/sparklineData.json'
import stackedAreaData from './json/stackedAreaData.json'
import stackedBarData from './json/stackedBarData.json'
import stepData from './json/stepData.json'
import './App.css';
import './styles/charts/bar.css'
import './styles/charts/donut.css'
import './styles/charts/grouped-bar.css'
import './styles/charts/line.css'
import './styles/charts/sparkline.css'
import './styles/charts/stacked-area.css'
import './styles/charts/stacked-bar.css'
import './styles/charts/step.css'

const customProps = {
  width: 600,
  height: 350,
}

const renderLine = props => (
  <Line tooltipThreshold={0} {...props} {...customProps} />
)

const App = () => {
  console.log();
  return (
    <Fragment>
      <ChartWrapper>
        <Bar data={barData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <Donut data={donutData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <GroupedBar data={groupedBarData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <Tooltip data={lineData}
          render={renderLine}
          topicLabel={'topics'}
          title={'React 15'}
        />
      </ChartWrapper>
      <ChartWrapper>
        <Sparkline data={sparklineData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <StackedArea data={stackedAreaData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <StackedBar data={stackedBarData.data} {...customProps} />
      </ChartWrapper>
      <ChartWrapper>
        <Step data={stepData.data} {...customProps} />
      </ChartWrapper>
    </Fragment>
  )
}

export default App;
