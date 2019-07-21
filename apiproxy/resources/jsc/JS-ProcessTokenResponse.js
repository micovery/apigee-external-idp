var response_json = JSON.parse(context.getVariable('response.content'));
context.setVariable('response_json', response_json);

context.setVariable('idpAccessToken', response_json.access_token);
context.setVariable('idpRefreshToken', response_json.refresh_token);

if (!response_json.expires_in) {
  response_json.expires_in = "0";    
}

if (!response_json.refresh_expires_in) {
  response_json.refresh_expires_in = "0";
}

context.setVariable('idpAccessTokenExpiresIn', String(parseInt(response_json.expires_in)*1000));
context.setVariable('idpRefreshTokenExpiresIn', String(parseInt(response_json.refresh_expires_in) *1000));
context.setVariable('idpScope', response_json.scope || "");
context.setVariable('idpIdToken', response_json.id_token || "");

context.setVariable('oauth_external_authorization_status', true);


print(JSON.stringify(response_json, null, 2));



