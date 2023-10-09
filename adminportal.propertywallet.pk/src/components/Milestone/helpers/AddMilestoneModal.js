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
import {
  uploadAdvertisementApi,
  createMilestoneApi,
  getAllMilestonesApi,
} from '../../../redux/api/Milestones'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { errorMessage } from '../../../utils/message'

const AddMilestoneModal = ({ visible, toggle }) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const createMilestone = useSelector((state) => state?.createMilestone)
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const [form] = useForm()
  function onCancel() {
    toggle()
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
      designUrl: uploadAdvertisement?.data?.data,
    }
    if (body && body.designUrl !== null) {
      createMilestoneApi(dispatch, body, onSuccess)
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
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Milestone</h3>}
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
                    {backgroundImagePreview.length > 0 && (
                      <div className="relative">
                        <SingleFilePreviewer
                          imagePreviews={backgroundImagePreview}
                          uploadAdvertisement={uploadAdvertisement?.data?.data}
                          width={241}
                          height={197}
                          deleteMasterFile={deleteBackgroundImage}
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                loading={createMilestone?.loading}
                key="1"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Add Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default AddMilestoneModal
