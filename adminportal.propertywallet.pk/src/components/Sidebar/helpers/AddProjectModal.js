import React, { useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import ArrowRight from '../../assest/icon/arrow-right.png'
import ProjectOption from './ProjectOption'
import { useNavigate } from 'react-router-dom'

const AddProjectModal = ({ visible, toggle, getRoutes }) => {
  const [selectedOption, setSelectedOption] = useState('project')

  const navigate = useNavigate()
  function handleNavigate() {
    if (selectedOption === 'project') {
      navigate('property-wallet-inventory/project')
      toggle()
    } else if (selectedOption === 'property') {
      navigate('property-wallet-inventory/single-property')
      toggle()
    }
  }
  return (
    <Modal
      // style={{  }}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
    >
      <div className="flex flex-col justify-center items-center pt-[50px] pb-[25px]">
        <div className="text-center pb-[40px]">
          <h2 className=" text-[#292D35] font-semibold text-lg">
            Choose the Property Type
          </h2>
          <p className="text-[#667085] text-[15px] font-medium">
            Select the property type that you want to add in inventory.
          </p>
        </div>
        <div className="flex gap-[14px] mb-[40px]">
          {getRoutes?.data?.routes
            .map((val) => val.key)
            .includes('property-wallet-inventory/project') && (
            <ProjectOption
              title="Project"
              icon={
                'M9.9401 0.0154919C9.68586 0.00713452 9.43276 0.0275642 9.1849 0.0766898C8.68916 0.174941 8.21678 0.386285 7.80599 0.70169C6.98352 1.33266 6.5 2.31011 6.5 3.34752V15.3475H4.16667C2.15 15.3475 0.5 16.9975 0.5 19.0142V25.6809C0.5 26.2329 0.948 26.6809 1.5 26.6809H12.1667H20.8333H21.8333H27.5C28.052 26.6809 28.5 26.2329 28.5 25.6809V14.3475C28.5 12.3309 26.85 10.6809 24.8333 10.6809H21.8333V5.68086C21.8333 4.17854 20.8179 2.85308 19.3672 2.46211L10.7005 0.128773C10.4498 0.0609936 10.1944 0.0238492 9.9401 0.0154919ZM9.87891 2.01549C9.98064 2.01837 10.0814 2.03321 10.1797 2.05976L18.8464 4.3931C19.429 4.55012 19.8333 5.07784 19.8333 5.68086V24.6809H13.1667V19.0142C13.1667 16.9975 11.5167 15.3475 9.5 15.3475H8.5V3.34752C8.5 2.94227 8.70057 2.53532 9.02344 2.28763C9.26425 2.10273 9.5737 2.00686 9.87891 2.01549ZM11.1667 6.01419C10.7987 6.01419 10.5 6.31286 10.5 6.68086V8.01419C10.5 8.38219 10.7987 8.68086 11.1667 8.68086H12.5C12.868 8.68086 13.1667 8.38219 13.1667 8.01419V6.68086C13.1667 6.31286 12.868 6.01419 12.5 6.01419H11.1667ZM15.8333 6.01419C15.4653 6.01419 15.1667 6.31286 15.1667 6.68086V8.01419C15.1667 8.38219 15.4653 8.68086 15.8333 8.68086H17.1667C17.5347 8.68086 17.8333 8.38219 17.8333 8.01419V6.68086C17.8333 6.31286 17.5347 6.01419 17.1667 6.01419H15.8333ZM11.1667 10.6809C10.7987 10.6809 10.5 10.9795 10.5 11.3475V12.6809C10.5 13.0489 10.7987 13.3475 11.1667 13.3475H12.5C12.868 13.3475 13.1667 13.0489 13.1667 12.6809V11.3475C13.1667 10.9795 12.868 10.6809 12.5 10.6809H11.1667ZM15.8333 10.6809C15.4653 10.6809 15.1667 10.9795 15.1667 11.3475V12.6809C15.1667 13.0489 15.4653 13.3475 15.8333 13.3475H17.1667C17.5347 13.3475 17.8333 13.0489 17.8333 12.6809V11.3475C17.8333 10.9795 17.5347 10.6809 17.1667 10.6809H15.8333ZM15.8333 15.3475C15.4653 15.3475 15.1667 15.6462 15.1667 16.0142V17.3475C15.1667 17.7155 15.4653 18.0142 15.8333 18.0142H17.1667C17.5347 18.0142 17.8333 17.7155 17.8333 17.3475V16.0142C17.8333 15.6462 17.5347 15.3475 17.1667 15.3475H15.8333ZM23.8333 15.3475H25.1667C25.5347 15.3475 25.8333 15.6462 25.8333 16.0142V17.3475C25.8333 17.7155 25.5347 18.0142 25.1667 18.0142H23.8333C23.4653 18.0142 23.1667 17.7155 23.1667 17.3475V16.0142C23.1667 15.6462 23.4653 15.3475 23.8333 15.3475ZM3.83333 20.0142H5.16667C5.53467 20.0142 5.83333 20.3129 5.83333 20.6809V22.0142C5.83333 22.3822 5.53467 22.6809 5.16667 22.6809H3.83333C3.46533 22.6809 3.16667 22.3822 3.16667 22.0142V20.6809C3.16667 20.3129 3.46533 20.0142 3.83333 20.0142ZM8.5 20.0142H9.83333C10.2013 20.0142 10.5 20.3129 10.5 20.6809V22.0142C10.5 22.3822 10.2013 22.6809 9.83333 22.6809H8.5C8.132 22.6809 7.83333 22.3822 7.83333 22.0142V20.6809C7.83333 20.3129 8.132 20.0142 8.5 20.0142ZM15.8333 20.0142C15.4653 20.0142 15.1667 20.3129 15.1667 20.6809V22.0142C15.1667 22.3822 15.4653 22.6809 15.8333 22.6809H17.1667C17.5347 22.6809 17.8333 22.3822 17.8333 22.0142V20.6809C17.8333 20.3129 17.5347 20.0142 17.1667 20.0142H15.8333ZM23.8333 20.0142H25.1667C25.5347 20.0142 25.8333 20.3129 25.8333 20.6809V22.0142C25.8333 22.3822 25.5347 22.6809 25.1667 22.6809H23.8333C23.4653 22.6809 23.1667 22.3822 23.1667 22.0142V20.6809C23.1667 20.3129 23.4653 20.0142 23.8333 20.0142Z'
              }
              id={'project'}
              onChange={() => setSelectedOption('project')}
              checked={selectedOption === 'project'}
            />
          )}
          {getRoutes?.data?.routes
            .map((val) => val.key)
            .includes('property-wallet-inventory/single-property') && (
            <ProjectOption
              title="Single Property"
              icon={
                'M14.1665 0.0141602C13.9507 0.0141602 13.7349 0.0841289 13.5545 0.223796L4.77197 7.02197C3.55731 7.96264 2.83317 9.44107 2.83317 10.9764V13.4985L5.39046 11.4842C5.7998 11.1622 6.31184 10.9842 6.83317 10.9842C7.3545 10.9842 7.86718 11.1609 8.27718 11.4842L13.1808 15.3488C14.2308 16.1748 14.8332 17.4151 14.8332 18.7524V24.3475C14.8332 24.9642 14.6454 25.5368 14.3254 26.0142H23.8332C24.7525 26.0142 25.4998 25.2662 25.4998 24.3475V10.9764C25.4998 9.44107 24.7757 7.96264 23.561 7.02197L14.7785 0.223796C14.5982 0.0841289 14.3823 0.0141602 14.1665 0.0141602ZM6.83317 12.3175C6.6145 12.3175 6.39505 12.3894 6.21338 12.5324L1.31104 16.3957C0.583702 16.9677 0.166504 17.8271 0.166504 18.7524V24.3475C0.166504 25.2662 0.913837 26.0142 1.83317 26.0142H11.8332C12.7525 26.0142 13.4998 25.2662 13.4998 24.3475V18.7524C13.4998 17.8271 13.0826 16.967 12.3553 16.3957L7.45166 12.5324C7.26999 12.3894 7.05184 12.3175 6.83317 12.3175Z'
              }
              id="property"
              onChange={() => setSelectedOption('property')}
              checked={selectedOption === 'property'}
            />
          )}
        </div>
        <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2"
          onClick={handleNavigate}
        >
          <span>Continue</span>
          <img src={ArrowRight} alt="" />
        </Button>
      </div>
    </Modal>
  )
}

export default AddProjectModal