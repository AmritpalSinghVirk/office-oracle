/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"OfficeOracle/ui/OfficeOracle/ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});