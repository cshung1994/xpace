import{c as v,a as s,b as i,w as l,F as u,r as d,o as p,d as A,C as x,p as y,e as b,B,A as E,f as k,L as S,D as C,g as V,h as g,i as L,j as I,l as T,k as X,m as F,n as R,q as Q,s as N,t as O,u as U}from"./vendor.8edcea8f.js";const J=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}};J();var w="./assets/logo.5f1c710b.png",P="./assets/follow_us.5e19fe84.png",Y="./assets/followus.24649fad.png",m=(c,a)=>{const e=c.__vccOpts||c;for(const[n,t]of a)e[n]=t;return e};const D={},K={class:"navbar navbar-expand-lg navbar-dark bg-black fixed-top"},q={class:"container-fluid"},M=s("a",{class:"d-inline-flex align-items-center navbar-brand",href:"#"},[s("img",{src:w,alt:"",width:"40",height:"40",class:"d-inline-block align-text-top me-2"}),s("strong",null,"XPACE")],-1),z=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),W={class:"collapse navbar-collapse",id:"navbarSupportedContent"},H={class:"d-flex justify-content-end"},Z={class:"d-flex align-items-center navbar-nav px-xs-0 px-3"},G={class:"nav-item"},j=A("Home"),$={class:"nav-item ms-2"},ss=A("BBS X-city"),es={class:"nav-item ms-2"},ts=A("X-pet"),is={class:"nav-item ms-2"},os=A("XPA DAO"),as=s("li",{class:"nav-item ms-4"},[s("img",{src:P,alt:"",class:"mt-1",style:{height:"3rem"}})],-1),ns={class:"position-fixed end-0 d-flex align-items-center",style:{height:"100vh",zIndex:"100"}},cs={class:"d-flex flex-column gx-2 pe-2"},ls={class:"float-link"},ds={class:"float-link"},rs={class:"float-link"},As={class:"position-relative bg-black"},ps={class:"container text-white",style:{paddingTop:"5rem"}},ms={class:"text-white",style:{marginTop:"6rem"}},hs=s("img",{class:"position-absolute w-100",src:Y},null,-1),vs={class:"position-absolute w-100 my-3 text-center"},gs=s("h1",{class:"fw-bold mt-4"},"Join the future community",-1),fs=s("h1",{class:"fw-bold"},"to meet many fun and smart people",-1),us={class:"d-flex px-xs-0 p-4 justify-content-center"},ws={href:"https://forms.gle/QVyZgt9s1zcrhFbm6",class:"btn follow-btn fs-4 fw-bold",target:"_blank",ref:"noreferrer"},_s=s("h1",{class:"mt-3 fw-light"},"Get notified about important XPACE updates.",-1);function xs(c,a){const e=d("router-link"),n=d("font-awesome-icon"),t=d("router-view");return p(),v(u,null,[s("nav",K,[s("div",q,[M,z,s("div",W,[s("div",H,[s("ul",Z,[s("li",G,[i(e,{class:"nav-link",to:"/"},{default:l(()=>[j]),_:1})]),s("li",$,[i(e,{class:"nav-link",to:"/xcity"},{default:l(()=>[ss]),_:1})]),s("li",es,[i(e,{class:"nav-link",to:"/xpet"},{default:l(()=>[ts]),_:1})]),s("li",is,[i(e,{class:"nav-link",to:"/xpadao"},{default:l(()=>[os]),_:1})]),as])])])])]),s("div",ns,[s("div",cs,[s("div",ls,[i(n,{icon:["fas","share-nodes"]})]),s("div",ds,[i(n,{icon:["fas","envelope"]})]),s("div",rs,[i(n,{icon:["fas","paper-plane"]})])])]),s("div",As,[s("div",ps,[i(t)])]),s("div",ms,[hs,s("div",vs,[gs,fs,s("div",us,[s("a",ws," Follow Us ",512)]),_s])])],64)}var ys=m(D,[["render",xs]]);x.register(y,b,B,E,k,S);const bs={name:"DoughnutChart",components:{Doughnut:C},props:{chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data(){return{chartData:{labels:["Ecosystem & Foundation","Founding Team","Team & Advisors","Seed Round","Private Sale","Public Sale","Liquidity","Airdrop, Community & Platform Reward"],datasets:[{backgroundColor:["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"],data:[30,20,5,10,5,5,5,20]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}}};function Bs(c,a,e,n,t,o){const r=d("Doughnut");return p(),V(r,{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":e.chartId,"dataset-id-key":e.datasetIdKey,plugins:e.plugins,"css-classes":e.cssClasses,styles:e.styles,width:e.width,height:e.height},null,8,["chart-options","chart-data","chart-id","dataset-id-key","plugins","css-classes","styles","width","height"])}var Es=m(bs,[["render",Bs]]),ks="./assets/pink.c1ae0804.png",Ss="./assets/lightblue.1a35d99e.png",Cs="./assets/discover_more.363bd140.png",Vs="./assets/astra.a0898297.png",Ls="./assets/ring.b6c7759b.png",Is="./assets/ball.5815a95f.png",Ts="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAgCAYAAABD9mvVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgB7ZndddNAEIXvyC7Ar/zkHFEBpgJMBdABoYLEFQQqiKkgpgJCBXEqwB0gDr+PLgBrubMSdkxs7xhL3j2cfC9SovVad39m7o4FRtwXDNDBY94O4NDnNb/xeArBjNdLlLiWh/w7MSTUoBZ4RnED2Jkiw0ju4R0SYaNQ94Mz5nCxo8C/KSj4GQUXiEy27p8U+ZJL8OOeIpVc+3HfcYrI3BJKkWd8uTFve2iGHgfs3PcbkZWl637iBHOM0BYZjmPt24VQvyd1uTY3k+uYUeyTGHt2uXRLvEe7IoFqGV8gAn5G3Vcc8+6QL1CgbYTfIRj/2SqV0G9+yfbxPyLM5/cxlHpvftrhozO2f8vrBF2O2i/vkF5wEzzHqltKBw2CXLanVH1u/MhGA1AP2BVSFCuYCJP5ldEYBF3OgSL3P5FRpO2lBJehtOCfV8s6OTS92ILQHB9M7TggSJDM3LJrTAkdf1xLDrvQuXGJz9Pbn4oKLUwtHVOIjQESRIXaqgEZTnxU3YJ/LjwYJIhG3Wtj25764U1i69SifjlHgnQpdBouqCzoqylg7h1pbcgHHt2THbqi0h+uk9yf1DipvK7dNDRFAbWQYTQuWAavKsyto8Rn2tRRJVQLYJm3b4fBeADnYUM9eI4whTzAI2z9SiJHHF0xjXATFDGqDMs8KngFHCDZ0y8jAguh3qc6DNEm7D9W6XPFGbHCPubmfYM2YL/sv63CW3Al3rKA3K+vG57ZmZ9J7XdXnPEkVIYPHNsr9fsepJ0PcMN9fovxGUG2vINjcDsKB9Lwby9V4UyLzzmsqMDOsjCVAmZPRMF9b+wFT+sRzm881kBW1HZyYhnhO1riN99qzwvr8gCPAAAAAElFTkSuQmCC",Xs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAxCAYAAACLfLrrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIbSURBVHgB5ZqNUcJAEIXfUQElYAViBWAF0oGUgBWYDsQKGCtQKgArACtIrAA6WHfJRSIz5v+S3PLNPCDJzHIve3+5i0EJCBjx1wNrbCXHQ3v5yIpYe9aatTXxuTLxJdaMNcmIL/pgfZr4d3NwAeasDYtKamVvTl78EWvJOpSML2V6RF04yJQVVjB4qRc6ZyYdf2iv1Y0fVjLcYAEuCzNK/ceYmrmJf25oWZO7hguQ1kLuvsP4O8prLtZk6LAQbUnMDrOMvntkJk+b/0w+e2SiqBaJP2NNjvgrhD5k7L2R8XxgTwTQibTTU1aNbbQH6OWUVcnoDLo5TSvF6BT6mYjRW+hnLG1U2ucQujmKUcIVMMCVIEZLPRx7ymnCEEE/kRj9gn6+xege+tkaxRP6NHcDc16500rEHvfJ8LKGXgL5SJ5HZWYk1VfbDCli3Rvb68IuNL9CH2/JIrdJzijMagSbTTn4nQLarD5BD0HmloWSlcAV8iD/13ZDKrDfk5iV7YIDAeSZDoVNpszOPTKYqNr6F8X7JL6YXKAOHCDwwGSAJuh5ZudoEqn/1K8OSsriZk2a4i34sAcmpQxjuMSa3RHQlckNlR1CahruopNaogsoHmvDFgy6a49FsVV549Bku1U1DwdVWbJYbxLgCmquV85/s6QP1MxuAJ+okF3Jotux0SUFs9vNsNE0GdmVc1NoI5Vd6VHlbU7tG9Dt8wPcEUdPL0O75wAAAABJRU5ErkJggg==",Fs="data:image/png;base64,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",Rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA3CAYAAABdJVn2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXMSURBVHgB7Zpdcts2EIAXkkZq3tQTmL2Bc4LKJ6jz0hm308Y5QawTRDpBnRPYbqdN3+KeIPIJohuUPkH0ltrjGN01QRlcLkgsSLs/k2/GlkgBEJbYH+xCBiI5sTYb44sB2MXLaUPT9XfGPPVv/GrtLvZ7J/TbfAJ49oMxK//mb9a+h+J7QmxwvPO/AJYvjMkhgkFMIxJyAvAeB59Bs5CAbdbCvVeBftNB8VkFC3ABzUyxzSHNiR4iRNAqKAo5ncirEWLJ+mf4sh9qTA+PvsO/d4urBXFMsf9b3l+iVdBJ8cQziACf8uqAqRL2X7T1Q5M48q9JlWksiCN7ImgFp1FQtBVaiSOIBJ/uqXD7a2jv91JYlTOIBDXg6BdrZ01tgoI6lfsJ4snRCVUmh/ZzCHHaQOZx6N+4LtR3A5EMccpNKhwU1KlcBpEYQdVopSASVNVv/Gv0phu89xriIYd5EvpQFNStxHPQwZ0QecMoj0iQU+LqN5BNoYl9Z241aoKSypoI4/YJOKFo2/YmU5kkjalwSiUnzuz42FUmhV1moIA7IfdFWo2gcZ4LoWYJOqZjQYUrgv5uLdnUPuioOaFxsbFIYSqFGlA4JYLMAFW4Ms5WUFqF24iYx7FCGNCqPuv7UvgOjVMqeeWr8FZQ5e4HvAFO/eufC2eQQTpT7pQw1ByDnooK3wn6xtro3Y8P2SZ3QqME2+Tw/a8LNStQ4quwcRv2PyEBzDz2/Myjy1icK4AvScDymlZ5WGidGnxITweTxM5IztOrSYKNh+jDKZXQxn90AzAfuhwTb+zY4jWDwl6bbHYh3Gvd1yomR/vfY39VySm1ODpqS2qeQ/FHXFLqOPrRGNpTBtMiUke0u4wewLAQPMPXDx8B/mDt2hJyNePigW/zW3JK4/uPczSdDc4lv3YC+g+FY+CBcIFfK3jjZD8TgaFSxHXxJHP4n+FrlcE48wHuVWxrzKZ4vXT37q7JJm4KI//HVKyc/Ng5Tev8Bv7tuCaZ4ExzWtFF4patVu1zlUJ/rEvQseO9f/29MWv/w4jqoAg+jKVxxS8aIAMlfMPQJai3jU1e3c1TCyUdXw1IBXHQF5DAgGUpN0Uo6EOlN8JmZAZpLOjf3V5XWXXzqWwQ3J50DR0xQl2Xl1oiOS9TyG32MihWVZ338UTZsI1ECijUW//aVT1moAT7zMv3W0Fd2UKd941Zon6lr/PU4CuaksiTA/Izq0qFAb3cApSqN5DVdwXprHnqZ/RqmztZttRqRlbpmKxcermARALnLjNQgA9mj9+rCUqxy+oKUrWKwG2HFeXnLm7s6D0zV9kSsa5Ly65RP16m7JA71nLcga5YV1NZbxwZjRc2ch6q9r6Ban9sjptLKlsSFNR54TnEscvDTIpD4n1cFS92y7c4aEhMGk/TUA1OY0NO4JBIRWpYIbvktWVO6/koCnsEESEncEi0gkikY43IsLIO2aVP1NE+fuEzuK/BhNrsCsd20WEmsKOatXTL3dxaiRLU2SsN2OScpiNmT5owM2JtI8IK/WBj76DPH2sQLr7OWwZLDTP5tyz3HDKbF1geKKoi0YISzjkFNxOSTdmII3ojr3wwrDjncwwKVIISbjMR8sTZG3Y2GfMLE8PauNJpJrUlIWOcD0ctKOE88VlgIhX1jUnGPzKn1ZBkn6UISSQJSqDqHErhIxBmguGJxuCFtkCSTUn0ISSSLChxXXjiihDaZFw4LZ8KSfb6KrHcU9JJUFqJq2J/WRH2CXMkpsFO+W5oKAu517W82klQQhL2E9tcuzCQC91z4XzVt/FehCQ6C0p4wt6tnBEOg62gvi1h5bwvIYleBCVoQugsyGbJG0vJeE19b5jn9sLKGY3V52lAb4KWOM84HzFVFcJMrXb7RfH5vIt3DfFgx4YSePzxrvSo5InRPjXVg070vqJN+GGG124fmkcV1K/5mg6Vwv8EpL7uVOxRGcHjc2F7/q3Dv5aY38D3zd93ND+v2Zoq4gAAAABJRU5ErkJggg==",Qs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABECAYAAAA/UU2nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALhSURBVHgB7Zp/chIxFMe/L9ml0tGxPUH3CL2BoK0z/iWeoN6g3kA4gXoC6Qksf3W0nQFOIDcoNwB/tLTAbky2gssCmsDCYJrPX10G6Pvwstm8lxDWSEfUd3JhWKAIexHoGxC2Huaet7AmCCumJ84CMfBfyv9UkpcFTEfQFkAjEuLkkX/YwApZieyPwXnBA3siIAqYJTgHKd2VEZ3KP2t9zhu7VOwiQzKRVcPTGw73SYgSETuSX7qDbGgQoXrDeVOKt7EkC8uOBD2io0iglKHgPFoy9dVbn9cWFTeWVUN0BRk0Jc543js4MfmQtqyS5KC3MLgHV46c3EhQ9cZjJzrZ/qfsz/6X1zKLx/KN+9hghMy0nNQqf5OeK3uXSbyTb9loyTQEKs/L9JRsp1cPtrzwIzZpuJqihjdQTt/TY1k1uz4YRsfy2ViGLUjpW86LoyzHsnE2eViXVwEsRA3tvP+sEste9y8ubRUdEUIUuZqIGNEbWA6XD2aGe4IQCNjQ81rxAtxy1IqLqcpCLv8qsBk5K4MPmuNHj1opMbnelUuRAFYR1vL+VZnolfWj1+FwOBwOx5rQbrip4n5rEB4JIXb7Oa+6aDszrrIiFBinS9Pu4LKxaMuma15VH5puV1wNP5dI8E+Jlxrb/kERhlwPzr8me2O6sWiVeN+HF6V0cf+7rWqG4OnPFFSmYUAcS6oJqBuLliyLaLoZvkBnQ/Z4d6ZfYwEMWCaWe1O8K5ysrThZW3GytuJkbcXJ2oqTtRUnaytO1lacrK04WR1kzzaTnWyfUQdLohuLluzAZ6fpQyaM6D2MiT5MXBLaW97TGgxQsUCgPfE1IbSa7dpN8l7vLIg4LxOxx/KnbG7nDheQ/XN2g+4OdVTy9KINQ7KKxeFwOBwOR3ZMLCqS2/ewgPQRhAnZ9Pa9DSSPIIzXxrO2720geQRhLDtz+94CBMTYayw7q7KxgWRFNHHPJqqJPfz/dNMV0S8kdSjSeCW4iQAAAABJRU5ErkJggg==",Ns="./assets/icon_globe.d298d604.png",Os="./assets/icon_lightning.537380f7.png",Us="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA2CAYAAACWeYpTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgB3ZrfcRoxEMY/keQ5MJNkxk+GCkI6gBKoIE4FcSowVJBQQewKTAfQgXEF8ObEcQZe8hL/Ub41RwbDYbScdCf4zWg4Y51Pn1Ze7e4JyJFfFic3FhNpco195DeFUZxdbD8t2sgJgxyYWFTvgQsLlJd+NX0J1CoGUwSmhBy4BdopIoUyJ+ArciC4RcWad8BoQ7fmW4MBAhLcohTZd+gW3DEFFXptccSPqkPXBj3xRwQk2NJNlqxYs+p4S1DHFMyiD3i0UFVxS/kvcIxABLGoowNKQ6z6gVYdwzNBLCrbCbajzAn6jgB4FyoOyCCTY2kwamrAM96XLgcpS7aKbIy5r9bgEa8WZTz7GdlFCtUf1q9j8mbRLbaTTXh1TF4sKv9TnkUK4pj6MoHwgMqiV3woZ6bOmT5kMF7jzYf8ug6/Alfgc6ZMCoZsly+4bXGPvuT19J3BUPE3nsIZLN/OBl5P2mt2arCV12QgRSNixyJerkuzJT9cjrAehSbZvoipRypGzXwV8PP0jcGZkcz/Afll+kVAfR1Da06wJ1Z8hmkuFYYYEKFd7Dlcut25M2oD+1l+pEPqchs6/r+9MBiXH3IpVOUFRX6hyG9y/WQfpVjZN89N4AAgNBQ45kdrMaBYCRgk+mH00d9VsSKSUVvzYClGXvG60uEVg2le9rBj0Di9Pxz7QUoikLq9SPjEfLDFyw52BAkKGAG1amuKaxuD+h1wUtPE6Zw+18kpe4nVSaU5nXU4p2mxOSkJ2Ol0WgeOibkqH01SuIuixYolxenUFMVuVayb5HiFOygOul1TVvS3Ceqds/pQJEm2CrVQE0FKV5qVcLT36OBsNlAwLJqpa75qofS871EwpS3GoBZqI9hezBarSr29cNlMEAGs9FUqobaXu1n5Mwq0Y1EJtREJvQ8pFBEJ1ToklVATgcedY5STrnJGcqwNEcGc2Xn8zhZNUrVMyOsBtpY0ztgZMqIZk2bpZhE6kGiGFYBPbD1pzCGP5LuMgqMROsDs+FszLW+U7+aCk75a/AtVOqIBEoEuZ/xEsPSVe5KqgfcxOf8zO76MGrB1sh5gTI7WnTgk+FLEq8ABjdC1HlesIMmwvIeER1wEazyvExTaXz5BLVa+tuGOtc0RwWyjlOe7nBzVIcWxG4vzuUB5MTWy+Sbh8swFwf0rTwc59op/lwdQArSLSy4AAAAASUVORK5CYII=",Js="./assets/roadmap.2cc1d192.png",f="./assets/token_allocation.930d935a.png";const Ps={name:"App",components:{DoughnutChart:Es}},Ys={class:"mt-5"},Ds={class:"mt-0"},Ks={class:"row py-3 gy-3"},qs=s("div",null,[s("i",{class:"display-5 fw-bold"}," SURF TO EARN "),s("br"),s("i",{class:"display-5 fw-bold"},[A(" CLOSER "),s("img",{src:ks,width:"50"}),A(" RICHER "),s("img",{src:Ss,width:"50"}),A(" HAPPIER ")])],-1),Ms={class:"col-6 d-flex flex-column align-items-center"},zs=s("p",{class:"fs-3"}," The XPACE team is building a super cool and convenient social platform that you can govern and earn from your data in this social platform, X-city. You can think of it as a hybrid of Reddit, Gather Town, and Facebook. ",-1),Ws={class:"w-50 mt-4"},Hs=s("img",{class:"img-fluid",src:Cs},null,-1),Zs=s("div",{class:"col-6"},[s("img",{class:"img-fluid",src:Vs})],-1),Gs=g('<section><div class="row mb-3"><div class="offset-md-3 col-md-9 text-center"><h1 class="display-5 fw-bold fst-italic">Vision</h1></div></div><div class="row"><div class="col-md-3"><img class="w-100" src="'+Ls+'" style="margin-top:4rem;"></div><div class="col-md-9"><div class="row g-5"><div class="col-md-6"><h5 class="fw-bold display-6">Data Justice</h5><p> Being one part of the web 3.0 philosophy, Xpace dedicate to realizing a data justice world. The enormous profits of data should belong to data generators, not media magnates. Data generators, our users, are the boss of their data. With blockchain technology, the logs of authorization are recorded immutably and transparently. </p></div><div class="col-md-6"><h5 class="fw-bold display-6">Immersion</h5><p class="card-text"> Xpace wish you a brand new community experience, where you can meet people who share the same interests as you and interact with them with exciting options. The immersive environments give you more inspiration when you surf X-city. </p><img class="w-100" src="'+Is+'"></div></div></div></div></section><section><div class="text-center mb-5"><h1 class="display-5 fw-bold fst-italic">Core Features</h1><h2 class="fw-light fs-5 lh-1"> You can find fun social experiences here and <br> earn real money. </h2></div><div class="row g-5"><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Ts+'"></div><div class="flex-grow-1"><h2 class="fw-bold">DAO Governance</h2><p class="pe-5 fw-light">XPA DAO token holders can govern the X-city social platform by participating in on-chain governance.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Xs+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Fun &amp; Convenient</h2><p class="pe-5 fw-light">High personalized friends recommendation, fun and convenient experience in communication. </p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Fs+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Spaces/communities DAO</h2><p class="pe-5 fw-light">Users can deploy DAO tokens for their own spaces/communities, then set rules and manage them by their own DAO token.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Rs+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Surf to earn &amp; Rent to earn</h2><p class="pe-5 fw-light">Surf to earn from advertisement slots and the data you delegate (recorded on-chain) to XPACE. Rent advertisement slots in your space directly to advertisers.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Qs+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Treasury</h2><p class="pe-5 fw-light">The XPACE owns an on-chain pot of funds for the promotion and development of the ecosystem.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Ns+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Expand your estates</h2><p class="pe-5 fw-light">Create and expand your land and spaces in the X-city world.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Os+'"></div><div class="flex-grow-1"><h2 class="fw-bold">NFTs</h2><p class="pe-5 fw-light">Turn your creations and spaces on XPACE into NFTs, and rent or sell them to others.</p></div></div></div><div class="col-md-6 px-xs-0 px-5"><div class="d-flex"><div class="flex-shrink-0 me-2" style="width:32px;"><img class="w-100 mt-1" src="'+Us+'"></div><div class="flex-grow-1"><h2 class="fw-bold">Unique Algorithms</h2><p class="pe-5 fw-light">XPACE&#39;s unique algorithms make your profit performance better.</p></div></div></div></div></section>',2),js=s("div",{class:"text-center mb-5"},[s("h1",{class:"display-5 fw-bold fst-italic"},"Tokenomics")],-1),$s={class:"row px-xs-0 px-4"},se=g('<div class="col-md-8"><div class="row"><div class="col-6"><h4>TOKEN SYMBOL</h4><img src="'+w+'" width="100" height="100"><h4>XPA</h4></div><div class="col-6"><h4>INITIAL CIRCULATION</h4><p>50,000,000</p></div><div class="col-6"><h4>INITIAL PUBLIC SALE PRICE</h4><p>$0.1</p></div><div class="col-6"><h4>TOTAL SUPPLY</h4><p>1,000,000,000</p></div></div></div>',1),ee={class:"col-md-4"},te=s("h4",{class:"mb-3 text-center"},"TOKEN ALLOCATION",-1),ie=g('<section><div class="text-center mb-3"><h1 class="display-5 fw-bold fst-italic">Roadmap</h1></div><img src="'+Js+'" class="img-fluid"></section><section><div class="text-center mb-5"><h1 class="display-5 fw-bold fst-italic">Team &amp; Advisors</h1></div><div class="row g-5"><div class="col-sm-6 col-md-3"><img class="img-fluid" src="'+f+'"></div><div class="col-sm-6 col-md-3"><img class="img-fluid" src="'+f+'"></div><div class="col-sm-6 col-md-3"><img class="img-fluid" src="'+f+'"></div><div class="col-sm-6 col-md-3"><img class="img-fluid" src="'+f+'"></div></div></section>',2);function oe(c,a,e,n,t,o){const r=d("router-link"),_=d("DoughnutChart");return p(),v("div",Ys,[s("section",Ds,[s("div",Ks,[qs,s("div",Ms,[zs,s("div",Ws,[i(r,{to:{name:"Xcity"}},{default:l(()=>[Hs]),_:1})])]),Zs])]),Gs,s("section",null,[js,s("div",$s,[se,s("div",ee,[te,i(_)])])]),ie])}var ae=m(Ps,[["render",oe]]),h="./assets/xcity.518aa1ff.png",ne="./assets/theme.fd222dcd.png",ce="./assets/spiral.a0cd0cf8.png",le="./assets/planet.628a56c1.png",de="./assets/playroom.97dd785d.png",re="./assets/bridge.932f6bef.png",Ae="./assets/snowcity.eee1313f.png",pe="./assets/whois.8ab4679f.png",me="./assets/xq-pet.e8582a4f.png";const he={},ve={class:"position-relative mt-0"},ge=s("img",{class:"position-absolute w-100 img-fluid",src:h},null,-1),fe={class:"position-relative w-100 px-4 py-4"},ue=s("strong",null,[s("em",null,"The Coolest BBS community")],-1),we=s("img",{class:"invisible position-relative img-fluid",src:h,style:{width:"90%"}},null,-1),_e={class:"px-5"},xe=s("strong",null,[s("em",null,"Planets Exploration")],-1),ye=g('<div class="row gx-0"><div class="col-md-7" style="z-index:1;"><img class="img-fluid" src="'+ne+'"></div><div class="col-md-2 d-flex align-items-center" style="margin-left:-0.4rem;z-index:0;"><img class="img-fluid" src="'+ce+'"></div><div class="col-md-3 d-flex align-items-center"><img class="img-fluid" src="'+le+'"></div></div><p class="mt-4 lh-1" style="width:80%;">Explore fun on every planet in the X-city world. Various landscapes and hiding events bring more exciting experiences for you.</p>',2),be=g('<section><div class="row"><div class="col-md-5 d-flex flex-column"><img class="mb-3 img-fluid" src="'+de+'"><img class="mb-3 img-fluid" src="'+re+'"><img class="img-fluid" src="'+Ae+'"></div><div class="col-md-4 d-flex flex-column justify-content-center align-items-center g-4 fs-2 fw-bold fst-italic"><p>Surf to Earn</p><p>Become KOL</p><p>Space Travel</p><p>Video Chat</p><p>Assets</p><p>Meet Friends</p><p>Arena</p></div><div class="col-md-3 d-flex flex-column justify-content-center"><img class="img-fluid" src="'+pe+'"></div></div></section><section style="margin-top:8rem;"><div class="d-flex justify-content-center"><img class="w-50 img-fluid" src="'+me+'"></div></section>',2);function Be(c,a){const e=d("H1");return p(),v(u,null,[s("section",ve,[ge,s("div",fe,[i(e,null,{default:l(()=>[ue]),_:1})]),we]),s("section",_e,[i(e,null,{default:l(()=>[xe]),_:1}),ye]),be],64)}var Ee=m(he,[["render",Be]]);const ke={},Se={class:"position-relative mt-0"},Ce=s("img",{class:"position-absolute w-100 img-fluid",src:h},null,-1),Ve={class:"position-relative w-100 px-4 py-4"},Le=s("strong",null,[s("em",null,"Coming Soon")],-1),Ie=s("img",{class:"invisible position-relative img-fluid",src:h,style:{width:"90%"}},null,-1);function Te(c,a){const e=d("H1");return p(),v("section",Se,[Ce,s("div",Ve,[i(e,null,{default:l(()=>[Le]),_:1})]),Ie])}var Xe=m(ke,[["render",Te]]);const Fe={},Re={class:"position-relative mt-0"},Qe=s("img",{class:"position-absolute w-100 img-fluid",src:h},null,-1),Ne={class:"position-relative w-100 px-4 py-4"},Oe=s("strong",null,[s("em",null,"Coming Soon")],-1),Ue=s("img",{class:"invisible position-relative img-fluid",src:h,style:{width:"90%"}},null,-1);function Je(c,a){const e=d("H1");return p(),v("section",Re,[Qe,s("div",Ne,[i(e,null,{default:l(()=>[Oe]),_:1})]),Ue])}var Pe=m(Fe,[["render",Je]]);const Ye=[{path:"/",name:"Home",component:ae},{path:"/xpet",name:"Xpet",component:Xe},{path:"/xcity",name:"Xcity",component:Ee},{path:"/xpadao",name:"Xpadao",component:Pe}],De=L({history:I(),linkActiveClass:"active",routes:Ye});T.add(X,F,R,Q,N);O(ys).component("font-awesome-icon",U).use(De).mount("#app");
