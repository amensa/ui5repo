function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZCRUD_DEMO_SS_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}