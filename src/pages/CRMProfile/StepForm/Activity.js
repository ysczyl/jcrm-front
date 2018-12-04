import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';
import styles from './style.less';
import Tabss from '@/components/CRMPotential/Activity/Tabs';
import Tabsss from '@/components/CRMPotential/Chatter/Tabs';
import ShareContent from '@/components/CRMPotential/Chatter/ShareContent';
import XQ1 from '@/components/CRMPotential/Xiangxi1';
import XQ2 from '@/components/CRMPotential/Xiangxi2';

const TabPane = Tabs.TabPane;
const Relevant = React.lazy(() => import('./Relevant'));
class Activity extends PureComponent {
  render() {
    
    return (
      <div className={styles.ActivityBigBox}>
       <Tabs defaultActiveKey="1" className={styles.ActivityBox}>
          <TabPane tab={<span><Icon type="apple" />活动</span>} key="1">
            <Tabss />
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Chatter</span>} key="2">
            <Tabsss />
            <ShareContent />
          </TabPane>
            <TabPane tab={<span><Icon type="apple" />详细信息</span>} key="3">
            <XQ1 />
            <XQ2 />
          </TabPane>
      </Tabs>
      </div>
    );
  }
}

export default Activity;
