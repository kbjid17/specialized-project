(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2300c6"],{eb2e:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const i={class:"page-wrap"},o={class:"header-section has-header-main"},l={class:"hero-wrap sub-header"},r={class:"container"},s={class:"hero-content text-center py-0"},n={"aria-label":"breadcrumb"},d={class:"breadcrumb breadcrumb-s1 justify-content-center mt-3 mb-0"},b={class:"breadcrumb-item"},m=Object(c["createTextVNode"])("Home"),u={class:"breadcrumb-item"},j=Object(c["createTextVNode"])("PrivateGallery"),O={class:"breadcrumb-item"},h={class:"section-space-b blog-section"},p={class:"container"},g={class:"row"},N={class:"col-lg-8"},V={class:"single-entry mb-5 mb-lg-0"},E=Object(c["createElementVNode"])("img",{src:"https://i.ytimg.com/vi/-9Be9EtRXvk/maxresdefault.jpg",class:"w-100 rounded mb-3",alt:""},null,-1),v={class:"single-entry-text mb-2 text-black d-flex flex-wrap align-items-center"},x=Object(c["createTextVNode"])(" Published "),y=Object(c["createElementVNode"])("span",{class:"dot-separeted"},null,-1),k=Object(c["createElementVNode"])("span",{class:"dot-separeted"},null,-1),f={class:"blockquote"},w={class:"col-lg-4 ps-lg-4"},D={class:"sidebar row"},T={class:"col-md-6 col-lg-12 sidebar-widget"},L={class:"card"},B={class:"card-body card-body-s1"},P={class:"avatar avatar-1 mb-3 mx-auto"},S=["src"],W=Object(c["createElementVNode"])("h4",{align:"center",class:"mb-2"},"Shcho21112",-1),C={class:"blockquote"},q={class:"sidebar-text mb-3"},_={class:"col-md-6 col-lg-12 sidebar-widget"},A={class:"card"},F={class:"card-body card-body-s1"},G={align:"center",class:"mb-3"},$={class:"list-item"},R=Object(c["createElementVNode"])("em",{class:"ni ni-chevron-right me-1"},null,-1),z={class:"container"},H=Object(c["createElementVNode"])("h3",{class:"my-4"},"All items in Gallery",-1),J=Object(c["createElementVNode"])("hr",{style:{height:"3px",background:"black"}},null,-1),M={class:"row g-gs"},I={class:"text-center mt-4 mt-md-5"},U=Object(c["createTextVNode"])(" 1");function X(e,t,a,X,K,Q){const Y=Object(c["resolveComponent"])("HeaderMain"),Z=Object(c["resolveComponent"])("router-link"),ee=Object(c["resolveComponent"])("NftProducts"),te=Object(c["resolveComponent"])("Pagination"),ae=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("header",o,[Object(c["createVNode"])(Y),Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("h1",null,Object(c["toDisplayString"])(K.exhibition.exhibitionTitle),1),Object(c["createElementVNode"])("nav",n,[Object(c["createElementVNode"])("ol",d,[Object(c["createElementVNode"])("li",b,[Object(c["createVNode"])(Z,{to:"/"},{default:Object(c["withCtx"])(()=>[m]),_:1})]),Object(c["createElementVNode"])("li",u,[Object(c["createVNode"])(Z,{to:"/blog"},{default:Object(c["withCtx"])(()=>[j]),_:1})]),Object(c["createElementVNode"])("li",O,Object(c["toDisplayString"])(K.exhibition.exhibitionTitle),1)])])])])])]),Object(c["createElementVNode"])("section",h,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("div",V,[E,Object(c["createElementVNode"])("p",v,[x,y,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(K.representiveNft.regDt)+" ",1),k,Object(c["createTextVNode"])(" By "+Object(c["toDisplayString"])(K.representiveNft.nftAuthorName),1)]),Object(c["createElementVNode"])("blockquote",f,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(K.exhibition.exhibitionDescription),1),Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(K.test),1)])])]),Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("div",B,[Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("img",{src:K.avatar,alt:""},null,8,S)]),W,Object(c["createElementVNode"])("blockquote",C,[Object(c["createElementVNode"])("p",q,Object(c["toDisplayString"])(K.creator.memberBio),1)])])])]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("div",F,[Object(c["createElementVNode"])("h4",G,Object(c["toDisplayString"])(K.SectionData.sidebarData.sidebarWidgetThree.title),1),Object(c["createElementVNode"])("ul",$,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(K.SectionData.sidebarData.sidebarWidgetThree.catList,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.id},[Object(c["createVNode"])(Z,{to:e.path},{default:Object(c["withCtx"])(()=>[R,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.title),1)]),_:2},1032,["to"])]))),128))])])])])])]),Object(c["createElementVNode"])("div",z,[H,J,Object(c["createElementVNode"])("div",M,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Q.displayedRecords,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"col-xl-3 col-lg-4 col-sm-6",key:e.nft},[Object(c["createVNode"])(ee,{product:e.nft},null,8,["product"])]))),128))])]),Object(c["createElementVNode"])("div",I,[Object(c["createVNode"])(te,{records:this.total,modelValue:K.page,"onUpdate:modelValue":t[0]||(t[0]=e=>K.page=e),"per-page":K.perPage},{default:Object(c["withCtx"])(()=>[U]),_:1},8,["records","modelValue","per-page"])])])])]),Object(c["createVNode"])(ae,{classname:"bg-black on-dark"})])}var K=a("bc3a"),Q=a.n(K),Y=a("07a4"),Z=a("5502"),ee=a("801f"),te=a.n(ee),ae=a("9ed5");const ce="https://j6e205.p.ssafy.io";var ie={name:"PrivateGalleryDetail",components:{NftProducts:ae["a"],Pagination:te.a},data(){return{SectionData:Y["a"],id:this.$route.params.id,title:"",img:"",avatar:"",userName:"",exhibition:null,exhibitionWorkList:null,creator:null,representiveNft:null,test:"Predictions for how secondary NFT sales will revolutionize creative industries. Elementum lacus, tempus aliquam turpis diam amet leo enim. Nisi enim condimentum tincidunt ornare nam adipiscing. Volutpat lacus, est hendrerit elit sed interdum. amet leo enimLorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacus, tempus aliquam turpis diam amet leo enim. Nisi enim condimentum tincidunt ornare nam adipiscing. Volutpat lacus, est hendrerit elit sed interdum. amet leo enim.",page:1,currentPage:0,perPage:8,total:100,filterMenu:[{id:1,title:"All",class:"active",options:[{category:"image"},{category:"video"},{category:"audio"}]},{id:2,title:"Image",class:"",options:[{category:"image"}]},{id:3,title:"Video",class:"",options:[{category:"video"}]},{id:4,title:"Audio",class:"",options:[{category:"audio"}]}],selectedTab:"all",previous_active_id:1}},mounted(){Y["a"].blogData.blogListThree.forEach(e=>{this.id==e.id&&(this.img=e.img,this.title=e.title,this.avatar=e.avatar,this.userName=e.userName)})},methods:{async getExhibitionDetail(){await Q()({method:"GET",url:`${ce}/api/exhibition/detail/${this.$route.params.id}`,headers:{Authorization:this.authToken}}).then(e=>{console.log(e.data),this.exhibition=e.data.exhibition,this.exhibitionWorkList=e.data.exhibitionWorkList,this.creator=e.data.memberList[0],this.representiveNft=e.data.exhibitionWorkList[0].nft,console.log(e.data.exhibitionWorkList[0].nft)});this.total=this.exhibitionWorkList.length}},created:function(){this.getExhibitionDetail()},computed:{...Object(Z["d"])(["authToken"]),displayedRecords(){if(this.exhibitionWorkList){const e=this.perPage*(this.page-1),t=e+this.perPage;return this.exhibitionWorkList.slice(e,t)}this.getExhibitionDetail()}}},oe=a("6b0d"),le=a.n(oe);const re=le()(ie,[["render",X]]);t["default"]=re}}]);