const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  conn.on('connect', () => {
  console.log('Successfully connected to game server')
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (dataInput) => {
    console.log(dataInput);
  })

  conn.write("Name: TBC");

  return conn;
};

module.exports = connect