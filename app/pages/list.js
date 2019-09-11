import React from 'react';
import { connect } from 'react-redux';

const List = props => (
  <ul>
    { props.list.map(item => <li key={item}>{item}</li>) }
  </ul>
)

/**
 * 通过connect将redux中的数据传递进入组件
 */
function mapStateProps(state) {
  return { ...state.list }
}

export default connect(mapStateProps)(List);