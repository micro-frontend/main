import {src, start, task, watch} from 'gulp';
import * as jasmine from 'gulp-jasmine';

task('jasmine', () => {
  return src('./src/app/**/*.ut.ts')
    .pipe(jasmine({
      errorOnFail: false,
    }));
});

task('default', () => {
  start('jasmine');
  return watch('./src/app/**/*.ts', {cwd: './'}, ['jasmine']);
});
