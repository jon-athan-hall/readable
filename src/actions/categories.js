/**
 * Action types for Categories
 */
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

/**
 * Action creators for Categories
 */
export const getAllCategories = (categories) => ({
  type: GET_ALL_CATEGORIES,
  categories
})
