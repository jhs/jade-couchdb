function(newDoc, oldDoc, userCtx) {
  if(userCtx.roles && userCtx.roles.indexOf("_admin") !== -1) {
    log("Approving admin change");
    return
  }

  throw {forbidden: "No updates please"};
}
