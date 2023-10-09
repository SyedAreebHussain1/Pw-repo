import { Button, Col, DatePicker, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import Upload from '../../../utils/components/Upload/Upload'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import {
  getAllMilestonesApi,
  updateMilestoneApi,
} from '../../../redux/api/Milestones'
import { errorMessage } from '../../../utils/message'
import { uploadAdvertisementApi } from '../../../redux/api/Lounge'

const UpdateMilestoneModal = ({ visible, toggle, updateData }) => {
  const dispatch = useDispatch()
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [form] = useForm()
  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const updateMilestone = useSelector((state) => state?.updateMilestone)
  function onCancel() {
    toggle()
    dispatch(clearUploadAdvertisement())
  }
  function onSuccess() {
    dispatch(clearUploadAdvertisement())
    getAllMilestonesApi(dispatch, pageLimit)
    toggle()
  }
  function onFinish(values) {
    const body = {
      milestoneComission: values?.milestoneComission,
      salesRevenue: values?.salesRevenue,
      name: values?.name,
      designUrl: uploadAdvertisement?.data?.data || updateData?.designUrl,
      certificate: values?.certificate,
    }
    if (body) {
      updateMilestoneApi(dispatch, body, onSuccess, updateData?.id)
    } else {
      errorMessage('Design url require')
    }
  }
  useEffect(() => {
    if (backgroundImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', backgroundImage[0])
      uploadAdvertisementApi(dispatch, formData)
    }
  }, [backgroundImage])
  useEffect(() => {
    if (updateData) {
      form.setFieldsValue({
        milestoneComission: updateData?.milestoneComission,
        salesRevenue: updateData?.salesRevenue,
        name: updateData?.name,
        designUrl: updateData?.designUrl,
        certificate: updateData?.certificate,
      })
    }
  }, [])

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Milestone</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
    >
      <Divider />
      <div>
        <div>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row gutter={20}>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Name</InputLabel>
                  <TextField name="name" />
                </div>
                <div>
                  <InputLabel>Mileston Commssion</InputLabel>
                  <NumberField name="milestoneComission" />
                </div>
              </Col>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Sales Revenue</InputLabel>
                  <TextField name="salesRevenue" />
                </div>
              </Col>
            </Row>
            <div>
              <Row gutter={10}>
                <Col lg={12} xs={24}>
                  <Upload
                    name="backgroundImage"
                    files={backgroundImage}
                    setFiles={setBackgroundImage}
                    supportedFileTypes={['png', 'jpg', 'jpeg', 'mp4']}
                    supportedText={'Files Supported  JPG,JPEG,MP4'}
                  />
                </Col>
                <Col lg={12} xs={24}>
                  <div>
                    {updateData?.designUrl &&
                    backgroundImagePreview.length === 0 ? (
                      <div className="relative w-fit">
                        <img
                          src={updateData?.designUrl}
                          alt=""
                          className="h-[185px] object-contain"
                        />
                      </div>
                    ) : (
                      backgroundImagePreview.length > 0 && (
                        <div className="relative">
                          <SingleFilePreviewer
                            imagePreviews={backgroundImagePreview}
                            uploadAdvertisement={
                              uploadAdvertisement?.data?.data
                            }
                            width={241}
                            height={197}
                            deleteMasterFile={deleteBackgroundImage}
                          />
                        </div>
                      )
                    )}
                  </div>
                </Col>
              </Row>
            </div>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                loading={updateMilestone?.loading}
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Edit Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default UpdateMilestoneModal
