sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("OfficeOracle.ui.OfficeOracle.ui.controller.Dashboard", {
		onInit: function () {
			var oData = {
				CurrentTimestamp: ""
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel, "Dashboard");
			this.updateTimestamp();
		},
		
		updateTimestamp: function () {
		    var now = new Date(), // current date
		        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], // you get the idea
		        time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(), // again, you get the idea
		
		        // a cleaner way than string concatenation
		        date = [now.getDate(), 
		                months[now.getMonth()],
		                now.getFullYear()].join(".");
		
		    // set the content of the element with the ID time to the formatted string
		    var oDashboardModel = this.getView().getModel("Dashboard");
		    oDashboardModel.setProperty("/CurrentTimestamp", [date, time].join(" "));
		    oDashboardModel.refresh(true);
		}
	});
});