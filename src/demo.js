const string =
    '001200013295||Nguyễn Hữu Đạt|29102000|Nam|Thôn Đạo Tú, Quảng Phú Cầu, Ứng Hòa, Hà Nội|10072021'
 
  const stringList = string.split('|')

console.log(stringList)

for ( let i=0;i < stringList.length; i++){
    console.log(stringList[i])
}