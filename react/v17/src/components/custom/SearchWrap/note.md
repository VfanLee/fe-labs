```jsx
<TreeSelect
  style={{ width: '100%' }}
  treeData={e.treeData}
  value={searchParams.groupId}
  onChange={val => {
    this.setState({ searchParams: { ...searchParams, [e.field]: val } });
  }}
  showSearch
  treeNodeFilterProp="title"
  dropdownStyle={{ maxHeight: 400, overflow: 'auto', maxWidth: 500 }}
  dropdownMatchSelectWidth={false}
  allowClear
  {...e.controlProps}
/>

<Select
  style={{ width: '100%' }}
  options={e.options}
  value={searchParams[e.field]}
  onChange={val => this.setState({ searchParams: { ...searchParams, [e.field]: val } })}
  allowClear
  {...e.controlProps}
/>

import moment from 'moment'
<DatePicker.RangePicker
  style={{ width: '100%' }}
  value={value ? [value[0] !== '' ? moment(value[0]) : '', value[1] !== '' ? moment(value[1]) : ''] : null}
  onChange={(val, dateStr) => this.setState({ searchParams: { ...searchParams, [e.field]: dateStr } })}
  allowClear
  {...e.controlProps}
/>

<Input
  style={{ width: '100%' }}
  value={searchParams[e.field]}
  onChange={evt => {
    this.setState({ searchParams: { ...searchParams, [e.field]: evt.target.value } });
  }}
  allowClear
  {...e.controlProps}
/>
```
