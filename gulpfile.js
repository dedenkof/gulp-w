'use strict';

global.$ = {
    // Подключаем файл с путями
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    // чтобы иметь доступ к плагину del из разных  мест запихиваем его в global
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};

// Перебираем в цикле все пути массива
$.path.task.forEach(function(taskPath) {
    require (taskPath) ();
});

$.gulp.task('default', $.gulp.series( // series по очереди вызываем 3 таска
    'clean', // 1 таск
    $.gulp.parallel( // 2 таск (собираем паралельно sass и pug)
        'sass',
        'pug'
    ),
    $.gulp.parallel( // 3 таск (и после того как sass и pug собрались паралельно запустятся watch и serve)
        'watch',
        'serve'
    )
));
