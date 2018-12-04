import { Tabs } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';
import Unqualified from '@/components/CRMbusiness/state/Unqualified';
import SuccessGuide from '@/components/CRMbusiness/state/SuccessGuide';
import New from '@/components/CRMbusiness/state/New';
import Working from '@/components/CRMbusiness/state/Working';
import Nurturing from '@/components/CRMbusiness/state/Nurturing';
import Close from '@/components/CRMbusiness/state/Close';
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
