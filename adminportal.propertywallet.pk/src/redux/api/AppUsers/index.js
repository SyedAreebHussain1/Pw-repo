import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getAllAppUsers,
  getAllAppUsersFailure,
  getAllAppUsersSuccess,
} from '../../slices/AppUsers/getAllAppUsersSlice'
import {
  getAllAuthUserNoPagination,
  getAllAuthUserNoPaginationFailure,
  getAllAuthUserNoPaginationSuccess,
} from '../../slices/AppUsers/getAllAuthUserNoPaginationSlice'
import {
  getAuthUser,
  getAuthUserFailure,
  getAuthUserSuccess,
} from '../../slices/AppUsers/getAuthUserSlice'

export async function getAllAppUsersApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  range,
  isVerified
) {
  dispatch(getAllAppUsers())
  try {
    const query = {
      Email: 'email',
      Phone: 'phone',
      'Full Name': 'fullName',
      Role: 'roleTitle',
      'Agency Name': 'agencyName',
      'User Code': 'userCode',
    }
    let res = await getRequest(
      `${API.AppUsers.getAllAppUsers}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${
        selectedFilter && search
          ? `&${query[selectedFilter]}=${search}`
          : range &&
            Array.isArray(range) &&
            range.length > 0 &&
            range[0] !== '' &&
            range[1] !== ''
          ? `&startDate=${range[0]}&endDate=${range[1]}`
          : isVerified
          ? `&isVerified=${isVerified === 'Verified' ? 'true' : 'false'}`
          : ''
      }`
    )
    dispatch(getAllAppUsersSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllAppUsersFailure(error.response.data))
  }
}

export async function getAuthUserApi(dispatch, id) {
  dispatch(getAuthUser())
  try {
    let res = await getRequest(`${API.AppUsers.getAuthUser}/${id}`)
    dispatch(getAuthUserSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAuthUserFailure(error.response.data))
  }
}

export async function getAllAuthUserNoPaginationApi(
  dispatch,
  onSuccess,
  search,
  selectedFilter,
  range,
  isVerified
) {
  dispatch(getAllAuthUserNoPagination())
  try {
    const query = {
      Email: 'email',
      Phone: 'phone',
      'Full Name': 'fullName',
      Role: 'roleTitle',
      'Agency Name': 'agencyName',
      'User Code': 'userCode',
    }
    let res = await getRequest(
      `${API.AppUsers.getAllAuthUserNoPagination}${
        selectedFilter && search
          ? `?${query[selectedFilter]}=${search}`
          : range &&
            Array.isArray(range) &&
            range.length > 0 &&
            range[0] !== '' &&
            range[1] !== ''
          ? `?startDate=${range[0]}&endDate=${range[1]}`
          : isVerified
          ? `?isVerified=${isVerified === 'Verified' ? 'true' : 'false'}`
          : ''
      }`
    )
    dispatch(getAllAuthUserNoPaginationSuccess(res.data))
    onSuccess(res.data)
  } catch (error) {
    getError(error)
    dispatch(getAllAuthUserNoPaginationFailure(error.response.data))
  }
}
