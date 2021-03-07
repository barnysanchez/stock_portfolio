import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PerformanceChart from "./charts/PerformanceChart.js"
import UploadHistory from "./uploadHistory.js"

function TabPanelOverviewChart(props) {
  const { value, index, portfolio } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      className="tabPanelDiv padding-top-10"
      >
      <PerformanceChart portfolio={ portfolio }></PerformanceChart>
    </div>
  );
}

export default function Performance(props) {
  const { portfolio, loadBasicPortfolio } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hasStock = portfolio && portfolio.stocks && portfolio.stocks.length > 0;

  return (
    <div>
      <UploadHistory loadBasicPortfolio={loadBasicPortfolio}></UploadHistory>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="performance"
      >
        <Tab label="Overall" />
      </Tabs>
      { hasStock && 
        <TabPanelOverviewChart value={value} index={0} portfolio={portfolio}>
        </TabPanelOverviewChart>
      }
      {
        !hasStock && 
        <div id="emptyPerformance">
        <h2>No stock configured</h2>
        </div>
      }
    </div>
  );
}

TabPanelOverviewChart.propTypes = {
  value: PropTypes.number,
  index: PropTypes.number,
  portfolio: PropTypes.object,
};

Performance.propTypes = {
  portfolio: PropTypes.object,
  loadBasicPortfolio: PropTypes.func
};