var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin= require('gulp-cssmin');
    

    gulp.task('sass', function(){    //convert sass to css
        return gulp.src('app/scss/style.scss')   //create file.scss
        .pipe(sass({outputStyle: 'compressed'}))  
        .pipe(rename({suffix : '.min'}))  // create min file css
        .pipe(autoprefixer({overrideBrowserslist : ['last 8 versions']})) // add prefixs -ms, -webkit
        .pipe(gulp.dest('app/css'))  
        .pipe(browserSync.reload({stream: true})) // update site page
    });

    gulp.task('style', function(){         ///add CSS files our option counten __slick_slider and other
        return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'node_modules/slick-carousel/slick/slick.css',   // here write route to our .js files
            ///here you can add new rout to you option counten
        ])
        .pipe(concat('libs.min.css'))  // concatynation  both files to 1
        .pipe(cssmin())                    // minimization file
        .pipe(gulp.dest('app/css'))      // create file in the folder
    });

    gulp.task('script', function(){         ///add JS files our option counten __slick_slider and other
        return gulp.src([
            'node_modules/slick-carousel/slick/slick.js',   // here write route to our .js files
            ///here you can add new rout to you option counten
        ])
        .pipe(concat('libs.min.js'))  // concatynation  both files to 1
        .pipe(uglify())                 // minimization file
        .pipe(gulp.dest('app/js'))      // create file in the folder
    });

    gulp.task('html', function(){
        return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
    });
    gulp.task('js', function(){
        return gulp.src('app/*.js')
        .pipe(browserSync.reload({stream: true}))
    });


    gulp.task('browser-sync', function() {  // update site page
        browserSync.init({
            server: {
                baseDir: "app/"
            }
        });
    });

    gulp.task('watch', function(){           //auto update file
        gulp.watch('app/scss/style.scss', gulp.parallel('sass'))
        gulp.watch('app/*.html', gulp.parallel('html'))
        gulp.watch('app/js/*.js', gulp.parallel('js'))
    })

    gulp.task('default', gulp.parallel('sass','watch', 'browser-sync','script','style'))