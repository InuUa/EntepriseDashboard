(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{e4B2:function(e,t,a){"use strict";var l=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fV52");var i=r(a("3I+P"));a("IzEo");var n=r(a("bx4M"));a("jCWc");var s=r(a("kPKH"));a("14J3");var d=r(a("BMrR"));a("Mwp2");var o=r(a("VXEj")),c=r(a("2Taf")),f=r(a("vZ4D")),u=r(a("l4Ni")),p=r(a("ujKo")),m=r(a("MhPg"));a("aHsQ");var v=r(a("sGsY"));a("Telt");var g=r(a("Tckk"));a("cWXX");var E=r(a("/ezw")),b=l(a("q1tI")),y=r(a("wY1l")),j=a("Hx5s"),h=a("Hg0r"),N=r(a("wd/R")),P=r(a("ylbf")),k=function(e,t,a,l){var r,i=arguments.length,n=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,l);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(i<3?r(n):i>3?r(t,a,n):r(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n},w=function(e){var t=e.currentUser,a=t&&Object.keys(t).length;return a?b.default.createElement("div",{className:P.default.pageHeaderContent},b.default.createElement("div",{className:P.default.avatar},b.default.createElement(g.default,{size:"large",src:t.avatar})),b.default.createElement("div",{className:P.default.content},b.default.createElement("div",{className:P.default.contentTitle},"Project Mugambi \uff0cMama Mugambi"),b.default.createElement("div",null,"Location Ruai"))):b.default.createElement(E.default,{avatar:!0,paragraph:{rows:1},active:!0})},J=function(){return b.default.createElement("div",{className:P.default.extraContent},b.default.createElement("div",{className:P.default.statItem},b.default.createElement(v.default,{title:"Required Finance",value:56e5})),b.default.createElement("div",{className:P.default.statItem},b.default.createElement(v.default,{title:"Stage",value:8,suffix:"/ 24"})),b.default.createElement("div",{className:P.default.statItem},b.default.createElement(v.default,{title:"Used Finance",value:23e5})))},C=function(e){function t(){var e;return(0,c.default)(this,t),e=(0,u.default)(this,(0,p.default)(t).apply(this,arguments)),e.renderActivities=function(e){e.template.split(/@\{([^{}]*)\}/gi).map(function(t){return e[t]?b.default.createElement("a",{href:e[t].link,key:e[t].name},e[t].name):t});return b.default.createElement(o.default.Item,{key:e.id},b.default.createElement(o.default.Item.Meta,{avatar:b.default.createElement(g.default,{src:e.user.avatar}),title:b.default.createElement("span",null,b.default.createElement("a",{className:P.default.username},"Project"),"\xa0",b.default.createElement("span",{className:P.default.event},"crossed"),"\xa0",b.default.createElement("span",{className:P.default.event}," 20 %")),description:b.default.createElement("span",{className:P.default.datetime,title:e.updatedAt},(0,N.default)(e.updatedAt).fromNow())}))},e}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"siteProfile/init"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"siteProfile/clear"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,l=t.activities,r=(t.projectNotice,t.projectLoading),c=t.activitiesLoading;t.radarData;return b.default.createElement(j.PageHeaderWrapper,{content:b.default.createElement(w,{currentUser:a}),extraContent:b.default.createElement(J,null)},b.default.createElement(d.default,{gutter:24},b.default.createElement(s.default,{xl:24,lg:24,md:24,sm:24,xs:24},b.default.createElement(n.default,{className:P.default.projectList,style:{marginBottom:24},title:"Site Pictures",bordered:!1,extra:b.default.createElement(y.default,{to:"/"},"View More"),loading:r,bodyStyle:{padding:0}},b.default.createElement(i.default,{autoplay:!0,className:P.default.slickSlide},b.default.createElement("div",null,b.default.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/inuuafirebase.appspot.com/o/%20JqjJQptb5sBAaJO5HZZ2%2FFoundation1.JPG?alt=media&token=0a99915d-a4e7-477a-8241-92cc8a8905f6",alt:"new"})),b.default.createElement("div",null,b.default.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/inuuafirebase.appspot.com/o/%20JqjJQptb5sBAaJO5HZZ2%2FFoundation3.JPG?alt=media&token=1521d189-fcfa-41ab-83c6-a68214044946",alt:"new"})),b.default.createElement("div",null,b.default.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/inuuafirebase.appspot.com/o/%20JqjJQptb5sBAaJO5HZZ2%2FPlastering.JPG?alt=media&token=8f3913c4-d5e1-4b74-bb8c-5f44e60b32f5",alt:"new"})),b.default.createElement("div",null,b.default.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/inuuafirebase.appspot.com/o/%20JqjJQptb5sBAaJO5HZZ2%2FTiling.jpeg?alt=media&token=7fe389a6-6cdd-4ede-a7ee-4190ac75232f",alt:"new"})))),b.default.createElement(n.default,{bodyStyle:{padding:0},bordered:!1,className:P.default.activeCard,title:"MilesStones",loading:c},b.default.createElement(o.default,{loading:c,renderItem:function(t){return e.renderActivities(t)},dataSource:l,className:P.default.activitiesList,size:"large"})))))}}]),t}(b.Component);C=k([(0,h.connect)(function(e){var t=e.siteProfile,a=t.currentUser,l=t.projectNotice,r=t.activities,i=t.radarData,n=e.loading;return{currentUser:a,projectNotice:l,activities:r,radarData:i,currentUserLoading:n.effects["siteProfile/fetchUserCurrent"],projectLoading:n.effects["siteProfile/fetchProjectNotice"],activitiesLoading:n.effects["siteProfile/fetchActivitiesList"]}})],C);var I=C;t.default=I},ylbf:function(e,t,a){e.exports={slicklide:"antd-pro-pages-site-profile-style-slicklide",activitiesList:"antd-pro-pages-site-profile-style-activitiesList",username:"antd-pro-pages-site-profile-style-username",event:"antd-pro-pages-site-profile-style-event",pageHeaderContent:"antd-pro-pages-site-profile-style-pageHeaderContent",avatar:"antd-pro-pages-site-profile-style-avatar",content:"antd-pro-pages-site-profile-style-content",contentTitle:"antd-pro-pages-site-profile-style-contentTitle",extraContent:"antd-pro-pages-site-profile-style-extraContent",statItem:"antd-pro-pages-site-profile-style-statItem",members:"antd-pro-pages-site-profile-style-members",member:"antd-pro-pages-site-profile-style-member",projectList:"antd-pro-pages-site-profile-style-projectList",cardTitle:"antd-pro-pages-site-profile-style-cardTitle",projectGrid:"antd-pro-pages-site-profile-style-projectGrid",projectItemContent:"antd-pro-pages-site-profile-style-projectItemContent",datetime:"antd-pro-pages-site-profile-style-datetime",activeCard:"antd-pro-pages-site-profile-style-activeCard"}}}]);