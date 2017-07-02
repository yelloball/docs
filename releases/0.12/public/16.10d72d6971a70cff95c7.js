webpackJsonp([16],{358:function(e,t,i){function s(e){i(645)}var a=i(0)(i(540),i(750),s,null,null);e.exports=a.exports},540:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"lists-view",data:function(){return{doc:{title:"List",component:"list",edit:"ListsView",desc:"The <code>v-list</code> component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists can contain children and are used in the sidebar.",examples:[{header:"Avatar with 2 lines",file:"lists/1",desc:"Lists can take an array of list items. When given an array, the list component will figure out the classes that are needed depending on what it was given. You can also define headers or dividers within the items array."},{header:"Avatar with title and action",file:"lists/2",desc:"Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a tile with an avatar, so we must provide an <code>avatar</code> property."},{header:"Icon with 2 lines and action",file:"lists/3",desc:"Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line."},{header:"Avatar with 3 lines",file:"lists/4",desc:'For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. If you need more than 3 lines, it is adviced to use a <router-link to="/components/cards">card</router-link>.'},{header:"Avatar with title and action",file:"lists/5",desc:"When a lists slot is used, you must manually define whether it contains headers, or if the items contain an avatar. This is required to maintain proper spacing."},{header:"Subheadings and dividers",file:"lists/6",desc:"Lists can contain multple subheaders and dividers."},{header:"Card image with toolbar and list",file:"lists/7",desc:"A list can be combined with a card."},{header:"Title with sub-title, actions and action-text",file:"lists/8",desc:"A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array."},{header:"Action with title and sub-title",file:"lists/9",desc:"A list can contain up to 3 lines."},{header:"Expansion Lists",file:"lists/10",desc:"A list can contain a group of items which will display on click. Expansion lists are also used within the <code>sidebar</code> component."}],props:{"v-list":{params:[["dense","Boolean","False","Lowers max height of list tiles"],["subheader","Boolean","False","Designates that list has a previous sibling subheader"],["two-line","Boolean","False","Designates list contains two-line list tiles"],["three-line","Boolean","False","Designates list contains three-line list tiles"]]},"v-list-tile":{shared:["router"],params:[["avatar","Boolean","False","Used to set minimum tile height on a single-line list item"],["ripple","Boolean","False","Designates whether the list tiles will attach the ripple directive"]],model:{types:["Boolean"],default:"False",description:"Toggles the list tile active state"}},"v-list-group":{params:[["group","String","False","Assign a route namespace"],["no-action","Boolean","False","Removes left padding assigned for action icons from group items"],["lazy","Boolean","False","Conditionally renders content on mounted"]],model:{types:["Boolean"],default:"False",description:"Expands / Collapse list group"}}},functional:{"v-list":{params:[["v-list-item","list__item"],["v-list-tile-action","list__tile__action--stack"],["v-list-tile-action-text","list__tile__action-text"],["v-list-tile-avatar","list__tile__avatar"],["v-list-tile-content","list__tile__content"],["v-list-tile-title","list__tile__title"],["v-list-tile-sub-title","list__tile__sub-title"]]}},slots:{"v-list":{shared:["default"]},"v-list-item":{shared:["default"]},"v-list-tile":{shared:["default"]},"v-list-tile-content":{shared:["default"]},"v-list-tile-title":{shared:["default"]},"v-list-tile-sub-title":{shared:["default"]},"v-list-tile-action":{shared:["default"]},"v-list-tile-action-text":{shared:["default"]},"v-list-tile-avatar":{shared:["default"]},"v-subheader":{shared:["default"]}}}}}}},600:function(e,t,i){t=e.exports=i(127)(void 0),t.push([e.i,"#lists-view .component-example{position:relative;z-index:1}#lists-view .component-example .card{max-width:400px;margin:1rem auto}#lists-view .component-example .card .toolbar{height:auto;min-height:55px}",""])},645:function(e,t,i){var s=i(600);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(128)("40b9f5d6",s,!0)},750:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("component-view",{attrs:{doc:e.doc}},[i("blockquote",[e._v("The three-line prop uses "),i("code",[e._v("-webkit-line-clamp")]),e._v(" which is not supported on all browsers. If not supported, the line will just continue to wrap.")])],1)},staticRenderFns:[]}}});