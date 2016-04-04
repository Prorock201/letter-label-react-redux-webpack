import React, { PropTypes, Component } from 'react'

export default class Label extends Component {
  addNewLabelToList(label,e) {
    var newTitle = e.target.value;
    var {addNewLabel} = this.props.LabelsActions;
    if ((newTitle).length > 0) {
      if (e.charCode == 13) {
        if(this.props.labels.every(label=>(label.title !== newTitle))) {
          addNewLabel(newTitle);
          e.target.value = '';
        }
      }
    }
  }
  setLabel(label) {
    let {setLabel} = this.props.LabelsActions;
    setLabel(label);
  }
  removeLabel(label) {
    let {removeLabel} = this.props.LabelsActions;
    removeLabel(label);
  }
  deleteLabel(index,title) {
    let {deleteLabel, removeLabelFromAllLetters} = this.props.LabelsActions;
    deleteLabel(index);
    removeLabelFromAllLetters(title);
  }
  render() {
    const {labels} = this.props
    return (
      <div className='col-md-4'>
        <input type='text' className='form-control' onKeyPress={this.addNewLabelToList.bind(this,event)} placeholder='Add new label' ref='newTask' />
        <table className='table table-hover'>
          <tbody>
            {labels.map((label,index) => (
              <tr key={label.id} style={{cursor: 'pointer'}}>
                <td><i className='close' onClick={this.removeLabel.bind(this,label.title)}>&times;</i></td>
                <td onClick={this.setLabel.bind(this,label.title)}>{label.title}</td>
                <td><input type='button' value='Delete' onClick={this.deleteLabel.bind(this,index,label.title)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
Label.propTypes = {
  labels: PropTypes.array.isRequired
}