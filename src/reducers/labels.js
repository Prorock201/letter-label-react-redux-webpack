import { ADD_NEW_LABEL, DELETE_LABEL } from '../constants/AppConst'

const initialState = [
	{
		id: 1,
		title: 'Work',
		active: false
	},
	{
		id: 2,
		title: 'Private',
		active: false
	},
	{
		id: 3,
		title: 'Friends',
		active: false
	}
]

let labelId = 3;

export default function labels(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_LABEL:
			return [...state,
				{
					id: ++labelId,
					title: action.title,
					active: false
				}
			]
		case DELETE_LABEL:
			return [...state.slice(0,action.index),...state.slice(action.index+1)]
		default:
			return state
  }
}
