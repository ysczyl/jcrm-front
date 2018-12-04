import React, { PureComponent} from 'react';
import { Input ,Button,List, Avatar} from 'antd';
import styles from './style.less';

const data = [
  {
    title: 'Ant Design Title 1',
    content:'content1',
  },
  {
    title: 'Ant Design Title 2',
    content:'content12',
  },
  {
    title: 'Ant Design Title 3',
    content:'content123',
  },
  {
    title: 'Ant Design Title 4',
    content:'content1234',
  },
];
class ShareContent extends PureComponent {
  render() {  
    return (
    	<List
    	className={styles.ShareContent}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="http://193.112.92.136/imgs/react.jpg" />}
          title={<a href="#">{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
  />
    );
  }
}

export default ShareContent;
