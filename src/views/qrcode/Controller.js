import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { qrActions } from 'src/store/qrcode-slice'
// import QRCode from 'qrcode'
// import QrReader from 'react-qr-reader'
// import { CCol, CRow, CButton } from '@coreui/react'
import View from './View'
const Controller = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [scanResultFile, setScanResultFile] = useState('')
  const [scanResultWebCam, setScanResultWebCam] = useState('')
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const qrRef = useRef(null)

  const onScanFile = () => {
    qrRef.current.openImageDialog()
  }

  const handleErrorFile = (error) => {
    console.log(error)
  }
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result)
    }
  }

  const handleErrorWebCam = (error) => {
    console.log(error)
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result)
    }
  }

  useEffect(() => {
    if (!scanResultWebCam) return
    dispatch(qrActions.scan({ qrData: scanResultWebCam, qrScan: true }))
    history.goBack()
  }, [scanResultWebCam])

  return (
    <View
      handleErrorWebCam={handleErrorWebCam}
      handleScanWebCam={handleScanWebCam}
      scanResultWebCam={scanResultWebCam}
    />
  )
}

export default Controller
