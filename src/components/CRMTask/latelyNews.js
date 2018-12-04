import { List, Avatar } from 'antd';

const data = [
  {
    title: 'JCRM 1 rtyvubunjkmiytbunuj',
  },
  {
    title: 'JCRM 2 asfasfAfa',
  },
  {
    title: 'JCRM 3sfasfaasgas',
  },
  {
    title: 'JCRM 4ggasgrsvwvwevwevwsev',
  },
];
class LatelyNews extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={{marginLeft:'24px'}}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="http://193.112.92.136/imgs/CRM/bg-1.jpg" />}
                title={<a href="#">{item.title}</a>}
        />
      </List.Item>)}
      />
      </div>
    );
  }
}

export default LatelyNews;
