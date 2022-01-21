import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useInput from '../../../hooks/use-input'
import { DatePicker } from '@progress/kendo-react-dateinputs'
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

  // const { value: clientId, fetchValue: fetchClientId, onChange: onChangeClientId } = useInput()
  const {
    value: clientName,
    fetchValue: fetchClientName,
    onChange: onChangeClientName,
  } = useInput()
  const { value: clientUri, fetchValue: fetchClientUri, onChange: onChangeClientUri } = useInput()
  const {
    value: grantTypes,
    fetchValue: fetchGrantTypes,
    onChange: onChangeGrantTypes,
  } = useInput([])
  const {
    value: redirectUris,
    fetchValue: fetchRedirectUris,
    onChange: onChangeRedirectUris,
  } = useInput([])
  const {
    value: responseTypes,
    fetchValue: fetchResponseTypes,
    onChange: onChangeResponseTypes,
  } = useInput()
  const { value: scope, fetchValue: fetchScope, onChange: onChangeScope } = useInput()
  const {
    value: tokenEndpointAuthMethod,
    fetchValue: fetchAuthMethod,
    onChange: onChangeAuthMethod,
  } = useInput('client_secret_basic')

  useEffect(() => {
    // fetchClientName(data.clientName)
    console.log('data', data)
    if (!Object.keys(data).length) return
    const clientMetadata = JSON.parse(data['_client_metadata'])
    console.log('clientMetadata', clientMetadata)
  }, [
    data,
    fetchClientName,
    fetchGrantTypes,
    fetchRedirectUris,
    fetchResponseTypes,
    fetchAuthMethod,
  ])

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('SUMMITTED')
    const submittedData = {
      client_name: clientName,
      client_uri: clientUri,
      grant_types: formatingHelper.strToArray(grantTypes),
      redirect_uris: formatingHelper.strToArray(redirectUris),
      response_types: formatingHelper.strToArray(responseTypes),
      scope: scope,
      token_endpoint_auth_method: tokenEndpointAuthMethod,
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
    {
      name: 'QR Code',
      color: 'dark',
      className: 'dark',
      // onClick: props.onPost,
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
                <CFormInput id="clientname" value={clientName} onChange={onChangeClientName} />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="clienturi">Client URI</CFormLabel>
                <CFormInput id="clienturi" value={clientUri} onChange={onChangeClientUri} />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Redirect URIs</CFormLabel>
                <CFormTextarea rows="5" value={redirectUris} onChange={onChangeRedirectUris} />
              </div>
            </CCol>
            <CCol xs={6}>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Scope</CFormLabel>
                <CFormInput value={scope} onChange={onChangeScope} />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  Token Endpoint Auth Method
                </CFormLabel>
                <CFormSelect
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={tokenEndpointAuthMethod}
                  onChange={onChangeAuthMethod}
                >
                  <option value="client_secret_basic">Client Secret Basic</option>
                  <option value="client_secret_post">Client Secret Post</option>
                </CFormSelect>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Grant Types</CFormLabel>
                <CFormTextarea
                  rows="5"
                  value={grantTypes}
                  onChange={onChangeGrantTypes}
                ></CFormTextarea>
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">Allowed Response Types</CFormLabel>
                <CFormTextarea
                  rows="5"
                  value={responseTypes}
                  onChange={onChangeResponseTypes}
                ></CFormTextarea>
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
