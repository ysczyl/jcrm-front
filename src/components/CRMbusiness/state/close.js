import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class Close extends PureComponent {

  render() {
    return (
    	<div className={styles.UnqualifiedBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>关键字段</strong></Divider>
    		<span className={styles.UnqualifiedSpan}>Loss Reason</span>
    		<span className={styles.UnqualifiedSpanContent}>No Decision / Non-Responsive</span>
    		<Divider />
    	</div>
    );
  }
}

export default Close;
