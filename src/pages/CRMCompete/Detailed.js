import React, { PureComponent ,Component, Suspense} from 'react';
import { connect } from 'dva';
import PageLoading from '@/components/PageLoading';
import { formatMessage, FormattedMessage } from 'umi/locale';
import TopAffix from './topAffix/index.js';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Forms = React.lazy(() => import('./CompeteAll'));
const Detaileds = React.lazy(() => import('./StepForm/Detaileds'));
const Activity = React.lazy(() => import('./StepForm/Activity'));
@connect(({ CRMchart, loading }) => ({
  CRMchart,
  loading: loading.effects['chart/fetch'],
}))
class Detailed extends PureComponent {
  constructor(props){
    super();
    this.state={
      competitorName:'1',
    }
  }
  componentWillMount(){
   this.setState({
        competitorName: this.props.location.state.competitorName //把父组件中的parentText替换为子组件传递的值
          },() =>{
             console.log(this.state.competitorName);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
          });
  }
  render() {
    const { CRMchart, loading } = this.props;
        const {
      visitData,
    } = CRMchart;
    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <TopAffix competitorName={this.state.competitorName} loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={<PageLoading />}>
          <Detaileds loading={loading} visitData={visitData} />
        </Suspense>
        <Suspense fallback={<PageLoading />}>
          <Activity loading={loading} visitData={visitData} />
        </Suspense>
      </GridContent>
    );
  }
}

export default Detailed;
