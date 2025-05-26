import * as React from 'react';
import { Tag, DatePicker } from 'antd';
import moment from 'moment';
import styles from './index.module.less';
const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const dateFormats = 'YYYY-MM-DD';
const { RangePicker } = DatePicker;
class SearchTags extends React.Component {
  getTimes(attrName, attrValue) {
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
      case '6m':
        startTime = moment().subtract(5, 'months').startOf('month');
        endTime = moment().endOf('month');
        break;
      case '3m':
        startTime = moment().subtract(2, 'months').startOf('month');
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
  }

  handleClickTag(type, attrName, attrValue) {
    const { handleChange = () => {} } = this.props;
    switch (type) {
      case 'time':
        this.getTimes(attrName, attrValue);
        break;
      case 'list':
        handleChange({ [attrName]: attrValue });
        break;
      default:
        break;
    }
  }

  createSelfTime(type, tagKey) {
    const isTime = ['time'].filter(item => item === type).length > 0;
    if (!isTime || tagKey !== 'self') {
      return null;
    }
    const { handleChange = () => {} } = this.props;
    return (
      <span style={{ width: '240px', display: 'inline-block' }}>
        <RangePicker
          onChange={(date, dateString) => {
            handleChange(
              {
                startTime: dateString[0] ? `${dateString[0]} 00:00:00` : null,
                endTime: dateString[1] ? `${dateString[1]} 23:59:59` : null,
              },
              false
            );
          }}
          format={dateFormats}
        />
      </span>
    );
  }

  render() {
    const { attrName = '', type = '', tagList = [], tagKey = '' } = this.props;
    return (
      <div className={styles.main}>
        {tagList.map(({ value, name = '' }) => {
          const className = tagKey === value ? `checkedTag` : `uncheckedTag`;
          return (
            <Tag key={value} className={className} onClick={() => this.handleClickTag(type, attrName, value)}>
              {name}
            </Tag>
          );
        })}
        {this.createSelfTime(type, tagKey)}
      </div>
    );
  }
}

export default SearchTags;
