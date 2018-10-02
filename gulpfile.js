'use strict';

global.$ = {
    // Подключаем файл с путями
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')()
};

// Перебираем в цикле все пути массива
$.path.task.forEach(function(taskPath) {
    require (taskPath) ();
});
