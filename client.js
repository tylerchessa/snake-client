const net = require("net");
const { IP, PORT } = require('./constants.js')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
  console.log('Successfully connected to game server')
  conn.write("Name: TBC")
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (dataInput) => {
    console.log(dataInput);
  })

//   let time2 = 50; 
//   for (let x = 1; x< 1000; x++) {
//   setTimeout(() => {
   
//     conn.write("Move: right")
//   }, time2
// ); 
// time2 += x
//   }

//   setTimeout(() => {
//     conn.write("Move: down")
//   }, 1150)

  return conn;
};

module.exports = connect