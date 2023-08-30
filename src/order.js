
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}


function takeOrder(order, orderArr) {
  if (orderArr.length < 3) {
    orderArr.push(order)
  }
  return orderArr;
}

function refundOrder(orderNumber, orderArr) {
  for (var i = 0; i < orderArr.length; i++) {
    if (orderNumber === orderArr[i].orderNumber) {
      orderArr.splice(i, 1); // Remove 1 element at index i
      return true; // Indicate successful removal
    }
  }
  return false; // Indicate orderNumber was not found
}

function listItems(orderArr) {
  var itemNames = [];
  for (var i = 0; i < orderArr.length; i++) {
    itemNames.push(orderArr[i].item);
  }
  return itemNames.join(", ");
}

function searchOrder(orderArr, itemName) {
  for (var i = 0; i < orderArr.length; i++) {
    if (orderArr[i].item === itemName) {
      return true;
    }
  }
  return false;
}