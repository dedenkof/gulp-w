'use strict';
// Подключаем необходимые модули для работы
var gulp = require('gulp'),
// gulp-load-plugins позволяет проще подключать плагины
gp = require('gulp-load-plugins') ();

// Gulp это обьект
// task - метод
gulp.task('sass', function(){
// gulp возьми ./source/style/app.scss
    return gulp.src('./source/style/app.scss')
    // pipe это методы gulp которые совершают действия с взятыми нами файлами (типа труба)
    // вызывает плагин sourcemaps и в начале трубы иницыализируем этот процес
        .pipe(gp.sourcemaps.init())
        // Запускаем sass для компиляции
        .pipe(gp.sass())
        // Если ошибка то сообщение с заголовком Style
        .on('error', gp.notify.onError({
            title : 'Style'
        }))
        // запускаем автопрефикс для браузеров
        .pipe(gp.autoprefixer({
            browsers: [
                'last 3 version',
                '> 1%',
                'ie 8',
                'ie 9',
                'Opera 12.1'
            ]
        }))
        // После єтих действий записываем в соурсмап
        .pipe(gp.sourcemaps.write())
        // после ложим в папку назначения
        .pipe(gulp.dest('build/assets/css'))
});


/*
Если таск не дефолтный то вызываем gulp sass по названию задачи
Если дефолтный то просто вызываем gulp */
