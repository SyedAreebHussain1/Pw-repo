import React, { useEffect } from 'react'
import { Spin } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import Activities from './heplers/Activities'
import ClientDetail from './heplers/ClientDetail'
import backimg from '../../assest/icon/back.png'
import AgenciesAndInventoryDetails from './heplers/AgenciesAndInventoryDetails'
import { useParams } from 'react-router-dom'
import { getAuthUserApi } from '../../../redux/api/AppUsers'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cleargetAuthUser } from '../../../redux/slices/AppUsers/getAuthUserSlice'

const UserDetail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    if (params.id) {
      getAuthUserApi(dispatch, params.id)
    }
  }, [params])

  const getAuthUser = useSelector((state) => state.getAuthUser)

  useEffect(() => {
    return () => {
      dispatch(cleargetAuthUser())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        route={-1}
        titleHeadBtn={backimg}
        title={'User Profile'}
        subTitle={'Details and activities of the user'}
      />
      <Spin spinning={getAuthUser?.loading}>
        <div className="grid grid-cols-1 lg:grid-cols-[30%_minmax(70%,_1fr)] gap-5">
          <ClientDetail getAuthUser={getAuthUser} />
          <AgenciesAndInventoryDetails getAuthUser={getAuthUser} />
          <Activities getAuthUser={getAuthUser} />
        </div>
      </Spin>
    </PageContainer>
  )
}

export default UserDetail
