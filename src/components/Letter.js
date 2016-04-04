import React, { PropTypes, Component } from 'react'

export default class Letter extends Component {
	selectLetter(id) {
		let {selectLetter} = this.props.LettersActions;
		selectLetter(id);
	}
  render() {
    const {letters} = this.props
    return (
      <div className='col-md-8'>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Check</th>
							<th>Letter Name</th>
							<th>Label</th>
						</tr>
					</thead>
					<tbody>
						{letters.map((letter,index) => (
							<tr key={index}>
								<td><input type='checkbox' checked={letter.active} onChange={this.selectLetter.bind(this,letter.id)} /></td>
								<td>{letter.title}</td>
								<td>
									{letter.labels.map((label,i) => (
										<span key={i} className='label'>{label}</span>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}
Letter.propTypes = {
  letters: PropTypes.array.isRequired
}
