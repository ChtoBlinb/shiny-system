var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('min-js', function() {
    return gulp.src('js/brand.js')
        .pipe(minify({
            ext: {
                min: ('.min.js')
            },
        }))
        .pipe(gulp.dest('minify'))
});

gulp.task('watch', function(){
    gulp.watch('js/brand.js', gulp.series('min-js'));
});

gulp.task('default', gulp.series('min-js', 'watch'));