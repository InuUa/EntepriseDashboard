(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1R8N":function(e,t,a){e.exports={area_code:"antd-pro-pages-sacco-profile-components-phone-view-area_code",phone_number:"antd-pro-pages-sacco-profile-components-phone-view-phone_number"}},"4Btt":function(e,t,a){e.exports={main:"antd-pro-pages-sacco-profile-style-main",leftMenu:"antd-pro-pages-sacco-profile-style-leftMenu",right:"antd-pro-pages-sacco-profile-style-right",title:"antd-pro-pages-sacco-profile-style-title"}},HVCd:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var n=i(a("5rEg")),o=i(a("2Taf")),l=i(a("vZ4D")),s=i(a("l4Ni")),c=i(a("ujKo")),u=i(a("MhPg")),d=r(a("q1tI")),f=i(a("1R8N")),p=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,r=["",""];return t&&(r=t.split("-")),d.default.createElement(d.Fragment,null,d.default.createElement(n.default,{className:f.default.area_code,value:r[0],onChange:function(e){a&&a("".concat(e.target.value,"-").concat(r[1]))}}),d.default.createElement(n.default,{className:f.default.phone_number,onChange:function(e){a&&a("".concat(r[0],"-").concat(e.target.value))},value:r[1]}))}}]),t}(d.PureComponent),m=p;t.default=m},ItMB:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=i(a("VXEj"));a("Pwec");var o=i(a("CtXQ")),l=i(a("2Taf")),s=i(a("vZ4D")),c=i(a("l4Ni")),u=i(a("ujKo")),d=i(a("MhPg")),f=a("Y2fQ"),p=r(a("q1tI")),m=function(e){function t(){var e;return(0,l.default)(this,t),e=(0,c.default)(this,(0,u.default)(t).apply(this,arguments)),e.getData=function(){return[{title:(0,f.formatMessage)({id:"saccoprofile.binding.taobao"},{}),description:(0,f.formatMessage)({id:"saccoprofile.binding.taobao-description"},{}),actions:[p.default.createElement("a",{key:"Bind"},p.default.createElement(f.FormattedMessage,{id:"saccoprofile.binding.bind",defaultMessage:"Bind"}))],avatar:p.default.createElement(o.default,{type:"taobao",className:"taobao"})},{title:(0,f.formatMessage)({id:"saccoprofile.binding.alipay"},{}),description:(0,f.formatMessage)({id:"saccoprofile.binding.alipay-description"},{}),actions:[p.default.createElement("a",{key:"Bind"},p.default.createElement(f.FormattedMessage,{id:"saccoprofile.binding.bind",defaultMessage:"Bind"}))],avatar:p.default.createElement(o.default,{type:"alipay",className:"alipay"})},{title:(0,f.formatMessage)({id:"saccoprofile.binding.dingding"},{}),description:(0,f.formatMessage)({id:"saccoprofile.binding.dingding-description"},{}),actions:[p.default.createElement("a",{key:"Bind"},p.default.createElement(f.FormattedMessage,{id:"saccoprofile.binding.bind",defaultMessage:"Bind"}))],avatar:p.default.createElement(o.default,{type:"dingding",className:"dingding"})}]},e}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return p.default.createElement(p.Fragment,null,p.default.createElement(n.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return p.default.createElement(n.default.Item,{actions:e.actions},p.default.createElement(n.default.Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),t}(p.Component),g=m;t.default=g},MLZ4:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("2Taf")),o=i(a("vZ4D")),l=i(a("l4Ni")),s=i(a("ujKo")),c=i(a("MhPg"));a("lUTK");var u=i(a("BvKs")),d=r(a("q1tI")),f=a("Y2fQ"),p=a("Hx5s"),m=a("Hg0r"),g=i(a("QTmf")),v=i(a("ItMB")),y=i(a("WDIp")),h=i(a("dyUJ")),M=i(a("4Btt")),b=function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},E=u.default.Item,w=function(e){function t(e){var a;(0,n.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this,e)),a.main=void 0,a.getMenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return d.default.createElement(E,{key:t},e[t])})},a.getRightTitle=function(){var e=a.state,t=e.selectKey,r=e.menuMap;return r[t]},a.selectKey=function(e){a.setState({selectKey:e})},a.resize=function(){a.main&&requestAnimationFrame(function(){if(a.main){var e="inline",t=a.main.offsetWidth;a.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})}})},a.renderChildren=function(){var e=a.state.selectKey;switch(e){case"base":return d.default.createElement(g.default,null);case"security":return d.default.createElement(h.default,null);case"binding":return d.default.createElement(v.default,null);case"notification":return d.default.createElement(y.default,null);default:break}return null};var r={base:d.default.createElement(f.FormattedMessage,{id:"saccoprofile.menuMap.basic",defaultMessage:"Basic Settings"}),security:d.default.createElement(f.FormattedMessage,{id:"saccoprofile.menuMap.security",defaultMessage:"Security Settings"}),binding:d.default.createElement(f.FormattedMessage,{id:"saccoprofile.menuMap.binding",defaultMessage:"Account Binding"}),notification:d.default.createElement(f.FormattedMessage,{id:"saccoprofile.menuMap.notification",defaultMessage:"New Message Notification"})};return a.state={mode:"inline",menuMap:r,selectKey:"base"},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"saccoProfile/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.currentUser;if(!t.userid)return"";var a=this.state,r=a.mode,i=a.selectKey;return d.default.createElement(p.GridContent,null,d.default.createElement("div",{className:M.default.main,ref:function(t){t&&(e.main=t)}},d.default.createElement("div",{className:M.default.leftMenu},d.default.createElement(u.default,{mode:r,selectedKeys:[i],onClick:function(t){var a=t.key;return e.selectKey(a)}},this.getMenu())),d.default.createElement("div",{className:M.default.right},d.default.createElement("div",{className:M.default.title},this.getRightTitle()),this.renderChildren())))}}]),t}(d.Component);w=b([(0,m.connect)(function(e){var t=e.saccoProfile;return{currentUser:t.currentUser}})],w);var k=w;t.default=k},QTmf:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var n=i(a("5rEg"));a("miYZ");var o=i(a("tsqr")),l=i(a("2Taf")),s=i(a("vZ4D")),c=i(a("l4Ni")),u=i(a("ujKo")),d=i(a("MhPg"));a("+L6B");var f=i(a("2/Rp"));a("DZo9");var p=i(a("8z0m"));a("OaEy");var m=i(a("2fM7"));a("y8nQ");var g=i(a("Vl3Y")),v=a("Y2fQ"),y=r(a("q1tI")),h=a("Hg0r"),M=i(a("x8Ah")),b=i(a("HVCd")),E=i(a("j2v8")),w=function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},k=g.default.Item,P=m.default.Option,N=function(e){var t=e.avatar;return y.default.createElement(y.Fragment,null,y.default.createElement("div",{className:E.default.avatar_title},y.default.createElement(v.FormattedMessage,{id:"saccoprofile.basic.avatar",defaultMessage:"Avatar"})),y.default.createElement("div",{className:E.default.avatar},y.default.createElement("img",{src:t,alt:"avatar"})),y.default.createElement(p.default,{fileList:[]},y.default.createElement("div",{className:E.default.button_view},y.default.createElement(f.default,{icon:"upload"},y.default.createElement(v.FormattedMessage,{id:"saccoprofile.basic.change-avatar",defaultMessage:"Change avatar"})))))},C=function(e,t,a){var r=t.province,i=t.city;r.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},j=function(e,t,a){var r=t.split("-");r[0]||a("Please input your area code!"),r[1]||a("Please input your phone number!"),a()},I=function(e){function t(){var e;return(0,l.default)(this,t),e=(0,c.default)(this,(0,u.default)(t).apply(this,arguments)),e.view=void 0,e.setBaseInfo=function(){var t=e.props,a=t.currentUser,r=t.form;a&&Object.keys(r.getFieldsValue()).forEach(function(e){var t={};t[e]=a[e]||null,r.setFieldsValue(t)})},e.getViewDom=function(t){e.view=t},e.handlerSubmit=function(t){t.preventDefault();var a=e.props.form;a.validateFields(function(e){e||o.default.success((0,v.formatMessage)({id:"saccoprofile.basic.update.success"}))})},e}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e){if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}return""}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return y.default.createElement("div",{className:E.default.baseView,ref:this.getViewDom},y.default.createElement("div",{className:E.default.left},y.default.createElement(g.default,{layout:"vertical",hideRequiredMark:!0},y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.email"})},e("email",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.email-message"},{})}]})(y.default.createElement(n.default,null))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.nickname"})},e("name",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.nickname-message"},{})}]})(y.default.createElement(n.default,null))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.profile"})},e("profile",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.profile-message"},{})}]})(y.default.createElement(n.default.TextArea,{placeholder:(0,v.formatMessage)({id:"saccoprofile.basic.profile-placeholder"}),rows:4}))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.country"})},e("country",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.country-message"},{})}]})(y.default.createElement(m.default,{style:{maxWidth:220}},y.default.createElement(P,{value:"China"},"\u4e2d\u56fd")))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.geographic"})},e("geographic",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.geographic-message"},{})},{validator:C}]})(y.default.createElement(M.default,null))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.address"})},e("address",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.address-message"},{})}]})(y.default.createElement(n.default,null))),y.default.createElement(k,{label:(0,v.formatMessage)({id:"saccoprofile.basic.phone"})},e("phone",{rules:[{required:!0,message:(0,v.formatMessage)({id:"saccoprofile.basic.phone-message"},{})},{validator:j}]})(y.default.createElement(b.default,null))),y.default.createElement(f.default,{type:"primary",onClick:this.handlerSubmit},y.default.createElement(v.FormattedMessage,{id:"saccoprofile.basic.update",defaultMessage:"Update Information"})))),y.default.createElement("div",{className:E.default.right},y.default.createElement(N,{avatar:this.getAvatarURL()})))}}]),t}(y.Component);I=w([(0,h.connect)(function(e){var t=e.saccoProfile;return{currentUser:t.currentUser}})],I);var O=g.default.create()(I);t.default=O},WDIp:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=i(a("VXEj"));a("BoS7");var o=i(a("Sdc0")),l=i(a("2Taf")),s=i(a("vZ4D")),c=i(a("l4Ni")),u=i(a("ujKo")),d=i(a("MhPg")),f=r(a("q1tI")),p=a("Y2fQ"),m=function(e){function t(){var e;return(0,l.default)(this,t),e=(0,c.default)(this,(0,u.default)(t).apply(this,arguments)),e.getData=function(){var e=f.default.createElement(o.default,{checkedChildren:(0,p.formatMessage)({id:"saccoprofile.settings.open"}),unCheckedChildren:(0,p.formatMessage)({id:"saccoprofile.settings.close"}),defaultChecked:!0});return[{title:(0,p.formatMessage)({id:"saccoprofile.notification.password"},{}),description:(0,p.formatMessage)({id:"saccoprofile.notification.password-description"},{}),actions:[e]},{title:(0,p.formatMessage)({id:"saccoprofile.notification.messages"},{}),description:(0,p.formatMessage)({id:"saccoprofile.notification.messages-description"},{}),actions:[e]},{title:(0,p.formatMessage)({id:"saccoprofile.notification.todo"},{}),description:(0,p.formatMessage)({id:"saccoprofile.notification.todo-description"},{}),actions:[e]}]},e}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.getData();return f.default.createElement(f.Fragment,null,f.default.createElement(n.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return f.default.createElement(n.default.Item,{actions:e.actions},f.default.createElement(n.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f.Component),g=m;t.default=g},ZVEb:function(e,t,a){e.exports={row:"antd-pro-pages-sacco-profile-components-geographic-view-row",item:"antd-pro-pages-sacco-profile-components-geographic-view-item"}},dyUJ:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=i(a("VXEj")),o=i(a("2Taf")),l=i(a("vZ4D")),s=i(a("l4Ni")),c=i(a("ujKo")),u=i(a("MhPg")),d=a("Y2fQ"),f=r(a("q1tI")),p={strong:f.default.createElement("span",{className:"strong"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.strong",defaultMessage:"Strong"})),medium:f.default.createElement("span",{className:"medium"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.medium",defaultMessage:"Medium"})),weak:f.default.createElement("span",{className:"weak"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.weak",defaultMessage:"Weak"}),"Weak")},m=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments)),e.getData=function(){return[{title:(0,d.formatMessage)({id:"saccoprofile.security.password"},{}),description:f.default.createElement(f.Fragment,null,(0,d.formatMessage)({id:"saccoprofile.security.password-description"}),"\uff1a",p.strong),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"saccoprofile.security.phone"},{}),description:"".concat((0,d.formatMessage)({id:"saccoprofile.security.phone-description"},{}),"\uff1a138****8293"),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"saccoprofile.security.question"},{}),description:(0,d.formatMessage)({id:"saccoprofile.security.question-description"},{}),actions:[f.default.createElement("a",{key:"Set"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.set",defaultMessage:"Set"}))]},{title:(0,d.formatMessage)({id:"saccoprofile.security.email"},{}),description:"".concat((0,d.formatMessage)({id:"saccoprofile.security.email-description"},{}),"\uff1aant***sign.com"),actions:[f.default.createElement("a",{key:"Modify"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.modify",defaultMessage:"Modify"}))]},{title:(0,d.formatMessage)({id:"saccoprofile.security.mfa"},{}),description:(0,d.formatMessage)({id:"saccoprofile.security.mfa-description"},{}),actions:[f.default.createElement("a",{key:"bind"},f.default.createElement(d.FormattedMessage,{id:"saccoprofile.security.bind",defaultMessage:"Bind"}))]}]},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.getData();return f.default.createElement(f.Fragment,null,f.default.createElement(n.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return f.default.createElement(n.default.Item,{actions:e.actions},f.default.createElement(n.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f.Component),g=m;t.default=g},j2v8:function(e,t,a){e.exports={baseView:"antd-pro-pages-sacco-profile-components-base-view-baseView",left:"antd-pro-pages-sacco-profile-components-base-view-left",right:"antd-pro-pages-sacco-profile-components-base-view-right",avatar_title:"antd-pro-pages-sacco-profile-components-base-view-avatar_title",avatar:"antd-pro-pages-sacco-profile-components-base-view-avatar",button_view:"antd-pro-pages-sacco-profile-components-base-view-button_view"}},x8Ah:function(e,t,a){"use strict";var r=a("tAuX"),i=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var n=i(a("W9HT")),o=i(a("2Taf")),l=i(a("vZ4D")),s=i(a("l4Ni")),c=i(a("ujKo")),u=i(a("MhPg"));a("OaEy");var d=i(a("2fM7")),f=r(a("q1tI")),p=a("Hg0r"),m=i(a("ZVEb")),g=function(e,t,a,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(n<3?i(o):n>3?i(t,a,o):i(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},v=d.default.Option,y={label:"",key:""},h=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments)),e.componentDidMount=function(){var t=e.props.dispatch;t&&t({type:"saccoProfile/fetchProvince"})},e.getCityOption=function(){var t=e.props.city;return t?e.getOption(t):[]},e.getOption=function(e){return!e||e.length<1?f.default.createElement(v,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map(function(e){return f.default.createElement(v,{key:e.id,value:e.id},e.name)})},e.selectProvinceItem=function(t){var a=e.props,r=a.dispatch,i=a.onChange;r&&r({type:"saccoProfile/fetchCity",payload:t.key}),i&&i({province:t,city:y})},e.selectCityItem=function(t){var a=e.props,r=a.value,i=a.onChange;r&&i&&i({province:r.province,city:t})},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,r=t.value;!e.value&&r&&r.province&&a&&a({type:"saccoProfile/fetchCity",payload:r.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return e?this.getOption(e):[]}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:y,city:y};var t=e.province,a=e.city;return{province:t||y,city:a||y}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,r=this.props.loading;return f.default.createElement(n.default,{spinning:r,wrapperClassName:m.default.row},f.default.createElement(d.default,{className:m.default.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),f.default.createElement(d.default,{className:m.default.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),t}(f.Component);h=g([(0,p.connect)(function(e){var t=e.saccoProfile,a=e.loading,r=t.province,i=t.city;return{province:r,city:i,loading:a.models.saccoProfile}})],h);var M=h;t.default=M}}]);