sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	//temp modified123
	//temp modified1234
	//test
	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}

	});

});
