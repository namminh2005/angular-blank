define([], function (module) {
    'use strict';

    var appConst = {
        filtersType:{
            all: 'all',
            enable: 'enable',
            disable: 'disable'
        },
        shelfFilterTypes: {
            all: 'all',
            g: 'g',
            mL: 'mL',
            mg: 'mg',
            set: 'set',
            lock: 'lock',
            pill: 'pill',
            capsule: 'capsule'
        },
        dateTimeFilterType: {
            anyTime: 'Anytime',
            today: 'Today',
            sevenDays: 'Last 7 days',
            thisMonth: 'This month',
            thisYear: 'This year'
        },
        errorMsgFilterType: {
            all: 'All',
            inputChange: 'receptacle input change',
            changePrescription: 'Change Prescription',
            diffError: 'Different thing error',
            stockShortage: 'Stock shortage',
            quantityError: 'Quantity error'
        },
        modeNameFilterType: {
            all: 'All',
            nsips: 'NSIPS',
            quantityAudit: 'Quantity audit',
            collationIn: 'Collation in',
            pickingMode: 'Picking mode'
        },
        actionType:{
            exportCSV: 'exportCSV',
            printBarCode: 'printBarCode',
        	deleteItem: 'deleteItem'
        },
        sortType:{
            ASC: 'ASC',
            DESC: 'DESC'
        },
        ROLE_TYPE:{
            ALL: -1,
            SYS_ADMIN: 1,
            HEAD_USER: 2,
            ADMIN_STORE: 3,
            PIC: 4,
            PIC_ACCESS_HANDY_MANAGER: 5
        },
        DELETE_ALL_ITEM: 'deleteAllItem'
    };

    return appConst;

});
