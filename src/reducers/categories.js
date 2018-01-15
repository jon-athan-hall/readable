/**
 * Import actions for Categories
 */
import {
  FETCH_CATEGORIES_SUCCESS
} from '../actions/categories'

/**
 * Reducer for Categories
 */
const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories
    default:
      return state
  }
}

export default categories
