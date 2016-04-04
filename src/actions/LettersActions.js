import { SELECT_LETTER } from '../constants/AppConst'

export function selectLetter(id) {
	return {
		type: SELECT_LETTER,
		id
	}
}