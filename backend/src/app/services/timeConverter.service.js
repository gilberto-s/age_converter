class TimeConverterService {
  constructor() {
    this.daysInEarthYear = 365.25;
    this.secondsInDay = 86400;
  }

  caculate (seconds, planet) {
    const daysInYear = this.daysInEarthYear;
    const secondsToDays = seconds / this.secondsInDay;
    const daysToYears = (secondsToDays / daysInYear) * planet.earthYears;
    return parseFloat(daysToYears.toFixed(2));
  };
  
  convert (seconds, planet) {
    const daysInYear = planet.earthYears * this.daysInEarthYear;
    const secondsToDays = seconds / this.secondsInDay;
    const daysToYears = secondsToDays / daysInYear;
    const result = (daysToYears * this.daysInEarthYear) / daysInYear;
    return parseFloat(result.toFixed(2));
  };
}

export default TimeConverterService;