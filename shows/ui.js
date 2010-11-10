function(doc, req) {
  var ddoc = this
    , jade = require('vendor/jade')
    ;

  var context = doc || ddoc.default_context;
  var template = (doc && doc.template) || ddoc.template;

  // For some reason templates want a final line with a token in the first column.
  template += "\n// end";

  var result = jade.render(template, {debug:true, "locals":context, "filename":"jade-template"});
  return { code: 200
         , headers: {"Content-Type": "text/html"}
         , body: result
         }
}
