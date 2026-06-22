/**
 * Visitor logger for adipotnis.github.io
 *
 * SETUP
 * 1. Create a Google Sheet. Note its ID from the URL:
 *      https://docs.google.com/spreadsheets/d/<THIS_IS_THE_ID>/edit
 * 2. Go to script.google.com -> New project, paste this file in.
 * 3. Put the Sheet ID below in SHEET_ID. Leave SHEET_NAME as the tab name
 *    (default first tab is "Sheet1").
 * 4. Deploy -> New deployment -> type "Web app"
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Copy the /exec URL it gives you and paste it into the LOG_ENDPOINT
 *    constant in index.html.
 * 5. (Optional) Run `setupHeaders` once from the editor to write the header row.
 *
 * The client POSTs a JSON body; this appends one row per visit.
 */

var SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
var SHEET_NAME = 'Sheet1';

// Column order — must match the keys read in appendRow below.
var HEADERS = [
  'Timestamp (server)', 'Time (client)', 'IP', 'City', 'Region', 'Country',
  'Postal', 'Coords', 'Timezone', 'Org / ISP', 'ASN', 'Page', 'Referrer',
  'User Agent', 'Language', 'Screen', 'Viewport', 'CPU Cores', 'Device Memory',
  'Network'
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    var row = [
      new Date(),
      data.time || '',
      data.ip || '',
      data.city || '',
      data.region || '',
      data.country || '',
      data.postal || '',
      data.coords || '',
      data.timezone || '',
      data.org || '',
      data.asn || '',
      data.page || '',
      data.referrer || '',
      data.user_agent || '',
      data.language || '',
      data.screen_resolution || '',
      data.viewport_size || '',
      data.cpu_cores || '',
      data.device_memory || '',
      data.network_type || ''
    ];

    // Newest entry on top: insert a fresh row directly under the header (row 1)
    // so the most recent visit is always row 2 and older rows shift down.
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, row.length).setValues([row]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Run this once from the editor to add a header row. */
function setupHeaders() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
}
