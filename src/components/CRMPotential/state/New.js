import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class New extends PureComponent {

  render() {
    return (
    	<div className={styles.NewBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>关键字段</strong></Divider>
    		<span className={styles.NewSpan}>公司</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>网址</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>行业</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>职员数</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    	</div>
    );
  }
}

export default New;
