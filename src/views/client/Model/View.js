import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import useInput from '../../../hooks/use-input'
import {
  clientObj,
  clientAttrs,
  grantTypesList,
  responseTypeList,
  tokenEndpointAuthMethodList,
} from './Schema.js'
// import Multiselect from 'multiselect-react-dropdown'
import Select from 'react-select'
import {
  CCol,
  CRow,
  CButton,
  CFormInput,
  CForm,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CButtonGroup,
} from '@coreui/react'
// import formatingHelper from '../../../helpers/formatingHelper'
import { setSubmitData } from 'src/helpers/submit-helper'

const View = (props) => {
  const { data } = props

  const [client, setClient] = useState(clientObj)

  const handleInputChange = (event) => {
    console.log('event.target.name', event.target.name, event.target.value)
    console.log('client', { ...client, [event.target.name]: event.target.value })
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    })
  }
  /** LOAD DATA */
  useEffect(() => {
    // Already load data
    if (!Object.keys(data).length) {
      return
    }
    setClient(data)
  }, [data])

  const submitHandler = (event) => {
    event.preventDefault()
    // console.log('SUMMITTED')
    const submittedData = setSubmitData(clientAttrs, client)
    // console.log('submittedData', submittedData)
    if (!props.paramId) {
      props.onPost(submittedData)
    } else {
      props.onPut(submittedData)
    }
  }

  const buttonGroup = [
    {
      name: 'Back',
      color: 'secondary',
      className: 'secondary',
      onClick: props.onGoBack,
      visible: true,
    },
    {
      name: 'Save',
      color: 'success',
      className: 'success',
      type: 'submit',
      // onClick: props.paramId ? props.onPut : props.onPost,
      visible: true,
    },
    {
      name: 'Delete',
      color: 'danger',
      className: 'danger',
      // type: 'submit',
      onClick: props.onDelete.bind(null, props.paramId),
      visible: true,
    },
  ]

  return (
    <>
      <CCol xs={12}>
        <CForm onSubmit={submitHandler}>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              {buttonGroup.map((btn, idx) => (
                <CButton
                  key={idx}
                  type={btn.type || 'button'}
                  color={btn.color}
                  onClick={btn.onClick}
                  disabled={!btn.visible}
                >
                  {btn.name}
                </CButton>
              ))}
            </CButtonGroup>
          </div>
          <CRow className="mb-4">
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="username">Client Name</CFormLabel>
                <CFormInput
                  id="clientName"
                  name="clientName"
                  value={client.clientName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="clienturi">Client URI</CFormLabel>
                <CFormInput
                  id="clientUri"
                  name="clientUri"
                  value={client.clientUri}
                  onChange={handleInputChange}
                />
              </div>
              {props.paramId && (
                <>
                  <div className="mb-3">
                    <CFormLabel htmlFor="username">Client ID</CFormLabel>
                    <CFormInput
                      id="clientId"
                      name="clientId"
                      value={client.clientId}
                      onChange={handleInputChange}
                      disabled={clientAttrs.clientId.disabled}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="username">Client Secret</CFormLabel>
                    <CFormInput
                      id="clientSecret"
                      name="clientSecret"
                      value={client.clientSecret}
                      onChange={handleInputChange}
                      disabled={clientAttrs.clientSecret.disabled}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="username">Issues At</CFormLabel>
                    <CFormInput
                      id="issuesAt"
                      name="issuesAt"
                      value={client.issuesAt}
                      onChange={handleInputChange}
                      disabled={clientAttrs.issuesAt.disabled}
                    />
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="username">Expired At</CFormLabel>
                    <CFormInput
                      id="expiresAt"
                      name="expiresAt"
                      value={client.expiresAt}
                      onChange={handleInputChange}
                      disabled={clientAttrs.expiresAt.disabled}
                    />
                  </div>
                </>
              )}
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="">Allowed Scope</CFormLabel>
                <CFormSelect
                  id="scope"
                  name="scope"
                  aria-label="Floating label select example"
                  value={client.scope}
                  onChange={handleInputChange}
                >
                  <option value="profile">Proflie</option>
                  {/* (Name, Email, Gender) */}
                  <option value="detail">Detail</option>
                  {/* (Date of Birth, Phone Number, Address) */}
                  <option value="legal">Legal</option>
                  {/* (ID Number, Register Date) */}
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="">Token Endpoint Auth Method</CFormLabel>
                <CFormSelect
                  id="tokenEndpointAuthMethod"
                  name="tokenEndpointAuthMethod"
                  aria-label="Floating label select example"
                  value={client.tokenEndpointAuthMethod}
                  onChange={handleInputChange}
                  options={tokenEndpointAuthMethodList}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="">Allowed Grant Types</CFormLabel>
                <Select
                  isMulti
                  options={grantTypesList}
                  name="grantTypes"
                  defaultValue={grantTypesList[0]}
                  onChange={(value) => {
                    setClient((prev) => ({
                      ...prev,
                      grantTypes: value.map((option) => option.value),
                    }))
                  }}
                  value={
                    client.grantTypes
                      ? client.grantTypes.map((grantType) =>
                          grantTypesList.find((type) => type.value === grantType),
                        )
                      : ''
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="">Allowed Response Types</CFormLabel>
                <Select
                  isMulti
                  options={responseTypeList}
                  name="responseTypes"
                  defaultValue={responseTypeList[0]}
                  onChange={(value) => {
                    setClient((prev) => ({
                      ...prev,
                      responseTypes: value.map((option) => option.value),
                    }))
                  }}
                  value={
                    client.responseTypes
                      ? client.responseTypes.map((responseType) =>
                          responseTypeList.find((type) => type.value === responseType),
                        )
                      : ''
                  }
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Redirect URIs</CFormLabel>
                <CFormTextarea
                  id="redirectUris"
                  name="redirectUris"
                  rows="3"
                  value={client.redirectUris}
                  onChange={handleInputChange}
                />
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CCol>
    </>
  )
}

View.propTypes = {
  paramId: PropTypes.string,
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onPost: PropTypes.func.isRequired,
  onPut: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default View
