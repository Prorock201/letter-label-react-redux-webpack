import { SELECT_LETTER, CHECK_LABEL } from '../constants/AppConst'

export const selectLetter = (id) => ({
	type: SELECT_LETTER,
	id
})

export function checkLabel() {
  return (dispatch, getState) => {
		dispatch({
			type: CHECK_LABEL,
			letters: getState().letters
		})
  }
}