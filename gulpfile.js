var gulp = require('gulp');
var concat = require('gulp-concat');                            //- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
var rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');               //- 路径替换
var less = require('gulp-less');
var copy = require('gulp-copy');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var path = require("path");

var distPath = './assets'
var distJsPath = distPath+"/js";
var distCssPath = distPath+"/css";
var distFontPath = distPath+"/font";

/**
 * 合并JS
 */
gulp.task('js-concat', function() {                                
    gulp.src([
    	'./dep/jquery-1.11.1/jquery.js',
    	'./dep/jquery-1.11.1/jquery.cookie.js',
    	'./dep/jquery-1.11.1/plugin/spin.js',
    	'./dep/bootstrap/3.x/3.3.6-dist/js/bootstrap.js',
		distJsPath+"/ass-module.js"
    	]).pipe(concat('ass-debug.js')).pipe(gulp.dest(distJsPath));                      
});

gulp.task('less',function(){
	// 1. 找到 less 文件
    gulp.src('src/less/ass.less')
    // 2. 编译为css
        .pipe(less())
    // 3. 另存文件
        .pipe(gulp.dest(distCssPath))
});




var itsmBasePath = "../../ITM-WorkSpaces/ITM-ITSM/WebContent/workshop/ImpactService/common/ass/";

var futureITSMBasePath = "../../ITM-FUTURE/itsm/web-src/src/app/lib/twaver-simple/";

var itsmPathJs = itsmBasePath+"/js";
var itsmPathCss = itsmBasePath+"/css";

gulp.task('less-itsm',function(){
	// 1. 找到 less 文件
    gulp.src('src/less/ass.less')
    // 2. 编译为css
        .pipe(less())
    // 3. 另存文件
        .pipe(gulp.dest(itsmPathCss))
});

gulp.task('js-concat-itsm', function() {                                
    gulp.src([
    	'./dep/jquery-1.11.1/jquery.js',
    	'./dep/jquery-1.11.1/jquery.cookie.js',
    	'./dep/jquery-1.11.1/plugin/spin.js',
    	'./dep/bootstrap/3.x/3.3.6-dist/js/bootstrap.js',
		distJsPath+"/ass-module.js"
    	]).pipe(concat('ass-debug.js')).pipe(gulp.dest(itsmPathJs));                      
});

gulp.task('js-concat-itsm-simple', function() {                                
    gulp.src([
		distJsPath+"/ass-module.js"
    	]).pipe(concat('ass-debug-simple.js')).pipe(gulp.dest(itsmPathJs));                      
});


gulp.task('js-concat-futureITSM-simple', function() {                                
    gulp.src([distJsPath+"/ass-module.js"]).pipe(concat('ass-twaver-simple.js')).pipe(gulp.dest(futureITSMBasePath));                      
});


gulp.task('copy-fonts', function() {
    return gulp.src('dep/bootstrap/3.x/3.3.6-dist/fonts/*').pipe(copy(distFontPath,{prefix:5}));
});

gulp.task('default', ['js-concat','less','copy-fonts']);