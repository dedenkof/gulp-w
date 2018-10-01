'use strict';
global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')()
};

// реквайрим модуль sass.js
// Делаем вызов (регистрируем таск), чтобы иметь к нему доступ
require('./gulp/tasks/sass.js')();

$.gulp.task('sass');