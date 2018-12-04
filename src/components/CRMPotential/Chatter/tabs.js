import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';
import styles from './style.less';

const TabPane = Tabs.TabPane;
const Share = React.lazy(() => import('./share'));

function callback(key) {
  console.log(key);
}

class Tabsss extends PureComponent {
  render() {
    
    return (
       <Tabs onChange={callback} type="card">
        <TabPane tab="张贴" key="1"><Share  /></TabPane>
      </Tabs>
    );
  }
}

export default Tabsss;
