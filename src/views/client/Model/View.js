import React, { useEffect, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import useInput from '../../../hooks/use-input'
import { clientObj, clientAttrs } from './Schema.js'
import Multiselect from 'multiselect-react-dropdown'
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
import formatingHelper from '../../../helpers/formatingHelper'

const View = (props) => {
  const { data } = props

  const [client, setClient] = useState(clientObj)

  const handleInputChange = (event) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    })
  }

  const fetchData = useCallback((data) => {
    const clientMetadata = JSON.parse(data['_client_metadata'])
    const result = {}
    for (const key in clientAttrs) {
      // get from data
      if (data.hasOwnProperty(clientAttrs[key].key)) {
        switch (clientAttrs[key].type) {
          case 'date': {
            result[key] = formatingHelper.timestampToDate(data[clientAttrs[key].key])
            break
          }
          case 'list': {
            // result[key] = data[clientAttrs[key].key]
            break
          }
          case 'number': {
            // result[key] = data[clientAttrs[key].key]
            break
          }
          default:
            result[key] = data[clientAttrs[key].key]
        }
      }
      // get from metaData
      if (clientMetadata.hasOwnProperty(clientAttrs[key].key)) {
        result[key] = clientMetadata[clientAttrs[key].key]
      }
    }
    return result
  }, [])

  useEffect(() => {
    // console.log('data', data)
    if (!Object.keys(data).length) {
      return
    }
    const clientData = fetchData(data)
    setClient(clientData)
  }, [data, fetchData])

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('SUMMITTED')
    console.log('client.grantTypes', typeof client.grantTypes)
    // TODO: fix post function in here
    const submittedData = {
      client_name: client.clientName,
      client_uri: client.clientUri,
      grant_types: formatingHelper.strToArray(client.grantTypes),
      redirect_uris: formatingHelper.strToArray(client.redirectUris),
      response_types: formatingHelper.strToArray(client.responseTypes),
      scope: client.scope,
      token_endpoint_auth_method: client.tokenEndpointAuthMethod || 'client_secret_basic',
    }

    if (!props.paramId) {
      props.onPost(submittedData)
    } else {
      props.onPut(submittedData)
    }
  }

  const buttonGroup = [
    {
      name: 'Quay lại',
      color: 'secondary',
      className: 'secondary',
      onClick: props.onGoBack,
      visible: true,
    },
    {
      name: 'Lưu thông tin',
      color: 'success',
      className: 'success',
      type: 'submit',
      // onClick: props.paramId ? props.onPut : props.onPost,
      visible: true,
    },
    {
      name: 'Xoá thông tin',
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
                <CFormLabel htmlFor="username">Client Name</CFormLabel>
                <CFormInput
                  id="clientName"
                  name="clientName"
                  value={client.clientName}
                  onChange={handleInputChange}
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
                <CFormLabel htmlFor="clienturi">Client URI</CFormLabel>
                <CFormInput
                  id="clientUri"
                  name="clientUri"
                  value={client.clientUri}
                  onChange={handleInputChange}
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
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Scope</CFormLabel>
                <CFormInput
                  id="scope"
                  name="scope"
                  value={client.scope}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Token Endpoint Auth Method
                </CFormLabel>
                <CFormSelect
                  id="tokenEndpointAuthMethod"
                  name="tokenEndpointAuthMethod"
                  aria-label="Floating label select example"
                  value={client.tokenEndpointAuthMethod}
                  onChange={handleInputChange}
                >
                  <option value="client_secret_basic">Client Secret Basic</option>
                  <option value="client_secret_post">Client Secret Post</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Grant Types</CFormLabel>
                {/* <CFormTextarea
                  id="grantTypes"
                  name="grantTypes"
                  rows="5"
                  value={client.grantTypes}
                  onChange={handleInputChange}
                ></CFormTextarea> */}
                <Multiselect
                  options={[
                    { key: 'Authorization Code', id: 1 },
                    { key: 'Password', id: 2 },
                  ]}
                  selectedValues={client.grantTypes}
                  displayValue="key"
                  onSelect={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Response Types</CFormLabel>
                <CFormSelect
                  id="responseTypes"
                  name="responseTypes"
                  aria-label="Floating label select example"
                  value={client.tokenEndpointAuthMethod}
                  onChange={handleInputChange}
                >
                  <option value="code">Code</option>
                  <option value="token">Token</option>
                  <option value="none">None</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Redirect URIs</CFormLabel>
                <CFormTextarea
                  id="redirectUris"
                  name="redirectUris"
                  rows="5"
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
