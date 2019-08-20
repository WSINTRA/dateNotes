function getTodaysDay (request){
  //Takes in a string request and returns part of the date 
  //from the string "day month date year"

let d = new Date()
let date = d.toDateString().split(' ');
    switch(request) {
      case "day":
      return date[0].toLowerCase()
      case "month":
      return date[1].toLowerCase()
      case "date":
      return date[2]
      case "year":
      return date[3]
      default:
      return null
    }
}
export default getTodaysDay;