const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');


export const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
);

export const clearDirectory = (directory)=>{
    // fs.rmdir(directory, { recursive: true }, ()=>{
    //     console.log("done delteing directoru")
    // })
rimraf('./public/my-projects/*', function () { console.log('done'); });

    // fs.readdir(directory, (err, files) => {
    // if (err) throw err;
    // for (const file of files) {
    //     fs.unlink(path.join(directory, file), err => {
    //     if (err) throw err;
    //     });
    // }
    // });
}