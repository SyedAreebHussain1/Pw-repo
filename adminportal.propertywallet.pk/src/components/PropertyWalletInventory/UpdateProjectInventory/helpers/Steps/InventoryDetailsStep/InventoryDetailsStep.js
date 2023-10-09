import { Button, Col, Divider, Form, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import { SelectField } from '../../../../../../utils/components/InputFields/SelectField'
import ArrowRight from '../../../../../assest/icon/arrow-right.png'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import TextAreaField from '../../../../../../utils/components/InputFields/TextAreaField'
import NumberField from '../../../../../../utils/components/InputFields/NumberField'
import {
  getLandAreaApi,
  getProjectSubTypesApi,
  getProjectTypesApi,
} from '../../../../../../redux/api/SingleProperty'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useParams } from 'react-router-dom'
import {
  createProjectInventoryStepOneApi,
  getProjectInventoryStepOneApi,
  updateProjectInventoryStepOneApi,
} from '../../../../../../redux/api/Project/ProjectInventory'

const InventoryDetailsStep = ({ next, setSellingPriceState }) => {
  const [markers, setMarkers] = React.useState([])
  const [selectedPlace, setSelectedPlace] = useState({})
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const getProjectInventoryStepOne = useSelector(
    (state) => state.getProjectInventoryStepOne
  )

  const [form] = useForm()

  const dispatch = useDispatch()
  const params = useParams()
  const getProjectTypes = useSelector((state) => state.getProjectTypes)
  const getProjectSubTypes = useSelector((state) => state.getProjectSubTypes)
  const getLandArea = useSelector((state) => state.getLandArea)

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const [state, setState] = useState({
    selectedPropertyType: null,
  })
  useEffect(() => {
    getProjectTypesApi(dispatch, pageLimit)
    getLandAreaApi(dispatch, pageLimit)
  }, [dispatch, pageLimit])

  useEffect(() => {
    if (
      state.selectedPropertyType ||
      getProjectInventoryStepOne?.data?.data?.projectType?.id
    ) {
      getProjectSubTypesApi(
        dispatch,
        state.selectedPropertyType ||
          getProjectInventoryStepOne?.data?.data?.projectType?.id
      )
    }
  }, [
    state.selectedPropertyType ||
      getProjectInventoryStepOne?.data?.data?.projectType?.id,
  ])

  useEffect(() => {
    getProjectInventoryStepOneApi(dispatch, +params.id)
  }, [params.id])
  useEffect(() => {
    if (selectedPlace.address !== '' && selectedPlace.city !== '') {
      form.setFieldsValue({
        location: selectedPlace.address,
        city: selectedPlace.city,
        address: selectedPlace.address,
      })
    }
  }, [selectedPlace])

  function onSuccess() {
    next()
  }
  function onFinish(values) {
    const body = {
      // propertyWalletProjectId: Number(params.id),
      projectTypeId: values.propertyType,
      projectSubTypeId: values.category,
      // NOC: values.nocApproved === "yes" ? true : false,
      landSize: Number(values.plotMeasuring),
      landAreaId: values.plotUnits,
      description: values.description,
      price: Number(values.sellingPrice),
      noOfUnit: Number(values.noOfUnit),
    }
    // if (createProjectInventoryStepOne?.data !== null) {
    updateProjectInventoryStepOneApi(
      dispatch,
      body,
      onSuccess,
      getProjectInventoryStepOne?.data?.data?.id
    )
    // setSellingPriceState(body.price)
    //   return;
    // }
    // createProjectInventoryStepOneApi(dispatch, body, onSuccess);
  }
  useEffect(() => {
    form.setFieldsValue({
      propertyType: getProjectInventoryStepOne?.data?.data?.projectType?.id,
      category: getProjectInventoryStepOne?.data?.data?.projectSubType?.id,
      // nocApproved: getProjectInventoryStepOne?.data?.data?.NOC ? "yes" : "no",
      plotMeasuring: getProjectInventoryStepOne?.data?.data?.landSize,
      plotUnits: getProjectInventoryStepOne?.data?.data?.landArea?.id,
      description: getProjectInventoryStepOne?.data?.data?.description,
      sellingPrice: getProjectInventoryStepOne?.data?.data?.price,
      noOfUnit: getProjectInventoryStepOne?.data?.data?.noOfUnit,
    })
  }, [getProjectInventoryStepOne])
  return (
    <Form
      name="add-single-property-step-one"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <SectionContainer
        title={'Property Type'}
        subtitle={'Provide the type of property and subtype of Property'}
      >
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Property Type</InputLabel>
            <SelectField
              name="propertyType"
              options={getProjectTypes?.data?.data?.items?.map((item, i) => ({
                label: item.title,
                value: item.id,
              }))}
              onChange={(val) => {
                form.resetFields(['category'])
                setState((prev) => ({
                  ...prev,
                  selectedPropertyType: val,
                }))
              }}
            />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Category</InputLabel>
            <SelectField
              name="category"
              options={getProjectSubTypes?.data?.data?.map((item, i) => ({
                label: item.title,
                value: item.id,
              }))}
            />
          </Col>
          {/* <Col lg={8} xs={24}>
            <InputLabel>NOC Approved</InputLabel>
            <SelectField
              name="nocApproved"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </Col> */}
        </Row>
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Plot Measuring</InputLabel>
            <NumberField name={'plotMeasuring'} />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Plot Units</InputLabel>
            <SelectField
              name="plotUnits"
              options={getLandArea?.data?.data?.items?.map((item, i) => ({
                label: item.title,
                value: item.id,
              }))}
            />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Description</InputLabel>
            <TextAreaField name={'description'} />
          </Col>
        </Row>
      </SectionContainer>
      <Divider />

      <SectionContainer
        title="Pricing and Commission"
        subtitle="Set the pricing of inventory and staff commision"
      >
        <Row gutter={16}>
          <Col xs={24} lg={8}>
            <InputLabel>Selling Price</InputLabel>
            <NumberField name="sellingPrice" />
          </Col>
          {/* <Col xs={24} lg={8}>
            <InputLabel>Installment Commission</InputLabel>
            <NumberField name="installmentCommission" />
          </Col>
          <Col xs={24} lg={8}>
            <InputLabel>Cash Commission</InputLabel>
            <NumberField name="cashCommission2" />
          </Col> */}
          {/* <Col xs={24} lg={8}>
            <InputLabel>Minimum Price</InputLabel>
            <NumberField name={"minimumPrice2"} />
          </Col> */}
          {/* <Row gutter={16}> */}
          <Col xs={24} lg={8}>
            <InputLabel>No of Units</InputLabel>
            <NumberField name={'noOfUnit'} />
          </Col>
          {/* </Row> */}
        </Row>
      </SectionContainer>
      <Divider />
      {/* <SectionContainer
        title="Location Details"
        subtitle="Provide the location with address"
      >
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <InputLabel>Address</InputLabel>
            <TextField name="address" />
          </Col>
          <Col xs={24} lg={12}>
            <InputLabel>City</InputLabel>
            <TextField name="city" />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <InputLabel>Location</InputLabel>
            <TextField name="location" />
          </Col>
          <Col xs={24} lg={12}>
            <SelectLatLongMap
              markers={markers}
              setMarkers={setMarkers}
              setSelectedPlace={setSelectedPlace}
            />
          </Col>
        </Row>
      </SectionContainer> */}
      <div className="flex gap-[20px] justify-end pt-[35px]">
        <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          //   disabled={current === 0}
        >
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          // disabled={current === steps.length - 1}
          // onClick={next}
          loading={createProjectInventoryStepOne.loading}
          htmlType="submit"
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default InventoryDetailsStep
