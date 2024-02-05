import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt({
    message: 'Enter your URL - ', // for taking input
    name: 'URL', // saves the input in object with key URL
  })
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url); // converting text to image
    qr_png.pipe(fs.createWriteStream('qr_img.png')); // putting image in file stream

    fs.writeFile('URL.txt', url, (err) => {
      // saving input URL in a file
      if (err) throw err;
      console.log('This file has been saved!');
    });
  });

