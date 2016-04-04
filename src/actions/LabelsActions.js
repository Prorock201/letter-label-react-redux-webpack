import {
  ADD_NEW_LABEL,
  REMOVE_LABEL,
  DELETE_LABEL,
  SET_LABEL,
  REMOVE_LABEL_FROM_ALL_LETTERS
} from '../constants/AppConst'

export function setLabel(title) {
	return {
		type: SET_LABEL,
		title
	}
}

export function addNewLabel(title) {
	return {
		type: ADD_NEW_LABEL,
		title
	}
}

export function removeLabel(title) {
	return {
		type: REMOVE_LABEL,
		title
	}
}

export function deleteLabel(index) {
	return {
		type: DELETE_LABEL,
		index
	}
}removeLabelFromAllLetters

export function removeLabelFromAllLetters(title) {
	return {
		type: REMOVE_LABEL_FROM_ALL_LETTERS,
		title
	}
}

// export function clickLabel(label) {
// 	return (dispatch, getState) => ({
// 			type: CLICK_LABEL,
// 			letters: getState().letters
// 		})
// }