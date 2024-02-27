// https://stackoverflow.com/a/69807672
// https://nodejs.org/api/fs.html#fscpsyncsrc-dest-options
import {cpSync} from 'fs';

const pathSource      = 'build'         ;
const pathDestination = 'electron/src'  ;

cpSync(
  pathSource,
  pathDestination,
  {
    recursive: true
  }
);