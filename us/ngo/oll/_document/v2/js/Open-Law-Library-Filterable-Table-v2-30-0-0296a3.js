"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[559],{246:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"table--filtered"},[t.tableCaption?n("h6",{staticClass:"h__caption"},[t._v("\n\t\t"+t._s(t.tableCaption.content)+"\n\t")]):t._e(),t._v(" "),n("div",{staticClass:"filter-form"},[n("span",{staticClass:"icon icon-funnel"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"filter__input",attrs:{type:"text",placeholder:"Filter table...","aria-label":"Enter search term to filter table results"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),t.tableThead?n("div",{staticClass:"table_wrap"},[n("table",{staticStyle:{width:"100%"}},[t.tableThead?n("thead",t._l(t.tableThead.children,(function(e,r){return n("tr",{key:"trh_"+r},t._l(e.children,(function(e,i){return n("th",{key:"th_"+r+"_"+i},[t._v("\n\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t")])})),0)})),0):t._e(),t._v(" "),t.tableTbody?n("tbody",[t.isFilterEmpty?n("tr",[n("td",{attrs:{colspan:t.colspan}},[t._v("No results")])]):t._l(t.filteredRows,(function(e,r){return n("tr",{key:"trb_"+r},t._l(e.children,(function(e,i){return n("td",{key:"td_"+r+"_"+i,domProps:{innerHTML:t._s(t.highlightMatches(e.content))}})})),0)}))],2):t._e()])]):n("div",{domProps:{innerHTML:t._s(t.processedHtml.outerHTML)}})])};r._withStripped=!0;n(6565),n(957),n(6376),n(1634),n(757),n(2329),n(4273),n(6925),n(1965),n(8786),n(2966),n(7786),n(3460);var i=n(3107),l=n.n(i);const o={name:"TableFilter",props:{rawHtml:{type:String}},data:function(){return{processedHtml:null,tableJson:null,filter:""}},computed:{tableCaption:function(){return this.findEl("caption",this.tableJson)},tableThead:function(){return this.findEl("thead",this.tableJson)},tableTbody:function(){return this.findEl("tbody",this.tableJson)},filteredRows:function(){var t=this;return""!==this.filter.trim()?this.tableTbody.children.filter((function(e){var n=!1;return e.children.forEach((function(e){e.content.toString().toLowerCase().includes(t.filter.toLocaleLowerCase())&&(n=!0)})),!!n&&e})):this.tableTbody.children},colspan:function(){return this.tableThead.children.length+1},isFilterEmpty:function(){return 0===this.filteredRows.length}},watch:{filter:function(t,e){this.debouncedAnnouncement()}},created:function(){this.processHtml(),this.debouncedAnnouncement=l()(this.announcement,1e3)},methods:{tableToJson:function(t){this.tableJson=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e)return!1;var n=String(e.nodeName).toLowerCase(),r={nodeName:n};if(["caption","td","th"].includes(n)&&(r.content=e.textContent.trim()),null!=e&&e.colspan&&(r.colspan=e.colspan),null!=e&&e.rowspan&&(r.rowspan=e.rowspan),(null==e?void 0:e.children.length)>0){null!=r&&r.children||(r.children=[]);for(var i=0;i<e.children.length;i++){var l=e.children[i];r.children[i]=t(l)}}return r}(t)},findEl:function(t,e){var n=!1;return function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(String(r.nodeName)===String(t)&&(n=r),null!=r&&r.children)for(var i=0;i<r.children.length;i++){var l=e(r.children[i]);if(l)break}return n}(e),n},highlightMatches:function(t){if(""!==this.filter.trim()){var e=t.toLowerCase().includes(this.filter.toLowerCase()),n=new RegExp(this.filter,"ig");return e?t.replace(n,(function(t){return'<b class="filter--highlight">'.concat(t,"</b>")})):t}return t},unescapeHtml:function(t){return t.replace(/´/gim,"'")},processHtml:function(){var t=(new DOMParser).parseFromString(this.unescapeHtml(this.$props.rawHtml),"text/html");this.processedHtml=t.activeElement.children[0],this.tableToJson(t.activeElement.firstChild)},announcement:function(){var t="Filtered table results, found ".concat(this.filteredRows.length,' results for query "').concat(this.filter,'"');""!==this.filter.trim()&&(console.log(t),this.$announcer.set(t))}}};var s=(0,n(7446).Z)(o,r,[],!1,null,null,null);s.options.__file="core__front-end/v2/shared/js/components/table-filter/TableFilter.vue";const a=s.exports}}]);