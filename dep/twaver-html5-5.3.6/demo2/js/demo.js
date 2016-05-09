'use strict';
var Demo = function() {
	var runDemoForms = function() {
		$('.admin-form').on('submit',
		function(e) {
			if ($('body.timeline-page').length || $('body.admin-validation-page').length) {
				return;
			}
			e.preventDefault;
			alert('Your form has submitted!');
			return false;
		});
		var fileUpload = $('.fileupload-preview');
		if (fileUpload.length) {
			fileUpload.each(function(i, e) {
				var fileForm = $(e).parents('.fileupload').find('.btn-file > input');
				$(e).on('click',
				function() {
					fileForm.click();
				});
			});
		}
	}
	var runDemoTopbar = function() {
		if ($("#topbar-multiple").length) {
			$('#topbar-multiple').multiselect({
				buttonClass: 'btn btn-default btn-sm ph15',
				dropRight: true
			});
		}
	}
	var runDemoSourceCode = function() {
		var bsElement = $(".bs-component");
		if (bsElement.length) {
			$.ajaxSetup({
				cache: true
			});
			$("<link/>", {
				rel: "stylesheet",
				type: "text/css",
				href: "github.css"
			}).appendTo("head");
			$.getScript("highlight.pack.js");
			var modalSource = '<div class="modal fade" id="source-modal" tabindex="-1" role="dialog">  ' + '<div class="modal-dialog modal-lg"> ' + '<div class="modal-content"> ' + '<div class="modal-header"> ' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' + '<h4 class="modal-title" id="myModalLabel">Source Code HTML</h4> ' + '</div> ' + '<div class="modal-body"> ' + '<div class="highlight"> ' + '<pre> ' + '<code class="language-html" data-lang="html"></code> ' + '</pre> ' + '</div> </div> ' + '<div class="modal-footer"> ' + '<button type="button" class="btn btn-primary btn-clipboard">Highlight Source</button> ' + '</div> </div> </div> </div> </div>';
			$(modalSource).appendTo('body');
			var codeBtn = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>");
			codeBtn.click(function() {
				var html = $(this).parent().html();
				html = cleanSource(html);
				$("#source-modal pre").text(html);
				$("#source-modal").modal();
				var source = $("#source-modal").find('pre');
				setTimeout(function() {
					source.each(function(i, block) {
						hljs.highlightBlock(block);
					});
				},
				250);
				$('.btn-clipboard').on('click',
				function() {
					var selection = $(this).parents('.modal-dialog').find('pre');
					selection.selectText();
				});
				$(document).keypress(function(e) {
					if (e.which == 99) {
						console.log('go');
						$('.btn-clipboard').click();
					}
				});
			});
			bsElement.hover(function() {
				$(this).append(codeBtn);
				codeBtn.show();
			},
			function() {
				codeBtn.hide();
			});
			var cleanSource = function(html) {
				var lines = html.split(/\n/);
				lines.shift();
				lines.splice( - 1, 1);
				var indentSize = lines[0].length - lines[0].trim().length,
				re = new RegExp(" {" + indentSize + "}");
				lines = lines.map(function(line) {
					if (line.match(re)) {
						line = line.substring(indentSize);
					}
					return line;
				});
				lines = lines.join("\n");
				return lines;
			}
			jQuery.fn.selectText = function() {
				var doc = document,
				element = this[0],
				range,
				selection;
				if (doc.body.createTextRange) {
					range = document.body.createTextRange();
					range.moveToElementText(element);
					range.select();
				} else if (window.getSelection) {
					selection = window.getSelection();
					range = document.createRange();
					range.selectNodeContents(element);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			};
		}
	}
	var runDemoSettings = function() {
		if ($('#skin-toolbox').length) {
			$('#skin-toolbox .panel-heading').on('click',function() {
				$('#skin-toolbox').toggleClass('toolbox-open');
			});
			$('#skin-toolbox .panel-heading').disableSelection();
			var Breadcrumbs = $('#topbar');
			var Sidebar = $('#sidebar_left');
			var Header = $('.navbar');
			var Branding = Header.children('.navbar-branding');
			var headerSkins = "bg-primary bg-success bg-info bg-warning bg-danger bg-alert bg-system bg-dark bg-light";
			var sidebarSkins = "sidebar-light light dark";
			var settingsObj = {
				'headerSkin': 'bg-light',
				'sidebarSkin': 'sidebar-default',
				'headerState': 'navbar-fixed-top',
				'sidebarState': 'affix',
				'breadcrumbState': 'relative',
				'breadcrumbHidden': 'visible',
			};
			var themeKey = 'admin-settings';
			var themeGet = localStorage.getItem(themeKey);
			if (themeGet === null) {
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
				themeGet = localStorage.getItem(themeKey);
			} (function() {
				var settingsParse = JSON.parse(themeGet);
				settingsObj = settingsParse;
				$.each(settingsParse,
				function(i, e) {
					switch (i) {
					case 'headerSkin':
						Header.removeClass(headerSkins).addClass(e);
						Branding.removeClass(headerSkins).addClass(e + ' dark');
						if (e === "bg-light") {
							Branding.removeClass(headerSkins);
						} else {
							Branding.removeClass(headerSkins).addClass(e);
						}
						$('#toolbox-header-skin input[value="bg-light"]').prop('checked', false);
						$('#toolbox-header-skin input[value="' + e + '"]').prop('checked', true);
						break;
					case 'sidebarSkin':
						Sidebar.removeClass(sidebarSkins).addClass(e);
						$('#toolbox-sidebar-skin input[value="bg-light"]').prop('checked', false);
						$('#toolbox-sidebar-skin input[value="' + e + '"]').prop('checked', true);
						break;
					case 'headerState':
						if (e === "navbar-fixed-top") {
							Header.addClass('navbar-fixed-top');
							$('#header-option').prop('checked', true);
						} else {
							Header.removeClass('navbar-fixed-top');
							$('#header-option').prop('checked', false);
						}
						break;
					case 'sidebarState':
						if (e === "affix") {
							Sidebar.addClass('affix');
							if ($('.nano.affix').length) {
								$(".nano.affix").nanoScroller({
									preventPageScrolling: true
								});
							}
							$('#sidebar-option').prop('checked', true);
						} else {
							Sidebar.removeClass('affix');
							$('#sidebar-option').prop('checked', false);
						}
						break;
					case 'breadcrumbState':
						if (e === "affix") {
							Breadcrumbs.addClass('affix');
							$('#breadcrumb-option').prop('checked', true);
						} else {
							Breadcrumbs.removeClass('affix');
							$('#breadcrumb-option').prop('checked', false);
						}
						break;
					case 'breadcrumbHidden':
						if (e === "hidden") {
							Breadcrumbs.addClass('hidden');
							$('#network-panel').addClass('hidden-b');
							$('#breadcrumb-hidden').prop('checked', true);
						} else {
							Breadcrumbs.removeClass('hidden');
							$('#network-panel').removeClass('hidden-b');
							$('#breadcrumb-hidden').prop('checked', false);
						}
						break;
					}
				});
			})();
			$('#toolbox-header-skin input').on('click',
			function() {
				var This = $(this);
				var Val = This.val();
				var ID = This.attr('id');
				Header.removeClass(headerSkins).addClass(Val);
				Branding.removeClass(headerSkins).addClass(Val + ' dark');
				settingsObj['headerSkin'] = Val;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$('#toolbox-sidebar-skin input').on('click',
			function() {
				var Val = $(this).val();
				Sidebar.removeClass(sidebarSkins).addClass(Val);
				settingsObj['sidebarSkin'] = Val;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$('#header-option').on('click', function() {
				var headerState = "navbar-fixed-top";
				if (Header.hasClass('navbar-fixed-top')) {
					Header.removeClass('navbar-fixed-top');
					headerState = "relative";
					Sidebar.removeClass('affix');
					$('#sidebar-option').parent('.checkbox-custom').addClass('checkbox-disabled').end().prop('checked', false).attr('disabled', true);
					settingsObj['sidebarState'] = "";
					localStorage.setItem(themeKey, JSON.stringify(settingsObj));
					Breadcrumbs.removeClass('affix');
					$('#breadcrumb-option').parent('.checkbox-custom').addClass('checkbox-disabled').end().prop('checked', false).attr('disabled', true);
					settingsObj['breadcrumbState'] = "";
					localStorage.setItem(themeKey, JSON.stringify(settingsObj));
				} else {
					Header.addClass('navbar-fixed-top');
					headerState = "navbar-fixed-top";
					$('#sidebar-option').parent('.checkbox-custom').removeClass('checkbox-disabled').end().attr('disabled', false);
					$('#breadcrumb-option').parent('.checkbox-custom').removeClass('checkbox-disabled').end().attr('disabled', false);
				}
				settingsObj['headerState'] = headerState;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$('#sidebar-option').on('click', function() {
				var sidebarState = "";
				if (Sidebar.hasClass('affix')) {
					Sidebar.nanoScroller({
						destroy: true
					});
					Sidebar.find('.nano-content').attr('style', '');
					Sidebar.removeClass('affix');
					sidebarState = "";
				} else {
					Sidebar.addClass('affix');
					if ($('.nano.affix').length) {
						$(".nano.affix").nanoScroller({
							preventPageScrolling: true
						});
					}
					sidebarState = "affix";
				}
				$(window).trigger('resize');
				settingsObj['sidebarState'] = sidebarState;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$('#breadcrumb-option').on('click', function() {
				var breadcrumbState = "";
				if (Breadcrumbs.hasClass('affix')) {
					Breadcrumbs.removeClass('affix');
					breadcrumbState = "";
				} else {
					Breadcrumbs.addClass('affix');
					breadcrumbState = "affix";
				}
				settingsObj['breadcrumbState'] = breadcrumbState;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$('#breadcrumb-hidden').on('click', function() {
				var breadcrumbState = "";
				if (Breadcrumbs.hasClass('hidden')) {
					Breadcrumbs.removeClass('hidden');
					breadcrumbState = "";
					$('#network-panel').removeClass('hidden-b');
				} else {
					Breadcrumbs.addClass('hidden');
					breadcrumbState = "hidden";
					$('#network-panel').addClass('hidden-b');
				}
				settingsObj['breadcrumbHidden'] = breadcrumbState;
				localStorage.setItem(themeKey, JSON.stringify(settingsObj));
			});
			$("#clearLocalStorage").on('click',
			function() {
				if (bootbox.confirm) {
					bootbox.confirm("Are You Sure?!",
					function(e) {
						if (e) {
							setTimeout(function() {
								localStorage.clear();
								location.reload();
							},
							200);
						} else {
							return;
						}
					});
				}
			});
		}
	}
	var runDemoCache = function() {
		$(window).load(function() {
			var scripts = {
				image1: 'assets/img/stock/1.jpg',
				image2: 'assets/img/stock/2.jpg',
				image3: 'assets/img/stock/3.jpg',
				image4: 'assets/img/stock/4.jpg',
				image5: 'assets/img/stock/5.jpg',
				bg1: 'assets/img/patterns/backgrounds/1.jpg',
				adminform: 'assets/admin-tools/admin-forms/css/admin-forms.css',
				adminpanel: 'assets/admin-tools/admin-plugins/admin-panels/adminpanels.css',
				adminmodal: 'assets/admin-tools/admin-plugins/admin-modal/adminmodal.css',
				admindock: 'assets/admin-tools/admin-plugins/admin-dock/dockmodal.css',
			};
			var cacheCheck = function(o) {
				var cacheKey = 'cache-observes';
				var cacheGet = localStorage.getItem(cacheKey);
				if (cacheGet === null) {
					localStorage.setItem(cacheKey, "");
					cacheGet = localStorage.getItem(cacheKey);
				}
				$.each(o,
				function(i, p) {
					if (localStorage.getItem(i) !== 'cached') {
						$.ajax({
							url: p,
							cache: true,
							success: function(data) {
								localStorage.setItem(i, 'cached');
								console.log(localStorage.getItem(i));
							}
						});
					} else {}
				});
			}
		});
	}
	var runFullscreenDemo = function() {
		var screenCheck = $.fullscreen.isNativelySupported();
		$('.request-fullscreen').click(function() {
			if (screenCheck) {
				if ($.fullscreen.isFullScreen()) {
					$.fullscreen.exit();
				} else {
					$('html').fullscreen({
						overflow: 'visible'
					});
				}
			} else {
				alert('Your browser does not support fullscreen mode.')
			}
		});
	}
	return {
		init: function() {
			runDemoForms();
			runDemoTopbar();
			runDemoSourceCode();
			runDemoSettings();
			runDemoCache();
			runFullscreenDemo();
		}
	}
} ();