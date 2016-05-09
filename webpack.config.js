var webpack = require('webpack')
var path = require("path");

function loadSrcFiles(){
	var basePath = './src/js/ass/';
	var files = [
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
			'ui/ass.ui.text.js',
			'ui/ass.ui.combo.js',
			'ui/ass.ui.checkbox.js',
			'ui/ass.ui.button.js',
			'ui/ass.ui.radio.js',
			'ui/ass.ui.textarea.js',
			'ui/ass.ui.input.js',
			'ui/ass.ui.hidden.js',
			'ui/baseView/ass.ui.baseView.js',
			'ui/panel/ass.ui.panel.js',
			'ui/panel/ass.ui.page.js',
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

module.exports = {
	entry: files,
	output: {
	    path: path.resolve(__dirname, "assets"),
	    filename: 'js/ass-module.js'
	}
}

