function getForm()
{
    alert("Getform start");
    $.ajax({
        type: "POST",
        url: "http://10.23.23.44:3488/FormHandler.aspx/GetForm",
        data: "{formName:'SampleForm1.htm'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            // Replace the div's content with the page method's return.
            $("#Result").html(msg.d).trigger("create");
        }
    });
    alert("Getform end");
}

function submitForm() {
    alert("submitting...");
    var jsonformData = $('#mainForm').serializeArray();
    jsonformData = "'" + JSON.stringify(jsonformData) + "'";
   $.ajax({
        type: "POST",
        url: "http://10.23.23.44:3488/FormHandler.aspx/SubmitForm",
        data: "{userName : 'alphaUser' , formName : 'SampleForm1', formData : " + jsonformData + " }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            alert(msg.d);
        }
    });
}

