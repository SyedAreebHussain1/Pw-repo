import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, postRequest } from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  addSubscription,
  addSubscriptionFailure,
  addSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/addSubscriptionSlice'
import {
  getAllInventory,
  getAllInventoryFailure,
  getAllInventorySuccess,
} from '../../slices/ManageSubscriptions/getAllInventorySlice'
import {
  getAllSubscription,
  getAllSubscriptionFailure,
  getAllSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/getAllSubscriptionSlice'
import {
  getSubscriptionByTitle,
  getSubscriptionByTitleFailure,
  getSubscriptionByTitleSuccess,
} from '../../slices/ManageSubscriptions/getSubscriptionByTitleSlice'
import {
  getSubscription,
  getSubscriptionFailure,
  getSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/getSubscriptionSlice'

export async function addSubscriptionApi(dispatch, body, onSuccess) {
  dispatch(addSubscription())
  try {
    let res = await postRequest(
      `${API.manageSubscriptions.addSubscription}`,
      body
    )
    dispatch(addSubscriptionSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addSubscriptionFailure(error.response.data))
  }
}

export async function getSubscriptionApi(dispatch, pageLimit) {
  dispatch(getSubscription())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getSubscription}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getSubscriptionSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getSubscriptionFailure(error.response.data))
  }
}

export async function getSubscriptionByTitleApi(dispatch, title, id) {
  dispatch(getSubscriptionByTitle())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getSubscriptionByTitle}/${id}/${title}`
    )
    dispatch(getSubscriptionByTitleSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getSubscriptionByTitleFailure(error.response.data))
  }
}

export async function getAllSubscriptionApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllSubscription())
  try {
    const query = {
      Name: 'search',
      Package: 'search',
      Billing: 'search',
    }
    let res = await getRequest(
      `${API.manageSubscriptions.getAllSubscription}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getAllSubscriptionSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllSubscriptionFailure(error.response.data))
  }
}

export async function getAllInventoryApi(dispatch, id) {
  dispatch(getAllInventory())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getAllInventory}/${id}`
    )
    dispatch(getAllInventorySuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllInventoryFailure(error.response.data))
  }
}
