import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import subscribersColumns from '../../../../../tableColumns/subscribersColumns.json'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import TablePagination from '../../../../../utils/components/TablePagination'

const SubscribersTable = ({
  pageLimit,
  setPageLimit,
  search,
  setSearch,
  selectedFilter,
}) => {
  const [dataSource, setDataSource] = useState([])
  const navigate = useNavigate()
  const getAllFreelancersById = useSelector(
    (state) => state.getAllFreelancersById
  )

  useEffect(() => {
    if (getAllFreelancersById?.data) {
      const data = getAllFreelancersById?.data?.data?.items?.map((item) => {
        return {
          Name: item?.createdByUser?.profile?.fullName,
          address: item?.createdByUser?.profile?.agency?.address || '-',
          agencyName: (
            <span>{item?.createdByUser?.profile?.agency?.agencyName}</span>
          ),
          packages: (
            <span className="rounded-[67px] px-[8px] py-[3px] text-[#292D35]">
              {item?.PwSubPackage?.pwPackage?.title}
            </span>
          ),
          billings: (
            <span className="rounded-[67px] px-[8px] py-[3px] text-[#292D35] bg-[#0000000d]">
              {item?.PwSubPackage?.title}
            </span>
          ),
          subscribeDate: moment(item?.createdAt).format('DD MMMM.YYYY'),
          amount: item?.PwSubPackage?.charges,
        }
      })

      setDataSource(data)
    }
  }, [getAllFreelancersById?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Subscribers
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={subscribersColumns}
            scroll={{ x: true }}
            loading={getAllFreelancersById?.loading}
            pagination={{
              total:
                getAllFreelancersById?.data?.data?.meta?.totalPages *
                getAllFreelancersById?.data?.data?.meta?.itemsPerPage,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default SubscribersTable
