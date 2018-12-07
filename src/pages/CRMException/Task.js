import React from "react";
import styles from './style.less';
import { Avatar,Input,Divider  } from 'antd';

const Search = Input.Search;
const lists = {
  "lists": [{
    "title": "Follow Up with Howard on timing (Sample)",
    "name": "Jones (Sample) Howard",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-7"
  }, {
    "title": "Sync Up (Sample)",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }, {
    "title": "title1",
    "name": "jones",
    "related": "Acme - 1,200 Widgets (Sample)",
    "time": "2018-12-04"
  }]
}
class Task extends React.Component {
  render() {
        let list = lists.lists.map((item,index)=>
            <div key={index} className={styles.listMapDIV}>
              <span className={styles.listMapDIVLeft}>{item.title}</span><br />
              <span className={styles.listMapDIVRight}>{item.name}</span><br />
              <span className={styles.listMapDIVLeft}>{item.related}</span>
              <span className={styles.listMapDIVRight}>{item.time}</span>
            </div>
          );
    return (
      <div className={styles.Box}>
        <div className={styles.list}>
          <Avatar className={styles.Avatar} shape="square" size={32} icon="user" /><strong className={styles.AvatarSpan}>最近查看</strong>
          <Search className={styles.Search}  placeholder="搜索此列表..."  onSearch={value => console.log(value)}/>
          <span className={styles.lateyLook}>最近查看</span>
          <Divider className={styles.lateyLook} />
          <div className={styles.listMap}>
            {list}
          </div>        
        </div>
        <div className={styles.content}>

        </div>
      </div>
    );
  }
}

export default Task;
