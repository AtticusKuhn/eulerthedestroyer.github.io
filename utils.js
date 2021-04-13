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
    rimraf('./public/my-projects/*', function () { console.log('done'); });
}
export const removeHTML = (html) => html.replace(/<[^>]+>/g, '')