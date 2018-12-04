import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class Working extends PureComponent {

  render() {
    return (
    	<div className={styles.NewBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>关键字段</strong></Divider>
    		<span className={styles.NewSpan}>金额</span>
    		<span className={styles.NewSpanContent}>￥1300000</span>
    		<Divider/>
    		<span className={styles.NewSpan}>结束日期</span>
    		<span className={styles.NewSpanContent}>2018-12-04</span>
    		<Divider/>
    	</div>
    );
  }
}

export default Working;
