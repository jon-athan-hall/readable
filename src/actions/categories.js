import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Categories
 */
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

/**
 * Action creators for Categories
 */
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
})

/**
 * Asynchronous action creator that returns a function instead of an object, thanks to thunk.
 * Other action creators are then dispatched from within this function.
 */
export const fetchCategories = () => (dispatch) => (
  ReadableAPI
   .getCategories()
   .then((categories) => {
     dispatch(fetchCategoriesSuccess(categories))
   })
)
