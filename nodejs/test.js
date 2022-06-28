// const { doggos, ages } = require('./doggos');  // this wouldn't work unless I went to package.json and deleted "type":"module"

//console.log(doggos, ages)  // will log whatever the required module logs or exports

// const os = require('os');

// console.log(os.platform(), os.homedir())

const fs = require('fs');

// fs.readFile('./docs/msg.txt', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     // console.log(data.toString());
// });

// console.log('last line')

// fs.writeFile('./assets/msg3.txt', 'hello there', () => {
//     console.log('file was written')
// });

// if (!fs.existsSync('./assets')) {
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(`Error! ${err}`)
//     }
//     console.log('folder created');
// } );
// } else {
//     fs.rmdir('./assets', (err) => {
//       if (err) {
//         console.log(`Error! ${err}`);
//       }
//       console.log('folder deleted')  
//     })
// }

// if (!fs.existsSync('./docs/mensaje.txt')){
//     fs.writeFile('./docs/mensaje.txt', 'lorem1000', (err) => {
//         if (err) {
//           console.log(`Error! ${err}`);
//         }
//         console.log('escrito')
//     }) }
// }else{
    // fs.unlink('./docs/msg2.txt', (err) => {
    //     if (err) {
    //       console.log(`Error! ${err}`);
    //     }
    //     console.log('deleted file') 
    // })
// }

// fs.unlink('./docs/mensaje2.txt', (err) => {
//     err ? console.log(err) : console.log('deleted file');
// });

const readStream = fs.createReadStream('../code01.html', {encoding: 'utf8'});  // doesn't need encoding with .pipe()

const writeStream = fs.createWriteStream('./docs/mensaje2.txt');

// readStream.on('data', (chunk) => {
// console.log('-----NEW CHUNK-----');
// console.log(chunk);
// writeStream.write('\nNEW CHUNK\n');
// writeStream.write(chunk);
// });

//////PIPING

readStream.pipe(writeStream);   // this is an abstraction of the code block above


