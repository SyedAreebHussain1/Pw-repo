import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Dvr from "@material-ui/icons/Dvr";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Healing from "@material-ui/icons/Healing";
import FilterCenterFocus from "@material-ui/icons/FilterCenterFocus";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import LocalActivity from "@material-ui/icons/LocalActivity";
import Typography from "@material-ui/core/Typography";
import "dan-styles/vendors/rechart/styles.css";
import basic from "../../api/icons/basicDiamond(1).png";
import starter from "../../api/icons/starterDiamond(1).png";
import gold from "../../api/icons/goldDiamond(1).png";
import silver from "../../api/icons/silverDiamond(1).png";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { dataPerformance } from "dan-api/chart/chartData";
import colorfull from "dan-api/palette/colorfull";
import styles from "./widget-jss";
import PapperBlock from "../PapperBlock/PapperBlock";
import PieCustomShape from "../../containers/Charts/demos/PieCustomShape";
import LineSimple from "../../containers/Charts/demos/LineSimple";
import { useSelector } from "react-redux";

const color = {
  main: colorfull[2],
  secondary: colorfull[3],
  third: colorfull[0],
  fourth: colorfull[1],
};

function PerformanceChartWidget(props) {
  const { classes, data } = props;

  return (
    <>
      <PapperBlock
        whiteBg
        noMargin
        title="Sold Packages"
        icon="ion-ios-analytics-outline"
        desc=""
      >
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <ul className={classes.bigResume}>
              {data.graphCounts.slice(0, 6).map((item, i) => {
                return (
                  <li>
                    <Avatar style={{ backgroundColor: "transparent" }}>
                      <img
                        src={
                          item.title.toLowerCase().includes("basic")
                            ? basic
                            : item.title.toLowerCase().includes("starter")
                            ? starter
                            : item.title.toLowerCase().includes("silver")
                            ? silver
                            : gold
                        }
                        style={{ width: "150px" }}
                      />
                    </Avatar>
                    &nbsp; &nbsp;
                    <Typography variant="h6">
                      <span className={classes.blackText}>{item.counts}</span>
                      <Typography>{item.title}</Typography>
                    </Typography>
                  </li>
                );
              })}

              {/* <li>
                <Avatar
                  className={classNames(classes.avatar, classes.tealAvatar)}
                >
                  <CheckCircle />
                </Avatar>
                <Typography variant="h6">
                  <span className={classes.tealText}>125</span>
                  <Typography>Tasks Done</Typography>
                </Typography>
              </li>
              <li>
                <Avatar
                  className={classNames(classes.avatar, classes.pinkAvatar)}
                >
                  <Healing />
                </Avatar>
                <Typography variant="h6">
                  <span className={classes.pinkText}>17</span>
                  <Typography>Complaints</Typography>
                </Typography>
              </li>
              <li>
                <Avatar
                  className={classNames(classes.avatar, classes.purpleAvatar)}
                >
                  <LocalActivity />
                </Avatar>
                <Typography variant="h6">
                  <span className={classes.purpleText}>18</span>
                  <Typography>Referrals</Typography>
                </Typography>
              </li> */}
            </ul>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <LineSimple />
        </Grid>
      </Grid> */}
      </PapperBlock>
      <br />
      <PapperBlock
        overflowX
        whiteBg
        noMargin
        title="Earning history"
        icon="ion-ios-analytics-outline"
        desc={`Available balance PKR ${
          data !== null && data.fWalletAmount ? data.fWalletAmount.amount : 0
        }`}
      >
        <LineSimple />
      </PapperBlock>
    </>
  );
}

PerformanceChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceChartWidget);
