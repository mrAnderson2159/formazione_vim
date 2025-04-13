var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.PENDING;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
var CustomStart;
(function (CustomStart) {
    CustomStart[CustomStart["a"] = 34] = "a";
    CustomStart[CustomStart["b"] = 35] = "b";
    CustomStart[CustomStart["c"] = 36] = "c";
})(CustomStart || (CustomStart = {}));
var CustomInBetween;
(function (CustomInBetween) {
    CustomInBetween[CustomInBetween["a"] = 0] = "a";
    CustomInBetween[CustomInBetween["b"] = 100] = "b";
    CustomInBetween[CustomInBetween["c"] = 101] = "c";
    CustomInBetween[CustomInBetween["d"] = 102] = "d";
})(CustomInBetween || (CustomInBetween = {}));
var CustomString;
(function (CustomString) {
    CustomString["apple"] = "apple";
    CustomString["banana"] = "banana";
    CustomString["cherry"] = "cherry";
})(CustomString || (CustomString = {}));
var CustomStringWithNumber;
(function (CustomStringWithNumber) {
    CustomStringWithNumber["apple"] = "apple";
    CustomStringWithNumber[CustomStringWithNumber["banana"] = 2] = "banana";
    CustomStringWithNumber["cherry"] = "cherry";
})(CustomStringWithNumber || (CustomStringWithNumber = {}));
