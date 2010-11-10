function(doc, req) {
  var ddoc = this
    , jade = require('vendor/jade')
    ;

  jade.log = log;
  var template = (doc && doc.template) || ddoc.template;
  var context = doc || ddoc.default_context;

  log('Rendering: template size ' + template.length);
  log(template);
  log(context);
  var result = jade.render(template, {debug:true, context:context, "locals":context, "filename":"jade-template"});
  log('Render complete');

  return { code: 200
         , headers: {"Content-Type": "text/html"}
         , body: result
         }
}
