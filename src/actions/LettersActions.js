import { SELECT_LETTER, MARK_LABEL } from '../constants/AppConst'

export const selectLetter = (id) => ({
	type: SELECT_LETTER,
	id
})

export function checkLabel() {
  return (dispatch, getState) => {
		dispatch({
			type: MARK_LABEL,
			letters: getState().letters
		})
  }
}