var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var del = require('del');
var plumber = require('gulp-plumber');

var fs = require('fs');

var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

gulp.task('default', ['jade', 'sass', 'watch', 'connect']);

gulp.task('watch', function() {
  gulp.watch(['app/jade/*.jade', 'app/jade/**/*.jade'], ['jade']);
  gulp.watch(['app/sass/*.scss', 'app/sass/**/*.scss'], ['sass']);
});

gulp.task('jade', function() {
  gulp.src('app/jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('sass', function() {
  gulp.src('app/sass/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('.tmp/css'));
});

gulp.task('sassprod', function() {
  gulp.src('app/sass/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: '.tmp',
    livereload: true,
    port: 9000,
    middleware: function(connect, opt) {
      return [
        connect.static('.tmp'),
        connect.static('app/statics')
      ]
    }
  });
});

gulp.task('clean:dist', function() {
  return del.sync(['dist']);
});
gulp.task('clean:dev', function() {
  return del.sync('.tmp');
});

gulp.task('copy', function() {

  var arquivos = [
    "app/statics/**/*"
  ];

  gulp.src(arquivos)
    .pipe(gulp.dest('dist'));


});