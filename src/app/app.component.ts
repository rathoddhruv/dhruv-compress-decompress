import { OnDestroy, OnInit, Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Inject } from '@angular/core';
import {LZStringService} from 'ng-lz-string';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor(
    @Inject(Location) private readonly location: PathLocationStrategy,
    private lz: LZStringService
  ) {
    console.log("path:"+this.location.path());
    const compressed = this.lz.compress('{"selectedFeature":"dashboard","selectedNode":"","deviceType":"desktop","browser":"Chrome","browserVersion":"84.0.4147.135","device":"Unknown","os":"Windows","osVersion":"windows-10","userAgent":"","screenHeight":1627,"screenWidth":3072,"userUuid":"4f4d0e2e-f45f-4896-9fd0-a0e38a6107d7","isMobile":false,"isDesk":true,"isTab":false,"isUserInSetting":false,"isSignIn":true,"isLogin":false,"isReg":false,"isUpdatePwd":false,"isDashboard":false,"isForgotPassword":false,"isResetPassword":false,"isAccountSummaryVisible":true,"topHeaderSearchSelect":true,"sideHeaderSearchSelect":false,"parentDetails":[],"graphAnimationSpeed":100,"maxTreeChildLimit":25,"pageSize":50,"dateTimeFormat":"llll","lSplitterVisible":true,"isTreeViewAllowed":true,"firstName":"System","lastName":"Admin","emailAddress":"sysadmin@powertakeoff.com","lastLoginTs":"Thu, Aug 27, 2020 9:57 AM","forgotPassLink":false,"nodeID":"","nodeLabel":"SystemRoot","nodeTypeId":"","nodeTypeLabel":"","uniqueIdentifier":"062787065_G|1","clientParentList":"","utilParentList":"","homeNodeUuid":"6f860bf1-fe5f-41b9-b879-dfe06a079535","selectedNodeId":"","selectedNodeLabel":"062787065_G|1","selectedNodeTypeId":7,"selectedNodeTypeLabel":"Channel","selectedNodeUuid":"c1ee7402-a1ac-33f6-9766-19bdf07c5273","selectedUniqueIdentifier":"","entitlements":[{"entitlementId":9,"ekey":"ekey_add_user_now","type":"FE","group":"Admin","name":"Add User Now","description":"Able to add user to the application"},{"entitlementId":17,"ekey":"ekey_advanced_search","type":"FE","group":"Graph","name":"Advanced Search","description":"Able to use various advanced search features"},{"entitlementId":13,"ekey":"ekey_pre_prospecting","type":"FE","group":"Prospecting","name":"Do PreProspecting","description":"Able to access pre prospecting"},{"entitlementId":11,"ekey":"ekey_prospecting","type":"FE","group":"Prospecting","name":"Do Prospecting","description":"Able to access prospecting"},{"entitlementId":18,"ekey":"ekey_graph_view_account_details","type":"FE","group":"Graph","name":"Graph / View Account Details","description":"Able to see details of the account and a satellite view of the location"},{"entitlementId":16,"ekey":"ekey_graph_view_savings_calculator","type":"FE","group":"Graph","name":"Graph / View Opportunity Calculator","description":"Able to view and use the Opportunity Calculator"},{"entitlementId":15,"ekey":"ekey_graph_view_peak_total","type":"FE","group":"Graph","name":"Graph / View Peak and Total","description":"Able to see Peak Demand and Total Consumption information"},{"entitlementId":10,"ekey":"ekey_manage_attributes","type":"FE","group":"Admin","name":"Manage Attributes","description":"Able to access attributes management"},{"entitlementId":4,"ekey":"ekey_access_manage_nodes","type":"FE","group":"Admin","name":"Manage Nodes","description":"Able to access node management"},{"entitlementId":21,"ekey":"ekey_manage_notifications","type":"FE","group":"General","name":"Manage Notifications","description":"Able to access Manage Notifications"},{"entitlementId":6,"ekey":"ekey_access_manage_roles","type":"FE","group":"Data Settings","name":"Manage Roles","description":"Able to access role management"},{"entitlementId":22,"ekey":"ekey_manage_user_settings","type":"FE","group":"General","name":"Manage User Settings","description":"Able to access Manage User Settings"},{"entitlementId":3,"ekey":"ekey_access_manage_users","type":"FE","group":"Admin","name":"Manage Users","description":"Able to access user management"},{"entitlementId":8,"ekey":"ekey_access_manage_weather","type":"FE","group":"Data Settings","name":"Manage Weather","description":"Able to access weather management"},{"entitlementId":19,"ekey":"ekey_rerun_jobs","type":"FE","group":"System Tools","name":"Rerun the Jobs","description":"Able to Rerun the Jobs"},{"entitlementId":20,"ekey":"ekey_view_activities","type":"FE","group":"View Activities","name":"View Activities","description":"Able to see a list of activities that have occurred"},{"entitlementId":2,"ekey":"ekey_dashboard","type":"FE","group":"General","name":"View Dashboard","description":"Able to view and use the dashboard"},{"entitlementId":7,"ekey":"ekey_access_manage_data_capture","type":"FE","group":"System Tools","name":"View Data Mgmt","description":"Able to access data capture views and tools"},{"entitlementId":5,"ekey":"ekey_access_interval_data_graph","type":"FE","group":"Graph","name":"View Graph","description":"Able to access the interval-data graph"},{"entitlementId":12,"ekey":"ekey_job_status","type":"FE","group":"System Tools","name":"View Job Status","description":"Able to access job status"},{"entitlementId":14,"ekey":"ekey_system_reports","type":"FE","group":"General","name":"View System Reports","description":"Able to access system reports"},{"entitlementId":1,"ekey":"ekey_view_tree","type":"FE","group":"General","name":"View Tree","description":"Able to view and use the tree for navigation"}],"entitlementsObj":{"ekey_dashboard":true,"ekey_view_tree":true,"ekey_prospecting":true,"ekey_graph_view_savings_calculator":true,"ekey_access_manage_users":true,"ekey_access_manage_nodes":true,"ekey_access_interval_data_graph":true,"ekey_access_manage_roles":true,"ekey_access_system_tools":false,"ekey_access_manage_data_capture":true,"ekey_graph_view_account_details":true,"ekey_manage_attributes":true,"ekey_access_manage_weather":true,"ekey_add_user_now":true,"ekey_job_status":true,"ekey_pre_prospecting":true,"ekey_system_reports":true,"ekey_advanced_search":true,"ekey_view_activities":true,"ekey_manage_notifications":true,"ekey_manage_user_settings":true,"ekey_graph_view_peak_total":true,"ekey_rerun_jobs":true,"ekey_graph_import_graph_node_list":false},"attributeDataList":{"googleSiteId":null,"servicePhone":null,"contactEmail":null,"servicePostalCode":null,"serviceCity":null,"contactFirstName":null,"serviceAddress":null,"timeZone":"America/Vancouver","channelType":"CONSUMPTION","heatingWeeks":"23","deviceName":null,"rateCode":null,"inputUnit":"KWH","deviceSerial":null,"contactTitle":null,"meterDisplayInterval":null,"defaultNodeType":null,"rate":"9","meterType":"HISTORICAL_INTERVAL","contactLastName":null,"weatherStation":"140ecd79-3dd7-4371-ab17-f4dc74314b07","dataSource":"default","coolingWeeks":"19","naicsCode":null},"currentNodeList":[],"isProspectCurrList":false,"graphDrawerIsOpen":false,"isNewDrowOfGraph":true,"attributes":[],"passwordExpiry":1,"topNodes":[{"nodeUuid":"6f860bf1-fe5f-41b9-b879-dfe06a079535","roleUuid":"fef0e6bd-067f-4caa-a9d7-ac81f46458a1"}],"settingPanelHeight":5.654578979717271}');
    console.log(compressed);

    let original = this.lz.decompress(compressed);

    console.log(original);
  }


  public setState(key: string, data: any) {
    if (typeof data === 'object') {
      const strData = JSON.stringify(data);
      localStorage.setItem(key, strData);
    } else {
      localStorage.setItem(key, data);
    }
  }

  public getState(key: string): any {
    const strData = localStorage.getItem(key);
    try {
      const parsedObject = JSON.parse(strData);
      return parsedObject;
    } catch (error) {
      return strData;
    }
  }

  ngOnInit() {
    var x = '{"test": "Gaurav"}';
    this.setState("x", x);

    var objX = new Test();
    objX.T = "objX";
    this.setState("obj", objX);

    var y = this.getState("x");
    this.getState("x").x=5;

    var obj = this.getState("obj");
    console.log(y);
    console.log(obj);
  }
}

export class Test{
  public T:string = "x";
}