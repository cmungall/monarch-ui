(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["analytics"],{"017c":function(t,e,s){},"2d3b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"selenium_id_content"}},[s("div",{staticClass:"container-fluid monarch-container",attrs:{id:"monarch-home-container"}},[t._m(0),s("div",{staticClass:"col-xs-12 col-md-9"},[s("b-pagination",{staticClass:"table-sm table-border-soft mt-2",attrs:{"total-rows":t.numFound,"per-page":t.rowsPerPage,responsive:"true",size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),s("div",{staticClass:"search-results-rows"},[t.searchResults&&t.searchResults.length>0?s("div",[s("h3",[s("span",{staticClass:"searchTerm"},[t._v(t._s(t.query))]),t._v("  has "),s("span",{staticClass:"searchTerm"},[t._v(t._s(t.numFound))]),t._v(" matches")]),s("b-table",{staticClass:"table-sm table-border-soft",attrs:{fields:t.fields,items:t.rowsProvider,"current-page":t.currentPage,"per-page":t.rowsPerPage,striped:"",responsive:"true",hover:""},scopedSlots:t._u([{key:"label",fn:function(e){return[s("router-link",{attrs:{to:e.item.toLink}},[t._v("\n                  "+t._s(e.item.label)+"\n                ")])]}},{key:"highlight",fn:function(e){return[s("span",{domProps:{innerHTML:t._s(e.item.highlight)}})]}}])})],1):t._e()]),s("footer",{staticClass:"footer"},[s("footer-all")],1)],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"intro"},[s("div",{staticClass:"intro-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 py-2"},[s("p",{staticClass:"intro-text"},[t._v("\n                  Search Results\n                ")])])])])])])}],r=s("4795"),i=s.n(r),c=s("cb0c"),o=s("a74f"),l=s("43a9"),u=25,h={name:"Search",components:{"footer-all":l["default"]},data:function(){return{facets:[],user_facets:{},results:[],highlight:{},searchResults:{},currentPage:1,rowsPerPage:u,numFound:0,numRowsDisplayed:0,selenium_id:"",searching:!0,fields:[{key:"label",label:"Term"},{key:"category",label:"Category"},{key:"taxon",label:"Taxon"},{key:"highlight",label:"Matching String"}]}},mounted:function(){this.query=this.$route.params.query,this.rowsPerPage=this.$route.params.rows?this.$route.params.rows:u,this.search()},methods:{rowsProvider:function(t,e){var s=this;this.search().then(function(t){e(s.searchResults)}).catch(function(t){e([])})},search:function(){var t=Object(c["a"])(i.a.mark(function t(){var e,s,a=this;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=(this.currentPage-1)*this.rowsPerPage,t.next=4,o["g"](this.query,e,this.rowsPerPage);case 4:s=t.sent,this.searchResults=[],this.searchParams={},this.searchFacets={},this.numFound=s.numFound,s.docs.forEach(function(t,e){var n=s.highlighting[t.id],r={category:t.category[0],taxon:t.taxon_label,label:t.label[0],curie:t.id,rows:a.rows,highlight:n.highlight,toLink:"/"+t.category[0]+"/"+t.id,match:n.match,hasHighlight:n.has_highlight};a.searchResults.push(r)}),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log("Search ERROR",t.t0,this);case 15:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}()}},f=h,d=(s("3de7"),s("2877")),m=Object(d["a"])(f,a,n,!1,null,null,null);m.options.__file="Search.vue";e["default"]=m.exports},"31b9":function(t,e,s){"use strict";var a=s("e129"),n=s.n(a);e["default"]=n.a},"31bf":function(t,e,s){t.exports=s.p+"img/tax-heat-plotly.6e271a4e.png"},"32d0":function(t,e,s){"use strict";var a=s("ce13"),n=s.n(a);n.a},"3de7":function(t,e,s){"use strict";var a=s("017c"),n=s.n(a);n.a},"41f2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("h1",[t._v("Monarch Data Graphs")]),a("br"),a("section",{staticClass:"data-dashboard text-center"},[a("h2",[t._v("Monarch Associations")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[a("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("a89b"),alt:"disease"}})]),t._m(0)],1),a("div",{staticClass:"col-sm"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[a("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("8b26"),alt:"genes"}})]),t._m(1)],1),a("div",{staticClass:"col-sm"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[a("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("9360"),alt:"models"}})]),t._m(2)],1)])])]),t._m(3),a("footer-all")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("218,313")]),s("br"),t._v("Disease-Phenotype Associations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("793,526")]),s("br"),t._v("Gene-Phenotype Associations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("20,870")]),s("br"),t._v("Model Associations")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"analytics"},[a("div",[a("h2",[t._v("Counts of species-specific data integrated into Monarch")]),a("img",{staticClass:"center-block text-center img-fluid",staticStyle:{"max-height":"300px"},attrs:{src:s("31bf")}}),a("h4",[t._v("For the top 15 species in Monarch")])])])}],r=s("43a9"),i={name:"Analytics",components:{"footer-all":r["default"]},data:function(){return{}},mounted:function(){}},c=i,o=(s("32d0"),s("2877")),l=Object(o["a"])(c,a,n,!1,null,null,null);l.options.__file="Analytics.vue";e["default"]=l.exports},"43a9":function(t,e,s){"use strict";var a=s("9af4"),n=s("31b9"),r=(s("8936"),s("2877")),i=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);i.options.__file="FooterAll.vue",e["default"]=i.exports},8936:function(t,e,s){"use strict";var a=s("f49e"),n=s.n(a);n.a},"9af4":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-all"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-3"},[s("router-link",{attrs:{to:"/page/about"}},[s("i",{staticClass:"fa fa-info fa-fw"}),s("span",{staticClass:"network-name"},[t._v("\n            About Monarch\n          ")])])],1),t._m(2)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("i",{staticClass:"fa fa-creative-commons fa-fw"}),t._v("\n        CC-BY 3.0, except where noted.\n      ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("a",{attrs:{href:"mailto:info@monarchinitiative.org"}},[s("i",{staticClass:"fa fa-envelope fa-fw"}),s("span",{staticClass:"network-name"},[t._v("Contact Us")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("a",{attrs:{href:"https://archive.monarchinitiative.org/latest/"}},[s("i",{staticClass:"fa fa-download fa-fw"}),s("span",{staticClass:"network-name"},[t._v("\n            Data Downloads\n          ")])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},ce13:function(t,e,s){},e129:function(t,e){},f49e:function(t,e,s){}}]);
//# sourceMappingURL=analytics.f3de98f0.js.map