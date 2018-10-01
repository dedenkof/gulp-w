'use strict';
// PUG позволяет писать html более компактно используя всякие фичи
module.exports = function() {
    $.gulp.task('pug', function () {
        // Взяли все файлы pug
        return $.gulp.src('./source/template/*.pug')
            // Применили к исходникам pug
            // pretty: true - компиляция html не в одну строку
            .pipe($.gp.pug({pretty: true}))
            // Вывод ошибки
            .on('error', $.gp.notify.onError(function(error){
                return{
                    title: 'Pug',
                    meassage: error.message
                }
            }))
            // Ложим результат
            .pipe($.gulp.dest('build/'));
    });
};
