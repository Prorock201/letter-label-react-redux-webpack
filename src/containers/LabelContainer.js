import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Label from '../components/Label'
import * as LabelsActions from '../actions/LabelsActions'

class LabelContainer extends Component {
  render() {
    return <Label {...this.props} />
  }
}
function mapStateToProps(state) {
  return {
    labels: state.labels
  }
}
function mapDispatchToProps(dispatch) {
  return {
    LabelsActions: bindActionCreators(LabelsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelContainer)