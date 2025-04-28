import { Tag, DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './index.less';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const dateFormatYmd = 'YYYY-MM-DD';
const { RangePicker } = DatePicker;

class SearchTags extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    attrName: PropTypes.string,
    type: PropTypes.string,
    tagKey: PropTypes.string || PropTypes.array || PropTypes.number,
    tagList: PropTypes.array,
    seTime: PropTypes.array,
    handleChange: PropTypes.func,
  };
  state = {
    startTime: '',
    endTime: '',
  };

  getTimes = (attrName, attrValue) => {
    const { handleChange = () => {} } = this.props;
    let startTime = null;
    let endTime = null;
    let execQuery = true;
    switch (attrValue) {
      case 'all':
        startTime = null;
        endTime = null;
        break;
      case 'yd':
        startTime = moment().subtract(1, 'days').startOf('day');
        endTime = moment().subtract(1, 'days').endOf('day');
        break;
      case 'td':
        startTime = moment().startOf('day');
        endTime = moment().endOf('day');
        break;
      case 'tw':
        startTime = moment().startOf('week');
        endTime = moment().endOf('week');
        break;
      case 'yw':
        startTime = moment().subtract(1, 'weeks').startOf('week');
        endTime = moment().subtract(1, 'weeks').endOf('week');
        break;
      case 'tm':
        startTime = moment().startOf('month');
        endTime = moment().endOf('month');
        break;
      case 'ym':
        startTime = moment().subtract(1, 'months').startOf('month');
        endTime = moment().subtract(1, 'months').endOf('month');
        break;
      case 'ty':
        startTime = moment().startOf('year');
        endTime = moment().endOf('year');
        break;
      case 'self':
        execQuery = false;
        break;
      default:
        break;
    }
    handleChange(
      {
        [attrName]: attrValue,
        startTime: startTime ? startTime.format(dateFormat) : '',
        endTime: endTime ? endTime.format(dateFormat) : '',
      },
      execQuery
    );
  };

  handleClickTag = (type, attrName, attrValue) => {
    const { handleChange = () => {} } = this.props;
    switch (type) {
      case 'time':
      case 'notag-time':
        this.getTimes(attrName, attrValue);
        break;
      case 'list':
      case 'dot-list':
        handleChange({ [attrName]: attrValue });
        break;
      default:
        break;
    }
  };

  createSelfTime = (type, tagKey) => {
    const isTime = ['time', 'notag-time'].filter(item => item === type).length > 0;
    if (!isTime || tagKey !== 'self') {
      return null;
    }
    const { seTime: [startTime = '', endTime = ''] = [], attrName = '', handleChange = () => {} } = this.props;

    return (
      <RangePicker
        value={[startTime ? moment(startTime) : null, endTime ? moment(endTime) : null]}
        onChange={(date, dateString) => {
          handleChange(
            {
              [attrName]: tagKey,
              startTime: dateString[0] ? `${dateString[0]} 00:00:00` : '',
              endTime: dateString[1] ? `${dateString[1]} 23:59:59` : '',
            },
            false
          );
        }}
        format={dateFormatYmd}
        className={styles.selfTime}
      />
    );
  };

  tagIsChecked = (tagKey, tagValue) => {
    switch (Object.prototype.toString.call(tagKey)) {
      case '[object String]': {
        if (!tagKey) {
          return tagKey === tagValue;
        }
        return tagKey.split(',').some(ele => ele === tagValue);
      }
      case '[object Array]':
        return tagKey.some(ele => ele === tagValue);
      default:
        return tagKey === tagValue;
    }
  };

  getTagItem = ({ value, name = '' } = {}) => {
    const { attrName = '', type = '', tagKey = '' } = this.props;
    const className = this.tagIsChecked(tagKey, value) ? `checkedTag` : `uncheckedTag`;
    return (
      <div key={value} className={styles.tagWrapper}>
        <Tag key={value} className={className} onClick={() => this.handleClickTag(type, attrName, value)}>
          {name}
        </Tag>
      </div>
    );
  };

  getDotItem = ({ value, name = '' } = {}, showDot = true) => {
    const { attrName = '', type = '', tagKey = '' } = this.props;
    const className = this.tagIsChecked(tagKey, value) ? styles.checkedDot : styles.uncheckedDot;
    return (
      <div key={value} className={className} onClick={() => this.handleClickTag(type, attrName, value)}>
        <span className={showDot ? styles.dot : ''} />
        <span>{name}</span>
      </div>
    );
  };

  render() {
    const { title = '', type = '', tagList = [], tagKey = '' } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.label}>{title ? `${title}：` : ''}</div>
        <div className={styles.items}>
          {tagList.map(item => {
            switch (type) {
              case 'time':
              case 'list':
                return this.getTagItem(item);
              case 'dot-list':
                return this.getDotItem(item, true);
              case 'notag-time':
                return this.getDotItem(item, false);
              default:
                return '';
            }
          })}
          {this.createSelfTime(type, tagKey)}
        </div>
      </div>
    );
  }
}

export default SearchTags;
