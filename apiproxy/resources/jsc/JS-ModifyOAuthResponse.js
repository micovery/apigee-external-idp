var response_json = JSON.parse(context.getVariable('response.content'));
var idpRefreshToken = context.getVariable('idpRefreshToken');
var idpIdToken = context.getVariable('idpIdToken');



var modified_response = {
  access_token: response_json.access_token,
  token_type: response_json.token_type,
  expires_in: parseInt(response_json.expires_in),
  scope: response_json.scope
};

if (idpRefreshToken) {
  modified_response.refresh_token = idpRefreshToken,
  modified_response.refresh_expires_in = parseInt(response_json.refresh_token_expires_in)
}

if (idpIdToken) {
    modified_response.id_token = idpIdToken;
}

context.setVariable('response.content', JSON.stringify(modified_response));