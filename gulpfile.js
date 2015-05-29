var gulp = require("gulp"),
    sass = require("gulp-sass"),
    connect = require("gulp-connect"),
    watch = require("gulp-watch"),
    destination = "./production/",
    htmlArray = ["./code/*.html", "./code/**/*.html"],
    css = "./code/*.scss";

gulp.task("html", function(){
    gulp.src(htmlArray)
        .pipe(gulp.dest(destination))
        .pipe(connect.reload())
});

gulp.task("sass", function(){
    gulp.src(css)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(destination))
        .pipe(connect.reload())
});

gulp.task("connect", function(){
    connect.server({
        root: "production",
        livereload: true
    });
});

gulp.task("watch", function(){
    gulp.watch(htmlArray, ["html"]);
    gulp.watch(["./code/*.scss"], ["sass"]);
});

gulp.task("default", ["html", "sass", "connect", "watch"]);