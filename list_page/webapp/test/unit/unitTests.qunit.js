/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlbflptracker/list_page/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
