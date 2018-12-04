import React, { PureComponent} from 'react';
import { Tabs, Icon } from 'antd';


const TabPane = Tabs.TabPane;
const Phone = React.lazy(() => import('./Phone'));
const NewPhone = React.lazy(() => import('./NewPhone'));
const NewEvent = React.lazy(() => import('./NewEvent'));

function callback(key) {
  console.log(key);
}

class Tabss extends PureComponent {
  render() {
    
    return (
       <Tabs onChange={callback} type="card">
        <TabPane tab="记录电话" key="1"><Phone /></TabPane>
        <TabPane tab="新建任务" key="2"><NewPhone /></TabPane>
        <TabPane tab="新建事件" key="3"><NewEvent /></TabPane>
      </Tabs>
    );
  }
}

export default Tabss;
