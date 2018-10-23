'use strict';

module.exports = function() {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            open: false, // Forbidden auto open browser
            server: './build' // Track build directory
            });
        $.browserSync.watch('build', $.browserSync.reload);
    });
};
