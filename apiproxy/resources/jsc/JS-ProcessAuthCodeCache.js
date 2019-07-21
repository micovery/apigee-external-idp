
var authCodeCache = context.getVariable('authCodeCache');
print('authCodeCache: ' + authCodeCache);

if (authCodeCache) {
    authCodeCache = JSON.parse(authCodeCache);
    context.setVariable('original_auth_code', authCodeCache.code);
    context.setVariable('original_scope', authCodeCache.scope);
}