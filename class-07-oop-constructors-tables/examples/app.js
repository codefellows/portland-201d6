var hours = ['9am', '10am', '11am'];

function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }

  totalTableHeader.textContent = 'Total';
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
}

function CookieStore(storeName, minCust, maxCust, avgCookies) {
  //var this = {};
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hours = ['9am', '10am', '11am'];

  //return this;
}

CookieStore.prototype.logStoreName = function() {
  console.log(this.name);
}

CookieStore.prototype.toHtml = function() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  var hourlyTableData;

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < this.hours.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = 5;
    tableRow.appendChild(hourlyTableData);
  }

  totalTableData.textContent = 15;
  tableRow.appendChild(totalTableData);

  console.log(tableRow, storeTable)

  storeTable.appendChild(tableRow);
}


