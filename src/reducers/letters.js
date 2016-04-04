import {
	SELECT_LETTER, SET_LABEL,
	REMOVE_LABEL,
	REMOVE_LABEL_FROM_ALL_LETTERS
} from '../constants/AppConst'

const initialState = [
	{
		id: 1,
		title: 'Letter from supervisor',
		active: false,
		labels: []
	},
	{
		id: 2,
		title: 'Letter from wife',
		active: false,
		labels: []
	},
	{
		id: 3,
		title: 'Letter from best friend',
		active: false,
		labels: []
	},
	{
		id: 4,
		title: 'Special offer for you!',
		active: false,
		labels: []
	}
]

export default function letters(state = initialState, action) {
  switch (action.type) {
    case SELECT_LETTER:
      return state.map(letter=>(
				letter.id === action.id ?
				Object.assign({}, letter, {
          active: !letter.active
        }) : 
        letter
      ))
    case SET_LABEL:
			return state.map(letter=>(
				letter.active ?
				Object.assign({}, letter, {
          labels: 
						letter.labels.some(label=>(label === action.title)) ? 
						[...letter.labels] : 
						[...letter.labels, action.title]
        }) : 
        letter
			))
		case REMOVE_LABEL:
			return state.map(letter=>(
				letter.active ?
				Object.assign({}, letter, {
          labels: letter.labels.filter(label=>(label !== action.title))
        }) : 
        letter
			))
		case REMOVE_LABEL_FROM_ALL_LETTERS:
			return state.map(letter=>(
				Object.assign({}, letter, {
          labels: letter.labels.filter(label=>(label !== action.title))
        }) : 
        letter
			))
    default:
      return state
  }
}
