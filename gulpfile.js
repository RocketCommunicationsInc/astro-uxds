const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const ListStream = require('list-stream');
const markdownToJSON = require('gulp-markdown-to-json');
const jsonMarkdown = require('gulp-markdown');
const marked = require('marked');
const merge = require('gulp-merge-json');
const rename = require('gulp-rename')

exports.default = () =>
  gulp
    .src(['./img/*', './_content/img/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('_site/img'));

 
marked.setOptions({
  pedantic: true,
  smartypants: true
});
 
gulp.task('searchIndex', async function(){
  return gulp.src('./_content/**/*.md')
  .pipe(ListStream.obj())
  .pipe(markdownToJSON(marked)) 
  .pipe(rename({ extname: '.json' }))
  .pipe( gulp.dest('./js/json/') );
});
