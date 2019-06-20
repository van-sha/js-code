async function remoteMathService(cb) {
  var one, two;
  await callOneService(function(err, num) {
    one = num;
  });
  await callTwoService(function(err, num) {
    two = num;
  });
  return cb(undefined, one + two);
}
function callOneService(cb) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
    resolve(1);
      return cb(undefined, 1);
    }, 1000);
  });
  return promise;
}
function callTwoService(cb) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
      return cb(undefined, 2);
    }, 1500);
  });
  return promise;
}
remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
}
});
