var client_id = context.getVariable("request.queryparam.client_id");
var state = context.getVariable("request.queryparam.state");
var redirect_uri = context.getVariable("request.queryparam.redirect_uri");
var scope = context.getVariable('request.queryparam.scope');
var code = context.getVariable('oauthv2authcode.OA-GenerateAuthCode.code');

//info to store in the cache
context.setVariable("authCodeCache", JSON.stringify({
    code: code,
    scope: scope,
}));

//url to redirect user to
var url = context.getVariable('idp-auth-url') + "?client_id="+client_id+"&state="+state+"&scope="+scope+"&redirect_uri="+redirect_uri+"&response_type=code";
 
context.setVariable("response.header.location", url);
context.setVariable("response.status.code", 307);