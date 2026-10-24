// paste this updated code inside Google Apps Script (Extensions > Apps Script in Google Sheets)
// Then click Deploy > Manage deployments > Click edit icon (pencil) > Under Version select "New version" > Click Deploy.

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)", 
        "Full Name", 
        "Phone Number", 
        "Email Address", 
        "Product / Package Interest", 
        "Message / Requirements"
      ]);
      
      // Style the header row to look neat
      var headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setFontWeight("bold");
      headerRange.setBackgroundColor("#e0e0e0");
    }
    
    // Append the form data
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.product || "",
      data.message || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ready", message: "SMF Lead Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
