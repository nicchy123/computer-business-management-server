import moment from "moment";

function calculateStartDate(duration:string) {
    const today = new Date();
  
    switch (duration) {
      case 'Daily':
        return moment(today).startOf('day').toDate();
      case 'Weekly':
        return moment(today).startOf('isoWeek').toDate();
      case 'Monthly':
        return moment(today).startOf('month').toDate();
      case 'Yearly':
        return moment(today).startOf('year').toDate();
      default:
        throw new Error('Invalid duration');
    }
  }

  export default calculateStartDate