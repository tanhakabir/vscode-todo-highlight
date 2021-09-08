(()=>{var t={753:(t,e,n)=>{t.exports=n(753)},891:(t,e,n)=>{var o=n(549),i=n(753),r=o.window,a=o.workspace,s="$(checklist)",u="$(zap)",l={"TODO:":{text:"TODO:",color:"#fff",backgroundColor:"#ffbd2a",overviewRulerColor:"rgba(255,189,42,0.8)"},"FIXME:":{text:"FIXME:",color:"#fff",backgroundColor:"#f06292",overviewRulerColor:"rgba(240,98,146,0.8)"}},c={color:"#2196f3",backgroundColor:"#ffeb3b"};function g(t){return Array.isArray(t)?"{"+t.join(",")+"}":"string"==typeof t?t:""}function h(t,e,n,o){for(var i=t.uri.toString(),r=i.substring(7,i.length),a=0;a<t.lineCount;a++){var s=t.lineAt(a).text,u=s.match(o);if(null!==u){e.hasOwnProperty(r)||(e[r]=[]);var l=p(s,u);l.length>500&&(l=l.substring(0,500).trim()+"...");var c=d(i,r,s,a,u),g={uri:c.uri,label:l,detail:c.relativePath,lineNum:a,fileName:c.absPath,startCol:c.startCol,endCol:c.endCol};n.push(g),e[r].push(g)}}}function f(t){if(r.outputChannel)if(r.outputChannel.clear(),0!==t.length){var e=a.getConfiguration("todohighlight").get("toggleURI",!1);t.forEach((function(t,n,o){var a=["#"+(n+1)+"\t"+t.uri+"#"+(t.lineNum+1),"#"+(n+1)+"\t"+t.uri+":"+(t.lineNum+1)+":"+(t.startCol+1)],s=0;i.platform&&"linux"===i.platform()&&(s=1),e&&(s=+!s),r.outputChannel.appendLine(a[s]),r.outputChannel.appendLine("\t"+t.label+"\n")})),r.outputChannel.show()}else r.showInformationMessage("No results")}function p(t,e){return t.substring(t.indexOf(e[0]),t.length)}function d(t,e,n,o,i){var r=a.rootPath+"/",s=e.replace(r,""),u=n.indexOf(i[0]);return{uri:t,absPath:e,relativePath:s+" "+(o+1)+":"+(u+1),startCol:u,endCol:n.length}}function v(t){r.processing=!0,m(s,"0"),console.log("todohighlight err:",t)}function m(t,e,n){r.statusBarItem&&(r.statusBarItem.text=`${t} ${e}`||"",n&&(r.statusBarItem.tooltip=n),r.statusBarItem.show())}t.exports={DEFAULT_STYLE:c,getAssembledData:function(t,e,n){var o={};return t.forEach((t=>{var i=(t="string"==typeof t?{text:t}:t).text;i&&(n||(i=i.toUpperCase()),"TODO:"!=i&&"FIXME:"!=i||(t=Object.assign({},l[i],t)),o[i]=Object.assign({},c,e,t))})),Object.keys(l).forEach((t=>{o[t]||(o[t]=Object.assign({},c,e,l[t]))})),o},chooseAnnotationType:function(t){return r.showQuickPick(t,{})},searchAnnotations:function(t,e,n){var o=a.getConfiguration("todohighlight"),i=g(o.get("include"))||"{**/*}",s=g(o.get("exclude")),l=o.get("maxFilesForSearch",5120),c=" Searching...";r.processing=!0,m(u,c),a.findFiles(i,s,l).then((function(o){if(o&&0!==o.length)for(var i=o.length,s=0,l=0,g={},f=[],p=0;p<i;p++)a.openTextDocument(o[p]).then((function(t){h(t,g,f,e),d()}),(function(t){v(t),d()}));else n({message:"No files found"});function d(){l++,s=Math.floor(l/i*100),m(u,s+"% "+c),(l===i||r.manullyCancel)&&(r.processing=!0,t.update("annotationList",f),n(null,g,f))}}),(function(t){v(t)}))},annotationsFound:function(t,e,n){if(t)return console.log("todohighlight err:",t),void m(s,"0");var o=n.length;m(s,o,o+" result(s) found"),f(n)},createStatusBarItem:function(){var t=r.createStatusBarItem(o.StatusBarAlignment.Left);return t.text="$(checklist)0",t.tooltip="List annotations",t.command="todohighlight.showOutputChannel",t},setStatusMsg:m,showOutputChannel:f,escapeRegExp:function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}}},549:t=>{"use strict";t.exports=require("vscode")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}var o={};(()=>{var t=o,e=n(549),i=n(891),r=e.window,a=e.workspace;t.activate=function(t){var n,o,s,u,l,c,g=null,h=r.activeTextEditor,f=t.workspaceState,p=a.getConfiguration("todohighlight");function d(){if(h&&h.document){for(var t,o=h.document.getText(),i={};t=u.exec(o);){var a=h.document.positionAt(t.index),g=h.document.positionAt(t.index+t[0].length),f={range:new e.Range(a,g)},d=t[0];n||(d=d.toUpperCase()),i[d]?i[d].push(f):i[d]=[f],c.trim()&&!s[d]&&(s[d]=r.createTextEditorDecorationType(l))}Object.keys(s).forEach((t=>{n||(t=t.toUpperCase());var e=p.get("isEnable")&&i[t]?i[t]:[],o=s[t];h.setDecorations(o,e)}))}}function v(t){var a=t.get("defaultStyle");c=t.get("keywordsPattern"),n=t.get("isCaseSensitive",!0),r.statusBarItem||(r.statusBarItem=i.createStatusBarItem()),r.outputChannel||(r.outputChannel=r.createOutputChannel("TodoHighlight")),s={},c.trim()?(l=Object.assign({},i.DEFAULT_STYLE,a,{overviewRulerLane:e.OverviewRulerLane.Right}),u=c):(o=i.getAssembledData(t.get("keywords"),a,n),Object.keys(o).forEach((t=>{n||(t=t.toUpperCase());var i=Object.assign({},{overviewRulerLane:e.OverviewRulerLane.Right},o[t]);i.overviewRulerColor||(i.overviewRulerColor=i.backgroundColor),s[t]=r.createTextEditorDecorationType(i)})),u=Object.keys(o).map((t=>i.escapeRegExp(t))).join("|")),u=new RegExp(u,"gi"),n&&(u=new RegExp(u,"g"))}function m(){g&&clearTimeout(g),g=setTimeout(d,0)}v(p),t.subscriptions.push(e.commands.registerCommand("todohighlight.toggleHighlight",(function(){p.update("isEnable",!p.get("isEnable"),!0).then((function(){m()}))}))),t.subscriptions.push(e.commands.registerCommand("todohighlight.listAnnotations",(function(){if(c.trim())i.searchAnnotations(f,u,i.annotationsFound);else{if(!o)return;var t=Object.keys(o);t.unshift("ALL"),i.chooseAnnotationType(t).then((function(t){if(t){var e=u;"ALL"!=t&&(t=i.escapeRegExp(t),e=new RegExp(t,n?"g":"gi")),i.searchAnnotations(f,e,i.annotationsFound)}}))}}))),t.subscriptions.push(e.commands.registerCommand("todohighlight.showOutputChannel",(function(){var t=f.get("annotationList",[]);i.showOutputChannel(t)}))),h&&m(),r.onDidChangeActiveTextEditor((function(t){h=t,t&&m()}),null,t.subscriptions),a.onDidChangeTextDocument((function(t){h&&t.document===h.document&&m()}),null,t.subscriptions),a.onDidChangeConfiguration((function(){(p=a.getConfiguration("todohighlight")).get("isEnable")&&(v(p),m())}),null,t.subscriptions)}})();var i=exports;for(var r in o)i[r]=o[r];o.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();