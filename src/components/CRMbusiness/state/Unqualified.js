import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class Unqualified extends PureComponent {

  render() {
    return (
    	<div className={styles.UnqualifiedBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>关键字段</strong></Divider>
    		<span className={styles.UnqualifiedSpan}>结束日期</span>
    		<span className={styles.UnqualifiedSpanContent}>2018-12-04</span>
    		<Divider />
            <span className={styles.UnqualifiedSpan}>描述</span>
            <span className={styles.UnqualifiedSpanContent}>描述ing</span>
            <Divider />
    	</div>
    );
  }
}

export default Unqualified;
