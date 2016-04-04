import {
  ADD_NEW_LABEL,
  REMOVE_LABEL,
  DELETE_LABEL,
  SET_LABEL,
  REMOVE_LABEL_FROM_ALL_LETTERS
} from '../constants/AppConst'

export const setLabel = (title) => ({
	type: SET_LABEL,
	title
})

export const addNewLabel = (title) => ({
	type: ADD_NEW_LABEL,
	title
})

export const removeLabel = (title) => ({
	type: REMOVE_LABEL,
	title
})

export const deleteLabel = (index) => ({
	type: DELETE_LABEL,
	index
})

export const removeLabelFromAllLetters = (title) => ({
	type: REMOVE_LABEL_FROM_ALL_LETTERS,
	title
})