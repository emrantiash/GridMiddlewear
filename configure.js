// api path : 229 
var BASE = 'http://192.168.106.203';
var PORT = '8080' ; 
var TAIL = '/TigerIT-SGS-API';
//var LONGTAIL = '/bill/info/customer/billingaccount';

//server port 
var SERVER_RUNNING_PORT  = '5004' 

module.exports = { 
    HOST : BASE+':'+PORT+TAIL ,
//    LONGHOST : BASE+':'+PORT+TAIL +LONGTAIL,
    PORT : SERVER_RUNNING_PORT    
};

 