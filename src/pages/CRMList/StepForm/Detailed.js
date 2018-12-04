import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';
import styles from './style.less';
import XQ1 from '@/components/CRMContacts/Xiangxi1';
import XQ2 from '@/components/CRMContacts/Xiangxi2';

const TabPane = Tabs.TabPane;
const Relevant = React.lazy(() => import('./Relevant'));
class Detailed extends PureComponent {
  render() {
    
    return (
       <Tabs defaultActiveKey="1" className={styles.DetailedBox}>
          <TabPane tab={<span><Icon type="apple" />相关</span>} key="1">
              <Relevant />
          </TabPane>
          <TabPane tab={<span><Icon type="android" />详细信息</span>} key="2">
            <XQ1 />
            <XQ2 />
          </TabPane>
      </Tabs>
    );
  }
}

export default Detailed;
