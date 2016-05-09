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

function loadSrcFiles(){
	var basePath = './src/js/ass/';
	var files = [
	  		'ui/ass.ui.form.compoent.js',
			'ass_core.js',
			'ass.datastore.js',
			/***UI Start***/
			'ui/ass.ui.stylecss.js',
			'ui/ass.ui.layout.js',
			'ui/ass.ui.event.js',
			/***BaseView Start***/
			'ui/baseView/ass.ui.rowView.js',
			'ui/baseView/ass.ui.columnView.js',
			'ui/baseView/ass.ui.viewport.js',
			'ui/baseView/ass.ui.navbar.js',
			/***BaseView End***/
			/***Panel Start***/
			'ui/panel/ass.ui.gridPanel.js',
			'ui/panel/ass.ui.listPanel.js',
			'ui/panel/ass.ui.formPanel.js',
			'ui/panel/ass.ui.window.js',
			'ui/panel/ass.ui.tabPanel.js',
			'ui/panel/ass.ui.timeline.js',
			/***Panel End***/
			'twaver.network_core.js',
			'twaver.network.js',
			'ui/ass.ui.view.js',
			'ui/baseView/ass.ui.baseView.js',
			'ui/panel/ass.ui.panel.js',
			'ui/baseView/ass.ui.modal.js',
			'ui/baseView/ass.ui.process.js',
			'ui/baseView/ass.ui.popover.js',
			'ui/baseView/ass.ui.wellView.js',
			'ui/baseView/ass.ui.sidebar.js'
			/***UI End***/
	  ];

	for(var i=0; i<files.length; i++){
		files[i] = basePath + files[i];
	}

	return files;
}
var files = loadSrcFiles();
var distPath = './assets'
var distJsPath = distPath+"/js";
var distCssPath = distPath+"/css";
var distFontPath = distPath+"/font";
// run webpack
gulp.task("webpack", function(callback) {
    webpack({
	  entry: files,
	  output: {
	    path: path.resolve(__dirname, "dist"),
	    filename: 'js/ass-module.js'
	  }
	}, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
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


gulp.task('copy-fonts', function() {
    return gulp.src('dep/bootstrap/3.x/3.3.6-dist/fonts/*').pipe(copy(distFontPath,{prefix:5}));
});

gulp.task('default', ['webpack','js-concat','less','copy-fonts']);