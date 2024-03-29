"use strict";

import gulp from "gulp";
const {src, dest} = gulp;
import autoprefixer from "gulp-autoprefixer";
import cssbeautify from"gulp-cssbeautify";
import cssnano from "gulp-cssnano";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import rigger from "gulp-rigger";
// import sass from "gulp-sass";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import removeComments from "gulp-strip-css-comments";
import uglify from "gulp-uglify";
import browsersync from "browser-sync";
browsersync.create();
// import del from "del";
import pug from "gulp-pug";

/* Paths */
var path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        images: "dist/assets/img/"
    },
    src: {
        html: "src/*.pug",
        js: "src/assets/js/*.js",
        css: "src/assets/sass/style.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}"
    },
    watch: {
        html: "src/**/*.pug",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico,webmanifest,xml}"
    },
    clean: "./dist"
}


/* Tasks */
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000
    });
}

function browserSyncReload(done) {
    browsersync.reload();
}

function html() {
    return src(path.src.html, { base: "src/" })
        .pipe(plumber())
        .pipe(pug())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function css() {
    return src(path.src.css, { base: "src/assets/sass/" })
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
            Browserslist: ['last 8 versions']
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js, { base: "src/assets/js/" })
    .pipe(plumber())
    .pipe(rigger())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min",
        extname: ".js"
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
    return src(path.src.images)
    .pipe(imagemin())
    .pipe(dest(path.build.images));
}

// function clean() {
//     return del(path.clean);
// }

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.images], images);
}

// const build = gulp.series(clean, gulp.parallel(html, css, js, images));
const build = gulp.parallel(html, css, js, images);
const watch = gulp.parallel(build, watchFiles, browserSync);
// const default = gulp.task("default", gulp.parallel(build, watchFiles, browserSync));
gulp.task("default", gulp.parallel(build, watchFiles, browserSync));

/* Exports Tasks */
// export html;
// export css;
// export js;
// export images;
// export clean;
// export build;
// export watch;
// export default;


