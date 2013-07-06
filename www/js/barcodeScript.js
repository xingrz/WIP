function scanBarcode() {
    alert("Scan button clicked");

    var scanner = cordova.require("cordova/plugin/BarcodeScanner");

    scanner.scan(function (result) {
        alert("Scanning...");
        $("#ScannedBarcode").val(result.text);
        alert("Scanned!");
    },
		function (error) {
		    alert("Scanning failed: " + error);
		}
	    );
}