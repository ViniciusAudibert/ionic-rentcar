var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');

var paths = {
  sass: [
    './www/assets/scss/*.scss',
    './www/app/*.scss',
    './www/templates/pages/**/**.scss',
    './www/templates/partials/**/*.scss',
    './www/templates/partials/components/**/*.scss'
    ]
};

gulp.task('resources', ['deleteResources'], function() {
  gulp.src(["resources/**", "!resources/*.png"])
      .pipe(gulp.dest('res'));
});

gulp.task('deleteResources', function() {
  del(['res']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
});

gulp.task('default', ['concat-sass', 'sass']);

gulp.task('concat-sass', function() {
  gulp.src(paths.sass)
    .pipe(concat('sass-temp.scss'))
    .pipe(gulp.dest('./www/temp'))
});

gulp.task('sass', ['concat-sass'], function(done) {
  gulp.src(['./www/temp/sass-temp.scss'])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/temp'))
    .on('end', done);
});

gulp.task('watch', ['concat-sass', 'sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('serve:before', ['concat-sass', 'sass', 'watch']);
