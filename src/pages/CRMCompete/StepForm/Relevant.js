import React, { PureComponent} from 'react';
import { Tabs, Icon,Input ,List, Avatar,Button } from 'antd';
import styles from './style.less';

const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
const data = [
  {
    title: '相关联系人',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <ButtonGroup className={styles.RelevantBtn}>
                <Button>新建联系人</Button>
                <Button>添加关系</Button>
            </ButtonGroup>,
  },
  {
    title: '业务机会',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <Button className={styles.RelevantBtn} href="javascript:;">新建</Button>,
  },
  {
    title: '市场活动影响',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
  },
  {
    title: '合同',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <Button className={styles.RelevantBtn} href="javascript:;">新建</Button>,
  },
    {
    title: '个案',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <Button className={styles.RelevantBtn} href="javascript:;">新建</Button>,
  },
    {
    title: '备注',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <Button className={styles.RelevantBtn} href="javascript:;">新建</Button>,
  },
    {
    title: '文件',
    Avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    href:'https://ant.design',
    button: <Button className={styles.RelevantBtn} href="javascript:;">添加文件</Button>,
  },
];
class Relevant extends PureComponent {
  render() {
    
    return (
      <div>
        <List
        style={{width:'90%',marginLeft:'24px'}}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.Avatar} />}
                title={<div style={{height:30}}><a href={item.href}><strong className={styles.xgTitle}>{item.title}</strong></a>{item.button}</div>}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Relevant;
