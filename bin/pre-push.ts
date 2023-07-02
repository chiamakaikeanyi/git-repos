const figlet = require("figlet");

/* eslint-disable no-console */
figlet("PR     Dance     :)", (err, data) => {
  if (err) {
    console.log("IGNORE ME, Figlet error => ", err);
  }

  console.log(data);
  console.log("Yo! Are the images in WebP format?");
  console.log(
    "Did you also remember to optimize them using Tiny PNG or Squoosh?"
  );
});
/* eslint-enable no-console */
