import React from 'react'
import PropTypes from 'prop-types'
// import QRCode from 'qrcode'
import QrReader from 'react-qr-reader'
import { CCol, CRow, CButton } from '@coreui/react'

const View = (props) => {
  return (
    <CRow>
      <CCol xs={12}>
        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
          delay={300}
          style={{ width: '100%' }}
          onError={props.handleErrorWebCam}
          onScan={props.handleScanWebCam}
        />
        <h3>Scanned By WebCam Code: {props.scanResultWebCam}</h3>
      </CCol>
      {/* <CCol xs={12}>
        <CFormInput label="Enter Text Here" onChange={(e) => setText(e.target.value)} />
        <CButton
          //   className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => generateQrCode()}
        >
          Generate
        </CButton>
        <br />
        <br />
        <br />
        {imageUrl ? (
          <a href={imageUrl} download>
            <img src={imageUrl} alt="img" />
          </a>
        ) : null}
      </CCol> */}
      {/* <CCol xs={12}>
        <CButton color="secondary" onClick={onScanFile}>
          Scan Qr Code
        </CButton>
        <QrReader
          ref={qrRef}
          delay={300}
          style={{ width: '100%' }}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        />
        <h3>Scanned Code: {scanResultFile}</h3>
      </CCol> */}
    </CRow>
  )
}

View.propTypes = {
  scanResultWebCam: PropTypes.string,
  handleScanWebCam: PropTypes.func,
  handleErrorWebCam: PropTypes.func,
}

export default View
