(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-006dbb7a"],{"2f79":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o={class:"page-wrap"},n={class:"header-section has-header-main"};function r(e,t,c,r,s,l){const i=Object(a["resolveComponent"])("HeaderMain"),b=Object(a["resolveComponent"])("HeroFour"),d=Object(a["resolveComponent"])("ExhibitionCarousel"),m=Object(a["resolveComponent"])("Exhibition-cards"),O=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("header",n,[Object(a["createVNode"])(i),Object(a["createVNode"])(b,{classname:"hero-title",title:s.SectionData.breadcrumbData.breadcrumbListExhibition.title,lists:s.SectionData.breadcrumbData.breadcrumbListExhibition.navList},null,8,["title","lists"])]),Object(a["createElementVNode"])("section",null,[Object(a["createVNode"])(d),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(s.EXHIBITION_CARDS,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(m,{EXHIBITION_CARDS:e,onClick:t=>l.moveToDetail(e),key:t,class:"mb-5"},null,8,["EXHIBITION_CARDS","onClick"]))),128))]),Object(a["createVNode"])(O,{classname:"bg-black on-dark"})])}var s=c("07a4"),l=c("49cc"),i=c("903d"),b=c("0d91"),d=c("5502"),m={name:"Exhibition",components:{HeroFour:l["a"],ExhibitionCards:i["a"],ExhibitionCarousel:b["a"]},data(){return{SectionData:s["a"],EXHIBITION_CARDS:this.$store.state.ExhibitionsCards}},methods:{moveToDetail(e){this.$router.push({name:"ExhibitionDetail",params:{id:e.id}})}},computed:{...Object(d["d"])(["ExhibitionsCards"])}},O=c("6b0d"),j=c.n(O);const u=j()(m,[["render",r]]);t["default"]=u},"49cc":function(e,t,c){"use strict";var a=c("7a23");const o={class:"container"},n={class:"hero-content text-center py-0"},r={"aria-label":"breadcrumb"},s={class:"breadcrumb breadcrumb-s1 justify-content-center mt-3 mb-0"},l={class:"breadcrumb-item"},i=Object(a["createTextVNode"])("Home");function b(e,t,c,b,d,m){const O=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["hero-wrap sub-header",c.classnameTwo])},[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("h1",{class:Object(a["normalizeClass"])(c.classname)},Object(a["toDisplayString"])(c.title),3),Object(a["createElementVNode"])("nav",r,[Object(a["createElementVNode"])("ol",s,[Object(a["createElementVNode"])("li",l,[Object(a["createVNode"])(O,{to:"/"},{default:Object(a["withCtx"])(()=>[i]),_:1})]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.lists,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"breadcrumb-item",key:t},Object(a["toDisplayString"])(e.title),1))),128))])])])])],2)}var d={name:"HeroFour",props:["title","lists","classname","classnameTwo"]},m=c("6b0d"),O=c.n(m);const j=O()(d,[["render",b]]);t["a"]=j}}]);