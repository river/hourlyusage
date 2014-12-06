fs = require('fs');

hourLog = Array.apply(null, Array(24)).map(function() { return 0; });

fs.readFile('batlog.dat', function(err, data) {
  data.toString().split('\n').forEach(function (line) {
    for (i=0;i<24;i++) {
      if (line.search(zeroFill(i) + "(:[0-9]{2}){2}") != -1)
        hourLog[i] += 1;
    };

    // if (line.search(3 + "(:[0-9]{2}){2}") != -1)
    //   console.log(line);
  });

  console.log("hour\tcount");
  for (i=0;i<24;i++) {
    console.log(zeroFill(i) + '\t' + hourLog[i]);
  };
});

function zeroFill(i) {
  return (i < 10 ? '0' + i : i);
}
