function createCalendarEvents(){
    let autocal = CalendarApp.getCalendarById(""); //copy paste google calendar id nya di dalam tanda kutip
    let sheet = SpreadsheetApp.getActiveSheet();
  
    let schedule= sheet.getDataRange().getValues();
    schedule.splice(0,1)
  
    schedule.forEach(function(entry){
      autocal.createEvent(entry [0], entry[1], entry[2]).addGuest(entry[3]);
    });
  }
  