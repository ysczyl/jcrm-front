import { Tabs } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';
import Unqualified from '@/components/business/state/Unqualified.js';
import SuccessGuide from '@/components/business/state/SuccessGuide.js';
import New from '@/components/business/state/New.js';
import Working from '@/components/business/state/Working.js';
import Nurturing from '@/components/business/state/Nurturing.js';
import Close from '@/components/business/state/Close.js';
const TabPane = Tabs.TabPane;
class StepBoxs extends PureComponent {

  render() {
    return (
    	<Tabs type="card" defaultActiveKey="1" size='large' style={{backgroundColor:'white',marginTop:20,borderRadius:5}} >
		    <TabPane style={{backgroundColor:'red'}} className={styles.TabPane} tab={<span className={styles.BoxSpan}>Qualification</span>} key="1">
			    <Unqualified />
			    <SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Needs Analysis</span>} key="2">
		    	<New />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Proposal</span>} key="3">
		    	<Working />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Negotiation</span>} key="4">
		    	<Nurturing />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Closed Lost</span>} key="5">
		    	<Close />
		    	<SuccessGuide />
		    </TabPane>
		</Tabs>
    );
  }
}

export default StepBoxs;
