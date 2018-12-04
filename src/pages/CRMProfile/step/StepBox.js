import { Tabs } from 'antd';
import React, { PureComponent ,Component, Suspense} from 'react';
import styles from './style.less';
import Unqualified from '@/components/Potential/state/Unqualified.js';
import SuccessGuide from '@/components/Potential/state/SuccessGuide.js';
import New from '@/components/Potential/state/New.js';
import Working from '@/components/Potential/state/Working.js';
import Nurturing from '@/components/Potential/state/Nurturing.js';
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
