import React, { useEffect, useState } from 'react'
import { Col, Divider, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import TextField from '../../../../../../../utils/components/InputFields/TextField'
import {
  calculateAmount,
  calculatePercentage,
} from '../../../../../../../utils/utils'
import CustomTokenAmount from '../../../../../../../utils/components/PaymentPlan/CustomTokenAmount'

const CashSection = ({
  setBody,
  body,
  form,
  setTokenPayment,
  setCashState,
  cashState,
  selectedOptions,
  setSelectedOptions,
}) => {
  const getPropertyWalletInventoryStep3CashPlan = useSelector(
    (state) => state.getPropertyWalletInventoryStep3CashPlan
  )
  const createPrice = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const sellingPrice =
    createPrice?.data?.data?.price || updatePrice?.data?.data?.price
  const [state, setState] = useState({
    token: null,
    discountAmount: null,
    discountPercentage: null,
    spCommissionPercentage: null,
    commissionPercentage: null,
    minimumPrice: null,
  })
  useEffect(() => {
    setBody({
      propertyWalletInventoryId:
        createPrice?.data?.data?.id || updatePrice?.data?.data?.id,
      createPropertyWalletCashPaymentPlanDto: {
        token: Number(Math.round(state.token)),
        discountAmount: Number(Math.round(state.discountAmount)),
        discountPercentage: Number(Math.round(state.discountPercentage)),
        spCommissionPercentage: Number(
          Math.round(state.spCommissionPercentage)
        ),
        commissionPercentage: Number(Math.round(state.commissionPercentage)),
        minimumPrice: Number(Math.round(sellingPrice - state.discountAmount)),
      },
    })
  }, [state, updatePrice, createPrice, sellingPrice])

  useEffect(() => {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
  }, [state.discountAmount, createPrice, updatePrice])

  useEffect(() => {
    const discountAmount = calculateAmount(
      sellingPrice,
      getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
        ?.discountPercentage
    )
    const minimumPrice = sellingPrice - discountAmount
    form.setFieldsValue({
      discountAmount: discountAmount,
      minimumPrice: minimumPrice,
    })
    // setState((prev) => ({
    //   ...prev,
    //   discountAmount:
    //     discountAmount,
    //   minimumPrice: minimumPrice,
    // }))

    setCashState({
      minimumPrice: minimumPrice,
      discountAmount: discountAmount,
    })

    // const discountAmount =
    //   calculateAmount(
    //     sellingPrice,
    //     state?.discountPercentage
    //   )
    // const minimumPrice = sellingPrice - discountAmount
    // form.setFieldsValue({
    //   discountAmount:
    //     discountAmount,
    //   minimumPrice: minimumPrice,
    // })
    // setCashState({
    //   minimumPrice: minimumPrice,
    //   discountAmount: discountAmount
    // })
    // setState((prev) => ({
    //   ...prev,
    //   discountAmount:
    //     discountAmount,
    //   minimumPrice: minimumPrice,
    // }))
  }, [sellingPrice, getPropertyWalletInventoryStep3CashPlan?.data?.data])

  return (
    <>
      <SectionContainer
        title="Token Payment"
        subtitle="Enter the token amount for the Property"
      >
        <Row>
          <Col xs={24} lg={24}>
            {
              <CustomTokenAmount
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                optionsPrev={getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan?.propertyWalletCashToken?.map(
                  (item) => item.token
                )}
                dep={getPropertyWalletInventoryStep3CashPlan?.data || []}
              />
            }
          </Col>
        </Row>
      </SectionContainer>
      <Divider />
      <SectionContainer title="Cash" subtitle="Provide the information of cash">
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <InputLabel>Discount</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={7}>
                <NumberField
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('discountPercentage', e.target.value)
                    }
                    const calculatedAmount = calculateAmount(
                      sellingPrice,
                      Number(e.target.value)
                    )

                    form.setFieldsValue({
                      discountAmount: calculatedAmount,
                    })
                    setState((prev) => ({
                      ...prev,
                      discountAmount: calculatedAmount,
                      discountPercentage: Number(e.target.value),
                    }))
                  }}
                  placeholder="Percentage"
                  name="discountPercentage"
                />
              </Col>
              <Col xs={24} lg={12}>
                <NumberField
                  placeholder="Amount"
                  name="discountAmount"
                  onChange={(e) => {
                    if (Number(e.target.value) > sellingPrice) {
                      e.target.value = sellingPrice
                      form.setFieldValue('discountAmount', e.target.value)
                    }
                    form.setFieldsValue({
                      discountPercentage: calculatePercentage(
                        sellingPrice,
                        Number(e.target.value)
                      ),
                    })

                    setState((prev) => ({
                      ...prev,
                      discountAmount: Number(e.target.value),
                    }))
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <InputLabel>Commision</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={7}>
                <NumberField
                  placeholder="Percentage"
                  name="commissionPercentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('commissionPercentage', e.target.value)
                    }
                    const calculatedAmount = calculateAmount(
                      sellingPrice,
                      Number(e.target.value)
                    )
                    form.setFieldsValue({
                      // commissionAmount: calculatedAmount
                    })
                    setState((prev) => ({
                      ...prev,
                      // commissionAmount: calculatedAmount
                      commissionPercentage: Number(e.target.value),
                    }))
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <InputLabel>Sale Point Commision</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={20}>
                <NumberField
                  placeholder="Percentage"
                  name="spCommissionPercentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'spCommissionPercentage',
                        e.target.value
                      )
                    }
                    setState((prev) => ({
                      ...prev,
                      // commissionAmount: calculatedAmount
                      spCommissionPercentage: Number(e.target.value),
                    }))
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={10}>
            <InputLabel>Minimum Price</InputLabel>
            <NumberField disabled name="minimumPrice" />
          </Col>
        </Row>
      </SectionContainer>
    </>
  )
}

export default CashSection