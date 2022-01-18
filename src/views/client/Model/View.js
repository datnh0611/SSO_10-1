import React from 'react'
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

  
  return (
    <>
      <CCol xs={12}>
        <CForm>
          <div className="mb-4">
            <CButtonGroup role="group" aria-label="Basic example">
              <CButton color="secondary" onClick={props.onGoBack}>
                Quay lại
              </CButton>
              <CButton color="success">Lưu thông tin</CButton>
              <CButton color="danger">Xoá thông tin</CButton>
              <CButton color="dark">QR Code</CButton>
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
  data: PropTypes.object.isRequired,
  onGoBack: PropTypes.func.isRequired,
}

export default View
