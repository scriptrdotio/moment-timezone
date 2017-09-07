var momentTimezone = require("/modules/moment-timezone/moment-timezone.js");
var jun = momentTimezone.moment("2014-06-01T12:00:00Z");
var dec = momentTimezone.moment("2014-12-01T12:00:00Z");

momentTimezone.moment.tz.add([
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0',
    'Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJH0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6'
]);

console.log(jun.tz('America/New_York').format('ha z'));     // 8am EDT
console.log(dec.tz('America/New_York').format('ha z'));     // 7am EST

console.log(jun.tz('Asia/Tokyo').format('ha z'));           // 9pm JST
console.log(dec.tz('Asia/Tokyo').format('ha z'));           // 9pm JST
