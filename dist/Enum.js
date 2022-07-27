"use strict";
var OptionalChoice;
(function (OptionalChoice) {
    OptionalChoice[OptionalChoice["Exit"] = 0] = "Exit";
    OptionalChoice[OptionalChoice["Show_All_Customer"] = 1] = "Show_All_Customer";
    OptionalChoice[OptionalChoice["Search_Guests_Information"] = 2] = "Search_Guests_Information";
    OptionalChoice[OptionalChoice["Guests_Order"] = 3] = "Guests_Order";
    OptionalChoice[OptionalChoice["Total_Amount_To_Pay"] = 4] = "Total_Amount_To_Pay";
    OptionalChoice[OptionalChoice["Information_of_Hotel_Systems"] = 5] = "Information_of_Hotel_Systems";
})(OptionalChoice || (OptionalChoice = {}));
var AdminChoice;
(function (AdminChoice) {
    AdminChoice[AdminChoice["Exit"] = 0] = "Exit";
    AdminChoice[AdminChoice["Creat_New_Customer"] = 1] = "Creat_New_Customer";
    AdminChoice[AdminChoice["Edit_Guests_Information"] = 2] = "Edit_Guests_Information";
    AdminChoice[AdminChoice["Delete_Guests_Information"] = 3] = "Delete_Guests_Information";
})(AdminChoice || (AdminChoice = {}));
var Edit;
(function (Edit) {
    Edit[Edit["Exit"] = 0] = "Exit";
    Edit[Edit["Edit_All"] = 1] = "Edit_All";
    Edit[Edit["Edit_Name"] = 2] = "Edit_Name";
    Edit[Edit["Edit_date_of_birth"] = 3] = "Edit_date_of_birth";
    Edit[Edit["Edit_days_of_rent"] = 4] = "Edit_days_of_rent";
    Edit[Edit["Edit_type_of_room"] = 5] = "Edit_type_of_room";
})(Edit || (Edit = {}));
var Search;
(function (Search) {
    Search[Search["Exit"] = 0] = "Exit";
    Search[Search["Search_Guests_Information_by_name"] = 1] = "Search_Guests_Information_by_name";
    Search[Search["Search_Guests_Information_by_Date_of_birth"] = 2] = "Search_Guests_Information_by_Date_of_birth";
    Search[Search["Search_Guests_Information_by_ID"] = 3] = "Search_Guests_Information_by_ID";
})(Search || (Search = {}));
var OrderFood;
(function (OrderFood) {
    OrderFood[OrderFood["Exit"] = 0] = "Exit";
    OrderFood[OrderFood["OrderFood"] = 1] = "OrderFood";
})(OrderFood || (OrderFood = {}));
