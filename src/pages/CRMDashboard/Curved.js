import React from "react";
import styles from './Analysis.less';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class Curved extends React.Component {
  render() {
    const data = [
      {
        month: "Jan",
        money: 0.0,
      },
      {
        month: "Feb",
        money: 6.9,
      },
      {
        month: "Mar",
        money: 15.6,
      },
      {
        month: "Apr",
        money: 30.8,
      },
      {
        month: "May",
        money: 50.7,
      },
      {
        month: "Jun",
        money: 88.3,
      },
      {
        month: "Jul",
        money: 135.2,
      },
      {
        month: "Aug",
        money: 186.5,
      },
      {
        month: "Sep",
        money: 222.2,
      },
      {
        month: "Oct",
        money: 234.9,
      },
      {
        month: "Nov",
        money: 255.5,
      },
      {
        month: "Dec",
        money: 276.9,
      }
    ];
    const moneyDown = 138000;
    const moneyNo = 139500;
    const moneySign = 250000;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["money"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div className={styles.QuarterlyResults}>
        <strong className={styles.jySpan}>业绩</strong><br />
        <span className={styles.count}>已结束<strong>￥{moneyDown}</strong></span>
        <span className={styles.count}>未处理<strong>￥{moneyNo}</strong></span>
        <span className={styles.count}>目标<strong>￥{moneySign}</strong></span>
        <Chart height={400} data={dv} scale={cols} forceFit>
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}K`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
            shape={"smooth"}
          />
        </Chart>
      </div>
    );
  }
}

export default Curved;
