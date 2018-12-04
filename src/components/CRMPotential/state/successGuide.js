import { Divider  } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';

var from = 'Learn about the lead source before you spend time selling them a product theyre not ready for.Understand your leads level of decision making authority and solution requirements.Determine whether your lead is likely to buy from you.';
class SuccessGuide extends PureComponent {

  render() {
    return (
    	<div className={styles.SuccessGuideBox}>
    		<Divider orientation="left" style={{marginLeft:-20}}><strong>成功指南</strong></Divider>
    		<span className={styles.SuccessGuideTitle}><strong>If your lead has neither the interest nor the authority to purchase from you, mark the lead Unqualified.</strong> </span><br />
    		<pre className={styles.SuccessGuideContent}>{from}</pre>
    	</div>
    );
  }
}

export default SuccessGuide;
