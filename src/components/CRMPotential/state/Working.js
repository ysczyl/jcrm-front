import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = '111';
class Working extends PureComponent {

  render() {
    return (
    	<div className={styles.NewBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>关键字段</strong></Divider>
    		<span className={styles.NewSpan}>职务</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>电子邮件</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>手机</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    		<span className={styles.NewSpan}>电话</span>
    		<span className={styles.NewSpanContent}>{from}</span>
    		<Divider className={styles.NewDivider} />
    	</div>
    );
  }
}

export default Working;
