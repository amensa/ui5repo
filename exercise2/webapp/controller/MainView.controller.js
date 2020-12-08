sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment'
], function (Controller, MessageToast, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("com.kpmg.exercise2.controller.MainView", {
		onInit: function () {
			// set data model on view
			var data = {
				recipient: {
					name: 'World',
				},
			};
			var model = new JSONModel(data);
			this.getView().setModel(model);
		},
		onShowHello: function () {
			MessageToast.show('Hello World');
		},
		onOpenDialog: function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: 'home.kpmg.testproxy.view.HelloDialog',
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this.pDialog.then(function (oDialog) {
				oDialog.open();
			});
		},
	});
});