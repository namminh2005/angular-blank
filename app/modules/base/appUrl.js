define([], function (module) {
    'use strict';

    var appUrl = {
        HOST_NAME: 'http://localhost/Missnon/',
        // HOST_NAME: 'http://202.215.185.236/missnon/',
        //Login
        LOGIN: 'api/login',
        LOGOUT: 'api/logout',
        GET_USER_INFORMATION_BY_TOKEN: 'Users/getUserInformationByToken',

        //Auth > User
        GET_LIST_USER: 'Users/getListUsers',
        GET_USER: 'Users/getUser',
        ADD_USER: 'Users/addUser',
        EDIT_USER: 'Users/editUser',
        DELETE_USER: 'Users/deleteUser',
        GET_LIST_DELETE_USER: 'Users/getListDeleteUser',
        GET_COMPANY_AND_STORE_BY_USER: 'Users/getCompanyAndStoreByUser',

        // Manager > Inventory export
        INVENTORY_EXPORT: 'Inventory/exportInventoryTemp',
        INVENTORY_RESET: 'Inventory/deleteInventoryTemp',

        // Manager > Update Drug Master
        UPDATE_DRUG_MASTER: 'drugs',
        UPDATE_MEDIS_DRUG: 'drugs/update/medis',
        UPDATE_MEDD_DRUG: 'drugs/update/medd',
        UPDATE_JAN_DRUG: 'drugs/update/jan',

        // Manager > company
        GET_LIST_COMPANY: 'Company/getListCompany',
        ADD_COMPANY: 'Company/addCompany',
        GET_COMPANY_INFORMATION: 'Company/getCompanyInfor',
        UPDATE_COMPANY: 'Company/updateCompany',
        GET_LIST_COMPANY_ID_AND_NAME: 'Company/getListCompanyAndCityForAddStore',
        GET_COMPANIES_ID_AND_NAME_NO_TOKEN: 'Company/getCompaniesIdAndNameNoToken',

        // Manager > Store
        GET_LIST_STORE: 'Stores/getListStore',
        GET_STORE_ID_BY_USER: 'Stores/getStoreIdByUser',
        ADD_STORE: 'Stores/addStore',
        GET_STORE_INFOR: 'Stores/getStoreInfor',
        UPDATE_STORE: 'Stores/updateStore',
        GET_STORES_AND_COMPANY: 'Stores/getListStoresWithCompany',
        DELETE_STORE: 'Stores/deleteStore',

        // Heiyo
        GET_LIST_HEIYO: 'Heiyo/getList',
        GET_HEIYO: 'Heiyo/get',
        EDIT_HEIYO: 'Heiyo/edit',
        DELETE_HEIYO: 'Heiyo/delete',

        // Shelfbox
        GET_LIST_SHELFBOX: 'ShelfBoxes/getList',
        GET_SHELFBOX: 'ShelfBoxes/get',
        GET_DELETING_SHELFBOX: 'ShelfBoxes/getDeleteList',
        EDIT_SHELFBOX: 'ShelfBoxes/edit',
        DELETE_SHELFBOX: 'ShelfBoxes/delete',

        // Yj
        GET_LIST_YJ: 'Yj/getList',
        GET_YJ: 'Yj/get',
        GET_DELETING_YJ: 'Yj/getDeleteList',
        EDIT_YJ: 'Yj/edit',
        DELETE_YJ: 'Yj/delete',

        // Mixed drug
        GET_LIST_MIXED_DRUG: 'MixedDrug/getList',
        GET_MIXED_DRUG: 'MixedDrug/get',
        GET_DELETING_MIXED_DRUG: 'MixedDrug/getDeleteList',
        EDIT_MIXED_DRUG: 'MixedDrug/edit',
        DELETE_MIXED_DRUG: 'MixedDrug/delete',

        // Error Log
        GET_LIST_ERROR_LOG: 'ErrLogs/getListErrlog',
        GET_ERROR_LOG: 'ErrLogs/getErrlog',
        EDIT_ERROR_LOG: 'ErrLogs/editErrlog',

        // System Settings
        GET_LIST_SYSTEM_SETTINGS: 'SystemSettings/getSystemSettings',
        GET_SYSTEM_SETTING: 'SystemSettings/getSystemSetting',
        EDIT_SYSTEM_SETTING: 'SystemSettings/editSystemSetting',

        // Device Management
        GET_LIST_DEVICE: 'Devices/getListDevices',
        GET_DEVICE: 'Devices/getDevice',
        ADD_DEVICE: 'Devices/addDevice',
        EDIT_DEVICE: 'Devices/editDevice',

        // Summary
        GET_LIST_STORE_CITY: 'Summary/getListStore',
        GET_SUMMARY: 'Summary/getSummary',
        GET_SUMMARY_CSV_DATA: 'Summary/getSummary',
        GET_ERROR_CSV_DATA: 'Summary/getCSVErrorData',
        GET_RECEIPT_CSV_DATA: 'Summary/getCSVReceiptData',

        // Receipt
        GET_LIST_RECEIPT: 'Receipts/getReceiptDetails',
        GET_RECEIPT_INFORMATION: 'Receipts/getReceiptInformation',
        UPDATE_RECEIPT: 'Receipts/updateReceipt',

        //Inventory
        GET_LIST_INVENTORY: 'Inventory/getInventories',
        GET_INVENTORY_INFORMATION: 'Inventory/getInventoryInformation',
        UPDATE_INVENTORY: 'Inventory/updateInventory',

        //Print bar code function
        PRINT_BAR_CODE: 'PrintBarCode/getCSV',
        PRINT_DATA: 'PrintBarCode/printData',
        SAVE_CSV: 'PrintBarCode/saveCSV',

        //CSV export function
        CSV_EXPORT_FUNCTION: 'CSV/exportCSV',
        CSV_EXPORT_DOWNLOAD: 'CSV/downloadCSV',

        //Convert DB function
        CONVERT_DB: 'ConvertDB/convert',

        //Drug Master List
        GET_DRUG_MASTER_LIST: 'drugs/getListDrugs',
        ADD_NEW_DRUG: 'drugs/addDrug',
        EDIT_DRUG: 'drugs/editDrug',
        GET_DRUG_INFORMATION: 'drugs/getDrugInformation',
        DELETE_DRUG: 'drugs/deleteDrug',
        DELETE_ALL_DRUG: 'drugs/deleteAllDrug',
        GET_LIST_DELETE_DRUG: 'drugs/getListDeleteDrug'
    };

    return appUrl;

});
