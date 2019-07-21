var response_json = JSON.parse(context.getVariable('response.content'));

context.setVariable('idpClientName', response_json.client_name);
context.setVariable('idpClientId', response_json.client_id);
context.setVariable('idpClientSecret', response_json.client_secret);


var api_products = context.getVariable('api_products');
if (api_products && api_products.split) {
    api_products = api_products.split(',');
} else {
    api_products = [];
}

context.setVariable('api_products', JSON.stringify(api_products));

context.setVariable('create_edge_app_payload', JSON.stringify({
  "name" : response_json.client_name,
  "apiProducts": api_products,
  "callbackUrl" : response_json.redirect_uris[0]
}));