var e=e=>{e.addCommand("render",function(n,r,t){if(t.matchToken("render")){var a=n.requireElement("expression",t),i={};return t.matchToken("with")&&(i=n.parseElement("namedArgumentList",t)),{args:[a,i],op:function(n,t,i){if(!(t instanceof Element))throw new Error(a.sourceFor()+" is not an element");return n.result=function(n,r){var t=[];return e.evaluate(n,Object.assign({__ht_template_result:t},r)),t.join("")}(function(e){return e.replace(/(?:^|\n)([^@]*)@?/gm,function(e,n){return"\ncall __ht_template_result.push(`"+(" "+n).replace(/([^\\])\$\{/g,"$1$${escape html ").substring(1)+"`)\n"})}(t.innerHTML),i),r.findNext(this,n)}}}}),e.addLeafExpression("escape",function(e,n,r){if(r.matchToken("escape")){var t=r.matchTokenType("IDENTIFIER").value,a=r.matchToken("unescaped");return{args:[e.requireElement("expression",r)],op:function(e,n){if(a)return n;if(void 0===n)return"";if("html"===t)return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\x22/g,"&quot;").replace(/\x27/g,"&#039;");throw new Error("Unknown escape: "+t)},evaluate:function(e){return n.unifiedEval(this,e)}}}})};export{e as default};
//# sourceMappingURL=template.modern.js.map