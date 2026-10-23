/**
 * Nhận lead từ landing page INPRO và ghi vào Google Sheet.
 * Cách dùng:
 * 1. Tạo Google Sheet mới > Tiện ích mở rộng > Apps Script, dán toàn bộ file này.
 * 2. Triển khai > Tùy chọn triển khai mới > Loại: Ứng dụng web.
 *    Thực thi dưới tên: Tôi. Ai có quyền truy cập: Bất kỳ ai.
 * 3. Sao chép URL ứng dụng web, dán vào biến SHEET_URL trong index.html và index-light.html.
 */
const SHEET_NAME = 'Leads';
const HEADERS = ['Thời gian','Họ tên','SĐT','Email','Ngành hàng','Nhu cầu','utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbp','fbclid','gclid','Trang','Form'];

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  const d = JSON.parse(e.postData.contents);
  const u = d.utm || {};
  sh.appendRow([
    new Date(d.ts || Date.now()),
    d.name || '', "'" + (d.phone || ''), d.email || '', d.industry || '',
    (d.needs || []).join(', '),
    u.source || '', u.medium || '', u.campaign || '', u.content || '', u.term || '',
    d.fbp || '', d.fbclid || '', d.gclid || '', d.page || '', d.source_form || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok: true})).setMimeType(ContentService.MimeType.JSON);
}
