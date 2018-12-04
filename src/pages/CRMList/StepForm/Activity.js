import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';
import styles from './style.less';
import Tabss from '@/components/CRMContacts/Activity/Tabs';
import Tabsss from '@/components/CRMContacts/Chatter/Tabs';
import ShareContent from '@/components/CRMContacts/Chatter/ShareContent';

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
