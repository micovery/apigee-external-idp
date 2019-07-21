var scope = context.getVariable("request.queryparam.scope");
if (scope) {
    scope = scope.split(",").join(" ");
    context.setVariable("request.queryparam.scope", scope);
}