function getDate (prev,upOrDown,state){
  let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
  let selectedMonth = "";

  if ( prev === "dec" && upOrDown === 1 ){
    selectedMonth = "jan"
  }
  else if (prev === "jan" && upOrDown === -1){
    selectedMonth = "dec"
  }
  else {
    selectedMonth = months[months.indexOf(prev) + upOrDown]
  }

  this.setState({
    selectedMonth: selectedMonth
  })
}
export default getDate;