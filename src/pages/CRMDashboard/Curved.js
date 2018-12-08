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
import { connect } from 'dva';

// 定义data
const data = [
  {month: "Jan","money": 0.0,},
  {month: "Feb","money": 0.0,},
  {month: "Mar","money": 0.0,},
  {month: "Apr","money": 0.0,},
  {month: "May","money": 0.0,},
  {month: "Jun","money": 0.0,},
  {month: "Jul","money": 0.0,},
  {month: "Aug","money": 0.0,},
  {month: "Sep","money": 0.0,},
  {month: "Oct","money": 0.0,},
  {month: "Nov","money": 0.0,},
  {month: "Dec","money": 0.0,}
];

// 
@connect(({ chart, loading }) => ({
  chart,
  projectLoading: loading.effects['chart/submit'],
}))
class Curved extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      flag:false,
};
}
  // 对有数据的月份 进行赋值
  flag=(e)=>{
    if(this.state.list.length !=0){
      for(var i = 0;i<this.state.list.data.length;i++){
        const s = this.state.list.data[i].money;
       data[this.state.list.data[i].month-1].money = s;
       this.setState({
        flag:this.state.flag?false:true,
      })
      }
    }
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'chart/submit',
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
        list: nextProps.chart.list,
          },()=>{this.flag()});
          this.flag();
    }
  render() {
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
        <strong className={styles.jySpan}>业绩(名词暂定)</strong><br />
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
