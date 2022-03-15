const fs = require("fs");
let googleApis = [
  "https://picasaweb.google.com/data/",
  "https://www.googleapis.com/auth/admin.directory.group",
  "https://www.googleapis.com/auth/admin.directory.group.member",
  "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
  "https://www.googleapis.com/auth/admin.directory.group.readonly",
  "https://www.googleapis.com/auth/admin.directory.user.security",
  "https://www.googleapis.com/auth/analytics",
  "https://www.googleapis.com/auth/analytics.edit",
  "https://www.googleapis.com/auth/analytics.manage.users",
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/androidpublisher",
  "https://www.googleapis.com/auth/apps.groups.settings",
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/contacts",
  "https://www.googleapis.com/auth/contacts.readonly",
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/drive.metadata",
  "https://www.googleapis.com/auth/drive.metadata.readonly",
  "https://www.googleapis.com/auth/drive.readonly",
  "https://www.googleapis.com/auth/gmail.labels",
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/urlshortener",
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.force-ssl",
  "https://www.google.com/m8/feeds/",
];

let temp = googleApis.map((scope) => {
  return {
    label: scope,
    value: scope,
    service: "Google",
    group: scope.split("/")[scope.split("/").length - 1].split(".")[0]
      ? scope.split("/")[scope.split("/").length - 1].split(".")[0]
      : scope.split("/")[scope.split("/").length - 2],
  };
});

let Trello = ["account", "read", "write"];
let Zendesk = ["read", "users:read", "write"];
let DocuSign = ["all", "signature"];
let QuickBooks = [
  "com.intuit.quickbooks.accounting",
  "com.intuit.quickbooks.payment",
];
let Hubspot = ["contacts", "content", "forms"];
let todoist = [
  "data:delete",
  "data:read",
  "data:read_write",
  "project:delete",
  "task:add",
];
let eBay = ["https://api.ebay.com/oauth/api_scope/sell.account"];
let AdobeSign = [
  "agreement_read:self",
  "agreement_send:account",
  "agreement_send:self",
  "agreement_write:self",
  "user_login:self",
];
let Checkr = ["read_write"];
let Webpower = ["rest"];
let Egnyte = [
  "Egnyte.filesystem",
  "Egnyte.link",
  "Egnyte.permission",
  "Egnyte.user",
];
let Box = ["root_readwrite", "manage_webhook"];
let CapsuleCRM = ["read write"];
let GitHub = [
  "read:repo_hook",
  "gist",
  "repo",
  "admin:org",
  "user",
  "notifications",
  "read:org",
  "admin:enterprise",
];
let Medium = ["publishPost", "basicProfile", "listPublications"];
let MeisterTask = ["meistertask"];
let OneNote = ["Notes.Read", "offline_access", "Notes.Create"];
let Shopify = [
  "write_gift_cards",
  "write_draft_orders",
  "read_collection_listings",
  "read_fulfillments",
  "read_customers",
  "write_content",
  "read_orders",
  "read_checkouts",
  "read_draft_orders",
  "read_products",
  "read_locations",
  "write_orders",
  "write_inventory",
  "read_gift_cards",
  "read_price_rules",
  "read_content",
  "write_customers",
  "write_products",
  "write_price_rules",
  "read_product_listings",
];
let Square = [
  "CUSTOMERS_WRITE",
  "CUSTOMERS_READ",
  "INVENTORY_WRITE",
  "INVENTORY_READ",
  "MERCHANT_PROFILE_READ",
  "PAYMENTS_READ",
  "ITEMS_READ",
  "ORDERS_WRITE",
  "ITEMS_WRITE",
  "INVOICES_WRITE",
];
let Typeform = ["forms:read", "offline", "webhooks:read", "webhooks:write"];
let Wrike = [
  "wsReadWrite",
  "amReadOnlyUser",
  "amReadWriteTimelogCategory",
  "wsReadOnly",
  "Default",
  "amReadOnlyTimelogCategory",
];

let myData = {
  Trello,
  Zendesk,
  DocuSign,
  QuickBooks,
  Hubspot,
  todoist,
  eBay,
  AdobeSign,
  Checkr,
  Webpower,
  Egnyte,
  Box,
  CapsuleCRM,
  GitHub,
  Medium,
  MeisterTask,
  OneNote,
  Shopify,
  Square,
  Typeform,
  Wrike,
};

let result = { Google: temp };
Object.keys(myData).map((service) => {
  result[service] = myData[service].map((scope) => {
    return {
      label: scope,
      value: scope,
      service: service,
      group: service,
    };
  });
  // return {[service]: myData[service]};
});

// fs.writeFileSync("GoogleServiceScope.json", JSON.stringify(temp));
fs.writeFileSync("OptialServiceScope.json", JSON.stringify(result));
console.log({ temp: temp, result });
