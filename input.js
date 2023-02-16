let connection;

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// stdin.on("data", handleUserInput);

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log("move up:")
    connection.write('Move: up')
  }
  if (key === 'd') {
    console.log("move right:")
    connection.write('Move: right')
  }
  if (key === 's') {
    console.log("move down:")
    connection.write('Move: down')
  }
  if (key === 'a') {
    console.log("move left:")
    connection.write('Move: left')
  }
};




// w = "Move: up"

// a = "Move: left"

// s = "Move: down"

// d = "Move: right"

module.exports = setupInput;
