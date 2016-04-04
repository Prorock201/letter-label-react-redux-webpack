import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Letter from '../components/Letter'
import * as LettersActions from '../actions/LettersActions'

class LetterContainer extends Component {
  render() {
    return <Letter {...this.props} />
  }
}
function mapStateToProps(state) {
  return {
    letters: state.letters
  }
}
function mapDispatchToProps(dispatch) {
  return {
    LettersActions: bindActionCreators(LettersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterContainer)