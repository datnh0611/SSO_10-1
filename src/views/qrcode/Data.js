export const handleQRData = (qrData, attrs) => {
  //   console.log('qrData', qrData)
  const results = {}
  const dataList = qrData.split('|')
  //   console.log('dataList', dataList)
  for (let i = 0; i < dataList.length; i++) {
    // console.log('attrs[i]', attrs[i])
    results[attrs[i]] = dataList[i]
  }
  //   console.log('results', results)
  return results
}
