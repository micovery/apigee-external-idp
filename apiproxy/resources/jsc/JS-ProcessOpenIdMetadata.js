

var openid_json_config = context.getVariable("idpMetadataRes.content");

if (!openid_json_config) {
    throw new Error('Could not retrieve the OpenID metadata configuration.');
}

var openid_config;

try {
    openid_config = JSON.parse(openid_json_config);
} catch(ex) {
    throw new Error('Could not parse OpenID Metadata as JSON')
}

context.setVariable("authorization_endpoint", openid_config.authorization_endpoint);
context.setVariable("token_endpoint", openid_config.token_endpoint);
context.setVariable("token_introspection_endpoint", openid_config.token_introspection_endpoint);
context.setVariable("userinfo_endpoint", openid_config.userinfo_endpoint);
context.setVariable("end_session_endpoint", openid_config.end_session_endpoint);
context.setVariable("jwks_uri", openid_config.jwks_uri);
context.setVariable("registration_endpoint", openid_config.registration_endpoint);
context.setVariable("introspection_endpoint", openid_config.registration_endpoint);



