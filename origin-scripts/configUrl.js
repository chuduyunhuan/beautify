/**
判断是否使用链接后面用户名,塞到cookie,默认值为false,不使用, 若为 true,会将链接后用户名强制付给cookie
if(isUseToCookie){
     $.cookie("inas_portallogin_user_username", oldUserName);
}
*/


var isUseToCookie = false;

function initCookie(){
       if(isUseToCookie){
            console.log("这里设置cookie");
            $.cookie("inas_portallogin_user_username", currUserName);
       };
};

//configUrl_main

var configUrl_main = {
        query : "/srpt/rcpt/common/query",            //组件下拉特殊处理
	//autoReport
        syncQueryReportUrl : "/srpt/rcpt/syncQueryReportUrl",
        srpt_rcpt_common_update : "/srpt/rcpt/common/update",
        dm_co_ba_srpt_menu_tpl_tableName : "dm_co_ba_srpt_menu_tpl",
        srpt_rcpt_deletePackageUrl : "/srpt/rcpt/deletePackageUrl",
        srpt_rcpt_syncQueryReport : "/srpt/rcpt/syncQueryReport",
        query_menuQueryself : "/srpt/rcpt/common/query",
        //colorDemo
        dm_co_ba_srpt_head_tpl_tableName : "dm_co_ba_srpt_head_tpl",
        query_colorCfg :"/srpt/rcpt/common/query",
        //componentSource
        rcpt_model_getArrangedTree : "/rcpt/model/getArrangedTree",
        //demoConfig
        rcpt_model_getFullMenu : "/rcpt/model/getFullMenu",
        dm_co_ba_srpt_tpl_tableName : "dm_co_ba_srpt_tpl",
        rcpt_model_updateDvcMdlRel : "/rcpt/model/updateDvcMdlRel",
        rcpt_model_updateDeviceModel : "/rcpt/model/updateDeviceModel",
        dm_co_ba_srpt_rel_tpl_tableName : "dm_co_ba_srpt_rel_tpl",
        query_deviceQueryModelInfoToOne : "/srpt/rcpt/common/query",
        update_delete : "/srpt/rcpt/common/update",
        query_deviceQueryModelInfo : "/srpt/rcpt/common/query",
        //fieldArithmeticEdit
        //fieldArithmeticShow
        srpt_rcpt_page : "/srpt/rcpt/page",
        //firstPage
        query_homePageAffiche : "/srpt/rcpt/common/query",
        query_homePageUserQueryTopTen : "/srpt/rcpt/common/query",
        query_homePageCurrentUserRptTopTen : "/srpt/rcpt/common/query",
        query_homePageReportCntTend : "/srpt/rcpt/common/query",
        query_homePageQueryRptAreaTopTen : "/srpt/rcpt/common/query",
        query_homePageUserCntRptCntTopTen : "/srpt/rcpt/common/query",
        srpt_rcpt_home_showLastReport : "/srpt/rcpt/home/showLastReport",
        //mainE
        query_dataSource : "/srpt/rcpt/common/query",
        update_update : "/srpt/rcpt/common/update",   
        dm_co_ba_srpt_menu_tableName :"dm_co_ba_srpt_menu",
        srpt_rcpt_asyncFindByCreator :"/srpt/rcpt/asyncFindByCreator",
        srpt_rcpt_updateLogModuleCode :"/srpt/rcpt/updateLogModuleCode",
        update_insert : "/srpt/rcpt/common/update",
        DM_CO_BA_SRPT_DATA_SOURCE_tableName : "DM_CO_BA_SRPT_DATA_SOURCE",
        DM_CO_BA_SRPT_user_report_rel_tableName : "DM_CO_BA_SRPT_user_report_rel",
        dm_co_ba_srpt_report_tableName : "dm_co_ba_srpt_report",
        query_reportInfo : "/srpt/rcpt/common/query",
        query_menuQuery : "/srpt/rcpt/common/query",
        query_menuQueryParent : "/srpt/rcpt/common/query",
        srpt_rcpt_getColumnDesc : "/srpt/rcpt/getColumnDesc",
        srpt_rcpt_saveColumnDescr : "/srpt/rcpt/saveColumnDescr",
        srpt_cfg_reportInfo : "/sml/invoke/srptAssistantService/queryFieldKpiNames/srpt-cfg-reportInfo",
        //myReport
        //publicReport
        srpt_rcpt_checkOrQueryReport : "/srpt/rcpt/checkOrQueryReport",
        //publicReport
        //publishNotice
        DM_CO_BA_SRPT_AFFICHE_tableName : "DM_CO_BA_SRPT_AFFICHE",
        srpt_rcpt_home_showNotice : "/srpt/rcpt/home/showNotice",
        //publishReport
        srpt_rcpt_syncQueryRoleUser : "/srpt/rcpt/syncQueryRoleUser",
        qiery_queryUsernameByReportid :"/srpt/rcpt/common/query",
        srpt_rcpt_findAllRoleOrMenu : "/srpt/rcpt/findAllRoleOrMenu",
        query_queryUsernameByReportid : "/srpt/rcpt/common/query",
        srpt_rcpt_publishMorePerstoMoreReptFive : "/srpt/rcpt/publishMorePerstoMoreReptFive",

        //reportQuery
        //reportQueryResult
        srpt_rcpt_queryReportFieldColor: "/srpt/rcpt/queryReportFieldColor",
        srpt_rcpt_checkOrQueryReportAuto: "/srpt/rcpt/checkOrQueryReportAuto",
        srpt_rcpt_exportAll: "/srpt/rcpt/exportAll",
        srpt_rcpt_exportBatch_totalCount : "/srpt/rcpt/exportBatch?totalCount=",
        // /systemManager
        srpt_rcpt_publishOnePerstoMoreRept :"/srpt/rcpt/publishOnePerstoMoreRept",
        srpt_rcpt_publishMorePerstoOneRept :"/srpt/rcpt/publishMorePerstoOneRept",
        srpt_rcpt_publishMorePerstoMoreReptOne :"/srpt/rcpt/publishMorePerstoMoreReptOne",
        srpt_rcpt_publishMorePerstoMoreReptTwo :"/srpt/rcpt/publishMorePerstoMoreReptTwo",
        //updateReport
        query_compDropDown :"/srpt/rcpt/common/query"
};
//configUrl_main
var configUrl_mains = {
                query : "/sml/query",            //组件下拉特殊处理
                //autoReport
                syncQueryReportUrl : "/sml/invoke/srptRcptMngService/syncQueryReportUrl/mark",
                srpt_rcpt_common_update : "/sml/update/update",
                dm_co_ba_srpt_menu_tpl_tableName : "dm_co_ba_srpt_menu_tpl",
                srpt_rcpt_deletePackageUrl : "/sml/invoke/srptRcptMngService/deletePackageUrl/mark",
                srpt_rcpt_syncQueryReport : "/sml/invoke/srptRcptPublishService/syncQueryReport/mark",
                query_menuQueryself : "/sml/query/srpt-cfg-menuQueryself",
                //colorDemo
                dm_co_ba_srpt_head_tpl_tableName : "dm_co_ba_srpt_head_tpl",
                query_colorCfg :"/sml/query/srpt-enum-colorCfg",
                //componentSource
                rcpt_model_getArrangedTree : "/sml/invoke/srptRcptModelDevService/getArrangedTree/mark",
                //demoConfig
                rcpt_model_getFullMenu : "/sml/invoke/srptRcptModelDevService/getFullMenu/mark",
                dm_co_ba_srpt_tpl_tableName : "dm_co_ba_srpt_tpl",
                rcpt_model_updateDvcMdlRel : "/sml/invoke/srptRcptModelDevService/updateDvcMdlRel/mark",
                rcpt_model_updateDeviceModel : "/sml/invoke/srptRcptModelDevService/updateDeviceModel/mark",         //--------------------------
                dm_co_ba_srpt_rel_tpl_tableName : "dm_co_ba_srpt_rel_tpl",
                query_deviceQueryModelInfoToOne : "/sml/query/srpt-cfg-deviceQueryModelInfoToOne",            //--------------------------
                update_delete : "/sml/update/delete",
                query_deviceQueryModelInfo : "/sml/query/srpt-cfg-deviceQueryModelInfo",                 //-------------------------
                //fieldArithmeticEdit
                //fieldArithmeticShow
                srpt_rcpt_page : "/sml/invoke/srptRcptMngService/page/mark",
                //firstPage
                query_homePageAffiche : "/sml/query/srpt-cfg-homePageAffiche",
                query_homePageUserQueryTopTen : "/sml/query/srpt-cfg-homePageUserQueryTopTen",
                query_homePageCurrentUserRptTopTen : "/sml/query/srpt-cfg-homePageCurrentUserRptTopTen",
                query_homePageReportCntTend : "/sml/query/srpt-cfg-homePageReportCntTend",
                query_homePageQueryRptAreaTopTen : "/sml/query/srpt-cfg-homePageQueryRptAreaTopTen",
                query_homePageUserCntRptCntTopTen : "/sml/query/srpt-cfg-homePageUserCntRptCntTopTen",
                srpt_rcpt_home_showLastReport : "/sml/invoke/srptRcptHomeService/showLastReport/mark",
                //mainE
                query_dataSource : "/sml/query/srpt-enum-dataSource",
                update_update : "/sml/update/update",   
                dm_co_ba_srpt_menu_tableName :"dm_co_ba_srpt_menu",
                srpt_rcpt_asyncFindByCreator :"/sml/invoke/srptRcptPublishService/asyncFindByCreator/mark",
                srpt_rcpt_updateLogModuleCode :"/sml/invoke/srptRcptMngService/updateLogModuleCode/mark",
                update_insert : "/sml/update/insert",
                DM_CO_BA_SRPT_DATA_SOURCE_tableName : "DM_CO_BA_SRPT_DATA_SOURCE",
                DM_CO_BA_SRPT_user_report_rel_tableName : "DM_CO_BA_SRPT_user_report_rel",
                dm_co_ba_srpt_report_tableName : "dm_co_ba_srpt_report",
                query_reportInfo : "/sml/query/srpt-cfg-reportInfo",
                query_menuQuery : "/sml/query/srpt-cfg-menuQuery",
                query_menuQueryParent : "/sml/query/srpt-cfg-menuQueryParent",
                srpt_rcpt_getColumnDesc : "/sml/invoke/srptRcptMngService/getColumnDesc/mark",
                srpt_rcpt_saveColumnDescr : "/sml/invoke/srptRcptMngService/saveColumnDescr/mark",
                srpt_cfg_reportInfo : "/sml/invoke/srptRcptMngService/queryFieldKpiNames/srpt-cfg-reportInfo",
                //myReport
                //publicReport
                srpt_rcpt_checkOrQueryReport : "/sml/invoke/srptRcptMngService/checkOrQueryReport/mark",
                //publicReport
                //publishNotice
                DM_CO_BA_SRPT_AFFICHE_tableName : "DM_CO_BA_SRPT_AFFICHE",
                srpt_rcpt_home_showNotice : "/sml/invoke/srptRcptHomeService/showNotice/mark",
                //publishReport
                srpt_rcpt_syncQueryRoleUser : "/sml/invoke/srptRcptPublishService/syncQueryRoleUser/mark",
                qiery_queryUsernameByReportid :"/sml/query/srpt-cfg-queryUsernameByReportid",
                query_queryUsernameByReportid : "/sml/query/srpt-cfg-queryUsernameByReportid",
                srpt_rcpt_findAllRoleOrMenu : "/sml/invoke/srptRcptPublishService/findAllRoleOrMenu/mark",
                srpt_rcpt_publishMorePerstoMoreReptFive : "/sml/invoke/srptRcptPublishService/publish/mark",
                //reportQuery
                //reportQueryResult
                srpt_rcpt_queryReportFieldColor: "/sml/invoke/srptRcptMngService/queryReportFieldColor/mark",
                srpt_rcpt_checkOrQueryReportAuto: "/sml/invoke/srptRcptMngService/checkOrQueryReportAuto/mark",
                srpt_rcpt_exportAll: "/sml/invoke/srptRcptMngService/exportAll/mark",
                srpt_rcpt_exportBatch_totalCount : "/sml/invoke/srptRcptMngService/exportBatch/mark?totalCount=",
                // /systemManager
                srpt_rcpt_publishOnePerstoMoreRept :"/sml/invoke/srptRcptPublishService/publish/mark",
                srpt_rcpt_publishMorePerstoOneRept :"/sml/invoke/srptRcptPublishService/publish/mark",
                srpt_rcpt_publishMorePerstoMoreReptOne :"/sml/invoke/srptRcptPublishService/publish/mark",
                srpt_rcpt_publishMorePerstoMoreReptTwo :"/sml/invoke/srptRcptPublishService/publish/mark",
                //updateReport
                query_compDropDown :"/sml/query/srpt-enum-compDropDown"

};