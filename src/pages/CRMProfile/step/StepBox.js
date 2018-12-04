import { Tabs } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';
import Unqualified from '@/components/CRMPotential/state/Unqualified';
import SuccessGuide from '@/components/CRMPotential/state/SuccessGuide';
import New from '@/components/CRMPotential/state/New';
import Working from '@/components/CRMPotential/state/Working';
import Nurturing from '@/components/CRMPotential/state/Nurturing';
const TabPane = Tabs.TabPane;
class StepBox extends PureComponent {

  render() {
    return (
    	<Tabs type="card" defaultActiveKey="1" size='large' style={{backgroundColor:'white',marginTop:20,borderRadius:5}} >
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Unqualified</span>} key="1">
			    <Unqualified />
			    <SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>New</span>} key="2">
		    	<New />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Working</span>} key="3">
		    	<Working />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>Nurturing</span>} key="4">
		    	<Nurturing />
		    	<SuccessGuide />
		    </TabPane>
		    <TabPane className={styles.TabPane} tab={<span className={styles.BoxSpan}>已转换</span>} key="5">没有</TabPane>
		</Tabs>
    );
  }
}

export default StepBox;
