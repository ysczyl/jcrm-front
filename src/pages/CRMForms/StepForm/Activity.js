import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';
import styles from './style.less';
import Tabss from '@/components/CRMCustomer/Activity/Tabs';
import Tabsss from '@/components/CRMCustomer/Chatter/Tabs';
import ShareContent from '@/components/CRMCustomer/Chatter/ShareContent';

const TabPane = Tabs.TabPane;
const Relevant = React.lazy(() => import('./Relevant'));
class Activity extends PureComponent {
  render() {
    
    return (
       <Tabs defaultActiveKey="1" className={styles.ActivityBox}>
          <TabPane tab={<span><Icon type="apple" />活动</span>} key="1">
            <Tabss />
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Chatter</span>} key="2">
            <Tabsss />
            <ShareContent />
          </TabPane>
      </Tabs>
    );
  }
}

export default Activity;
