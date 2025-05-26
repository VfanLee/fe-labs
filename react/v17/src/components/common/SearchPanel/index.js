/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
/* eslint-disable complexity */
/* eslint-disable no-duplicate-case */
import { Button, Checkbox, Col, DatePicker, Input, InputNumber, Row, Select, TreeSelect } from 'antd';
import moment from 'moment';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './index.less';
import SearchTags from '../searchTags/index';
const noop = () => {};
const { Option } = Select;
const { TreeNode } = TreeSelect;
const { RangePicker } = DatePicker;
const dateMode = {
  month: 'YYYY-MM',
  year: 'YYYY',
};
/**
 * 参数：
 * 1.searchItems 查询项集合
 * 2.queryParams 查询参数
 * 3.dicData hbp字典
 */
export default class SearchPanel extends React.PureComponent {
  panelRef = React.createRef();
  state = {
    show: true, // 控制展开收起
    queryParams: {},
    width: '', // 查询面板宽度
    num: '', // 控制一行显示几个
    flag: true,
  };

  componentDidMount() {
    const { queryParams, isUnfold } = this.props;
    this.setState(
      { queryParams: queryParams, show: isUnfold ? false : true, width: this.panelRef.current.offsetWidth - 245 },
      () => {
        if (this.state.width < 1000) {
          this.setState({ num: Math.floor(this.state.width / 300) });
        } else {
          this.setState({ num: Math.floor(this.state.width / 350) });
        }
      }
    );
    window.addEventListener('resize', this.handelResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handelResize);
  }

  handelResize = e => {
    this.setState({ width: this.panelRef.current.offsetWidth - 245 }, () => {
      if (this.state.width < 1000) {
        this.setState({ num: Math.floor(this.state.width / 300) });
      } else {
        this.setState({ num: Math.floor(this.state.width / 350) });
      }
    });
  };
  handleTree = (topNode, pid, gid, typeName, tree) => {
    return topNode.map(v => {
      const children = tree.filter(ele => ele[pid] === v[gid]);
      if (children.length > 0) {
        return (
          <TreeNode key={v[gid]} value={v[gid]} title={v[typeName]}>
            {this.handleTree(children, pid, gid, typeName, tree)}
          </TreeNode>
        );
      }
      return <TreeNode key={v[gid]} value={v[gid]} title={v[typeName]} />;
    });
  };

  handleChange = (name, value) => {
    // const { flag } = this.state;
    if (
      typeof this.props.onChange === 'function' &&
      (name === 'hseSecondLevel' || name === 'business' || name === 'model')
    ) {
      this.props.onChange(name, value);
    }

    if (typeof this.props.onDataChange === 'function' && name === 'checkTimeMonthRange') {
      this.props.onDataChange(name, value);
    }
    if (typeof name !== 'object') {
      this.setState({ queryParams: { ...this.state.queryParams, [name]: value } });
    }
    // if(value !== ""){
    //   if (!value && flag) {
    //     this.setState({ num: this.state.num - 1, flag: false });
    //   } else if (value && !flag) {
    //     this.setState({ num: this.state.num + 1, flag: true });
    //   }
    // }
  };

  reset = (name, value) => {
    const { queryParams } = this.props;
    if (name) {
      this.setState({
        queryParams: { ...this.state.queryParams, [name]: value },
      });
    } else {
      this.setState({
        queryParams: {
          ...queryParams,
          checkTimeMonthRange: [
            moment().startOf('month').format('YYYY-MM-DD'),
            moment().endOf('month').format('YYYY-MM-DD'),
          ],
        },
      });
    }
  };
  changeCheckTime(name, value) {
    if (name) {
      this.setState(
        {
          queryParams: { ...this.state.queryParams, checkTimeMonthRange: value },
        },
        () => {
          this.createMain();
        }
      );
    }
  }

  getFieldsValues = () => {
    return this.state.queryParams || {};
  };

  // 时间只能选择同一年
  disabledDate = (current, name) => {
    const { queryParams } = this.state;
    if ((!queryParams[name][0] && !queryParams[name][1]) || (queryParams[name][0] && queryParams[name][1])) {
      return false;
    }
    let before = null,
      after = null;
    if (queryParams[name][0]) {
      before = moment(queryParams[name][0]);
      after = moment(queryParams[name][0]).endOf('year');
    }
    if (queryParams[name][1]) {
      before = moment(queryParams[name][1]).startOf('year');
      after = moment(queryParams[name][1]);
    }
    return (current && current < before) || (current && current > after);
  };
  // 选择单个变化时的回调
  calendarChange = (date, name) => {
    if (date[0] && !date[1]) {
      this.setState({ queryParams: { ...this.state.queryParams, [name]: [date[0], ''] } });
    } else if (date[1] && !date[0]) {
      this.setState({ queryParams: { ...this.state.queryParams, [name]: ['', date[1]] } });
    }
  };
  onOpenChange = (open, name) => {
    if (open) {
      this.setState({ queryParams: { ...this.state.queryParams, [name]: ['', ''] } });
    } else {
      const { queryParams: query } = this.state;
      const { queryParams } = this.props;
      if (!query[name] || !query[name][0] || !query[name][1]) {
        this.setState({ queryParams: { ...this.state.queryParams, [name]: queryParams[name] } });
      }
    }
  };
  getComp = (item, num) => {
    if (!item) {
      return null;
    }
    const { queryParams = {} } = this.state;
    const { dicData = [], paddingFlag = true, paddingPx = 0 } = this.props;
    const {
      type = '',
      name = '',
      alias = '',
      options = [],
      btns = [],
      others = {},
      btnDivStyle = {},
      singleRow = true,
      isSingle = false,
      defaultValue = undefined,
      execQuery = false,
      treeData = [],
      changeTime = noop,
    } = item;
    if (singleRow) {
      Object.assign(btnDivStyle, { position: 'absolute', top: 10, right: paddingFlag ? 70 : paddingPx });
    } else {
      Object.assign(btnDivStyle, { display: 'inline-block' });
    }
    const value = queryParams[name];

    let comp = null;
    switch (type) {
      case 'TXT':
        comp = (
          <Input
            key={alias}
            style={{ minWidth: '200px' }}
            value={value}
            placeholder={`请选择${item.alias}`}
            onChange={e => this.handleChange(name, e.target.value)}
            {...others}
          />
        );
        break;
      case 'NUM':
        comp = (
          <InputNumber
            key={alias}
            precision={0}
            min={0}
            value={value}
            placeholder={`请选择${item.alias}`}
            onChange={val => this.handleChange(name, val)}
            {...others}
          />
        );
        break;
      case 'DDL':
        // Select组件value初始化时，如果要使placeholder生效，则必须使用undefined
        comp = (
          <Select
            key={alias}
            value={value}
            placeholder={`请选择${item.alias}`}
            onChange={value => this.handleChange(name, value)}
            {...others}
          >
            {dicData.map(({ name, key }) => (
              <Option key={key} value={key}>
                {name}
              </Option>
            ))}
          </Select>
        );
        break;
      case 'COMMON_DDL':
        // 区别于DDL，可自定义下拉选项
        comp = (
          <Select
            key={alias}
            defaultValue={!defaultValue ? undefined : defaultValue}
            value={value}
            style={{ minWidth: '200px' }}
            placeholder={`请选择${item.alias}`}
            onChange={value => this.handleChange(name, value, execQuery)}
            {...others}
          >
            {options.map(({ name, code }) => (
              <Option key={code} value={code}>
                {name}
              </Option>
            ))}
          </Select>
        );
        break;
      case 'DDLM':
        // 可自定义多选下拉选项
        comp = (
          <Select
            key={alias}
            defaultValue={defaultValue}
            style={{ minWidth: '200px' }}
            value={value}
            mode="multiple"
            placeholder={`请选择${item.alias}`}
            onChange={value => this.handleChange(name, value, execQuery)}
            {...others}
            maxTagCount="responsive"
          >
            {options.map(({ name, code }) => (
              <Option key={code} value={code}>
                {name}
              </Option>
            ))}
          </Select>
        );
        break;
      case 'DATE':
        comp = (
          <DatePicker
            key={alias}
            style={{ minWidth: '200px' }}
            placeholder={`请选择${item.alias}`}
            value={value ? moment(value) : null}
            format={dateMode[others?.mode] || 'YYYY-MM-DD'}
            onChange={(date, dateStr) => this.handleChange(name, dateStr)}
            {...others}
          />
        );
        break;
      case 'DATETIME':
        //   日期选择器
        comp = (
          <RangePicker
            key={alias}
            style={{ minWidth: '200px' }}
            value={value ? [value[0] !== '' ? moment(value[0]) : '', value[1] !== '' ? moment(value[1]) : ''] : null}
            format="YYYY-MM-DD"
            onChange={(date, dateStr) => this.handleChange(name, dateStr)}
            {...others}
          />
        );
        break;
      case 'MONTHDATE':
        //   月份日期选择器
        comp = (
          <RangePicker
            key={alias}
            picker="month"
            style={{ minWidth: '200px' }}
            value={value ? [value[0] !== '' ? moment(value[0]) : '', value[1] !== '' ? moment(value[1]) : ''] : null}
            format="YYYY-MM"
            onChange={(date, dateStr) => this.handleChange(name, dateStr)}
            {...others}
          />
        );
        break;
      case 'MONTHDATEDIS':
        //   月份日期选择器
        comp = (
          <RangePicker
            key={alias}
            picker="month"
            style={{ minWidth: '200px' }}
            value={value ? [value[0] !== '' ? moment(value[0]) : '', value[1] !== '' ? moment(value[1]) : ''] : null}
            format="YYYY-MM"
            onChange={(date, dateStr) => this.handleChange(name, dateStr)}
            disabledDate={current => this.disabledDate(current, name)}
            onCalendarChange={date => this.calendarChange(date, name)}
            onOpenChange={open => this.onOpenChange(open, name)}
            {...others}
          />
        );
        break;
      case 'MULTITREE':
        comp = (
          <TreeSelect
            key={alias}
            showSearch
            treeCheckable={true}
            maxTagCount={1}
            maxTagTextLength={5}
            defaultValue={defaultValue}
            treeCheckStrictly={true}
            value={value}
            treeNodeFilterProp="title"
            treeData={treeData}
            // style={{ minWidth: '200px' }}
            placeholder={`请选择${item.alias}`}
            dropdownStyle={{ maxHeight: 400 }}
            onChange={value => this.handleChange(name, value)}
            {...others}
          />
        );
        break;
      case 'TREE':
        comp = (
          <TreeSelect
            key={alias}
            showSearch
            defaultValue={defaultValue}
            value={value}
            treeNodeFilterProp="title"
            treeData={treeData}
            placeholder={`请选择${item.alias}`}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto', maxWidth: 500 }}
            onChange={value => this.handleChange(name, value)}
            {...others}
          />
        );
        break;
      case 'SEARCHTAG':
        comp = (
          <SearchTags
            tagKey={value}
            placeholder={`请选择${item.alias}`}
            handleChange={(values, execQuery) => {
              this.handleChange(values, execQuery);
              changeTime(values, execQuery);
            }}
            {...others}
          />
        );
        break;
      case 'FLHBPDEPT':
        comp = (
          <TreeSelect
            key={alias}
            placeholder={`请选择${item.alias}`}
            value={value ? value : undefined}
            dropdownStyle={{
              maxWidth: (others && others.style && others.style.width) || 220,
              maxHeight: 220,
            }}
            onChange={value => this.handleChange(name, value)}
            {...others}
          >
            {treeData.map((item, index) => {
              return <TreeNode value={item.value} title={item.title} key={item.id} />;
            })}
          </TreeSelect>
        );
        break;
      case 'CHECKBOX':
        comp = (
          <Checkbox.Group
            key={alias}
            value={value ? value : undefined}
            onChange={value => this.handleChange(name, value)}
            {...others}
          >
            <Row>
              {options &&
                options.map(el => {
                  return (
                    <Col key={el.value} span={Math.floor(24 / options.length)}>
                      <Checkbox value={el.value}>{el.name}</Checkbox>
                    </Col>
                  );
                })}
            </Row>
          </Checkbox.Group>
        );
        break;
      case 'btns':
        comp = (
          <div style={btnDivStyle} key={type}>
            {btns.map(({ name, alias, type, icon, handleClick = noop, others = {} }) => {
              if (alias === '重置' || alias === '返回') {
                return (
                  <Button key={name} icon={icon} onClick={() => handleClick(name)} {...others}>
                    {alias}
                  </Button>
                );
              } else {
                return (
                  <Button key={name} type={type} icon={icon} onClick={() => handleClick(name)} {...others}>
                    {alias}
                  </Button>
                );
              }
            })}
          </div>
        );
        break;
      default:
        break;
    }
    if (type === 'btns') {
      return comp;
    }
    if (type === 'NUMS') {
      return (
        <div
          key={alias}
          style={
            isSingle
              ? { marginTop: 6 }
              : { width: `${100 / num}%`, display: 'inline-block', marginTop: 6, paddingLeft: 34 }
          }
        >
          {item.alias.map((i, index) => {
            return (
              <div key={i} style={{ width: index === 0 ? '45%' : '35%', display: 'inline-block' }}>
                <span style={{ width: index === 0 ? 50 : 20 }} className={styles.num} title={i ? i : ''}>
                  {i ? `${alias.length >= 5 ? `${i.substring(0, 5)}...` : `${i}:`}` : ''}
                </span>
                <span style={{ width: `calc(100% - ${index === 0 ? 74 : 30}px)`, display: 'inline-block' }}>
                  <InputNumber
                    key={i}
                    precision={0}
                    min={0}
                    value={value}
                    placeholder={`请选择${i}`}
                    onChange={val => this.handleChange(`range${index}`, val)}
                    {...others}
                  />
                </span>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div
          key={alias}
          style={
            isSingle
              ? { marginTop: 6 }
              : {
                  width: `${100 / num}%`,
                  display: 'inline-flex',
                  marginTop: 6,
                  marginLeft: paddingFlag ? 0 : paddingPx - 4,
                  alignItems: 'center',
                }
          }
        >
          <span className={paddingFlag ? styles.label : styles.noPaddingLabel} title={alias ? alias : ''}>
            {alias ? `${alias.length >= 5 ? `${alias.substring(0, 5)}...` : `${alias}:`}` : ''}
          </span>
          <span style={{ width: 'calc(100% - 100px)', display: 'inline-block' }}>{comp}</span>
        </div>
      );
    }
  };

  getPanelheight = () => {
    return this.panelRef.current.clientHeight;
  };
  createMain = () => {
    const { searchItems = [], onPanelChange } = this.props;
    const { show, num } = this.state;
    let sum = 0;
    return (
      <div className={styles.cmzBody} id="cmzBody" ref={this.panelRef}>
        {searchItems.length - 1 > num ? (
          <div
            className={styles.fold}
            onClick={() => {
              this.setState({ show: !show }, () => {
                onPanelChange && onPanelChange(!show);
              });
            }}
          >
            {show ? (
              <span style={{ color: '#1777ff' }}>
                展开
                <DownOutlined style={{ color: '#1777ff' }} />
              </span>
            ) : (
              <span style={{ color: '#1777ff' }}>
                收起
                <UpOutlined style={{ color: '#1777ff' }} />
              </span>
            )}
          </div>
        ) : null}
        {searchItems.map((item, index) => {
          if (item.type !== 'btns') {
            sum++;
            if (sum > num && show) {
              return null;
            } else {
              return this.getComp(item, num);
            }
          } else if (item.type === 'btns') {
            return this.getComp(item, num);
          }
          return null;
        })}
      </div>
    );
  };

  render = () => this.createMain();
}
