'use strict';

global.$ = {
    // Подключаем файл с путями
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    // чтобы иметь доступ к плагину del из разных  мест запихиваем его в global
    gulp: require('del'),
    gp: require('gulp-load-plugins')()
};

// Перебираем в цикле все пути массива
$.path.task.forEach(function(taskPath) {
    require (taskPath) ();
});


