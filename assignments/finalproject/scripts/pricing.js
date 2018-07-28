var table = document.querySelector('table');
      var priceList = JSON.parse(pricing);
      populateTable(priceList);
    
    function populateTable(jsonObj) {
  var items = jsonObj[0];
      
  for (var i = 0; i < items.length; i++) {
    var myTR = document.createElement('tr');
    table.appendChild(myTR);
    
    var myTD1 = document.createElement('td');
    var myTD2 = document.createElement('td');
    
    myTD1.textContent = items[i].service;
    myTD2.textContent = items[i].price;
      
    myTR.appendChild(myTD1);
    myTR.appendChild(myTD2);
  }
}