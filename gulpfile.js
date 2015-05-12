var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/public/css'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('serve', function() {
  nodemon({
      script: './src/app.js',
      ext: 'js',
      watch: ['src/app.js', 'src/lib/**/*.*'],
      execMap: {
        js: "node --harmony"
      }
    })
    .on('restart', function() {
      console.log('restarted!');
    });
});

gulp.task('front', function() {
  browserSync.init({
    proxy: 'localhost:' + (process.env.PORT || 3000)
  });

  gulp
    .watch('src/scss/*.scss', ['sass']);
  gulp
    .watch(['src/*.js', 'src/views/*.jade', 'src/public'])
    .on('change', reload);
});
