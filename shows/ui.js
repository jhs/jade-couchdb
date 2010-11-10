function(doc, req) {
  var ddoc = this
    , jade = require('vendor/jade')
    ;

  var template = (doc && doc.template) || ddoc.template;
  var context = doc || ddoc.default_context;

  var result = jade.render(template, {debug:true, "locals":context, "filename":"jade-template"});
  return { code: 200
         , headers: {"Content-Type": "text/html"}
         , body: result
         }
}
