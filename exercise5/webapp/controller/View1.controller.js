sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("home.kpmg.exercise5.controller.View1", {
		onInit: function () {
			
			// Create Model Instance of the oData service
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZCRUD_DEMO_SS_SRV");
			sap.ui.getCore().setModel(oModel, "myModel");
		},
		oDataCall: function (oEvent) {
			var that = this;
			debugger;
			// call oData service's function based on which button is clicked.

			var myModel = sap.ui.getCore().getModel("myModel");
			myModel.setHeaders({
				"X-Requested-With": "X"
			});
			// CREATE******************
			if ('Create' == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.Id = that.getView().byId("uniqueid").getValue();
				obj.Name = that.getView().byId("nameid").getValue();
				obj.Email = that.getView().byId("emailid").getValue();
				obj.Mobile = that.getView().byId("mobid").getValue();
				myModel.create('/userdataSet', obj, {
					success: function (oData, oResponse) {
						alert("Record Created Successfully...");
					},
					error: function (err, oResponse) {
	
						alert("Error while creating record - "
							.concat(err.response.statusText));
					}
				});
			}
			// READ******************
			else if ('Read' == oEvent.oSource.mProperties.text) {
				var readurl = "/userdataSet?$filter=(id eq '')";
				myModel.read(readurl, {
					success: function (oData, oResponse) {
						debugger;
					
					},
					error: function (err) {
						debugger;
					}
				});
			}
			// UPDATE******************
			if ('Update' == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.id = that.getView().byId("uniqueid").getValue();
				obj.email = that.getView().byId("emailid").getValue();
				var updateurl = "/userdataSet(Id='" + that.getView().byId("uniqueid").getValue() + "')";

				myModel.update(updateurl, obj, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Updated Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while updating record - '
							.concat(err.response.statusText));
					}
				});
			}
			// DELETE******************
			if ('Delete' == oEvent.oSource.mProperties.text) {
				var delurl = "/userdataSet(Id='" + that.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Removed Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while removing record - '
							.concat(err.response.statusText));
					}
				});
			}
		}
	});
});