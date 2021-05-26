const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');


export const snakeToCamel = (str: string) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
);

export const clearDirectory = (directory: string)=>{
    rimraf('./public/my-projects/*', function () { console.log('done'); });
}
export const removeHTML = (html: string) => html.replace(/<[^>]+>/g, '')
//this converts camelCase to snake-case
export function toSnakeCase(name: string) {
    return name.toLowerCase().replace(/\s/g, "-")
}
export function randomItemsFromArray<a>(array: a[], n: number){
    return array.sort(() => 0.5 - Math.random()).slice(0, n);
}
