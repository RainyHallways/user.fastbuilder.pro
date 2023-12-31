"use strict";(self.webpackChunkwebpages=self.webpackChunkwebpages||[]).push([[309],{3309:(e,r,n)=>{n.r(r),n.d(r,{default:()=>p});var t=n(865),a=n.n(t),i=n(578),s=n(2641);let o=null,l={info:"",isfree:!1,paired:!1,paired_notice:"",error:"",fatal:!1,success:!1,showcodepwnpay:!1,iframeurl:"",showingcodepwnpay:!1,use_point_input:"",oninit:async()=>{l.info="",l.paired=!1,l.isfree=!1,l.paired_notice="",l.error="",l.showingcodepwnpay=!1;let e=await s.Z.GetBill();"object"==typeof e&&(l.isfree=e.isfree,l.iframeurl=e.codepwn_pay_url,l.showcodepwnpay=e.codepwn_pay_available,l.can_use_point=e.can_use_point,l.use_point_input="",l.info=e.show.replace(/\n/g,"<br/>"),a().redraw(),e.success&&(o&&clearInterval(o),o=setInterval(c,1e3)))},onremove:()=>{o&&(clearInterval(o),o=null)},view:e=>a()(i.ZP.frame,{pageName:"支付",pageIcon:'<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>'},a()(i.ZP.section,{title:"清单"},a()("p",a().trust(l.info))),l.can_use_point&&!l.paired?a()("div",a()("p","你可以使用 Point 抵价。每 100 Point 可以抵价 ￥1，请输入 100 的倍数。"),a()(i.ZP.formInput,{value:l.use_point_input,oninput:e=>{l.use_point_input=e.target.value}}),a()(i.ZP.button,{onclick:async()=>{let e=await s.Z.UsePoints(l.use_point_input);e.success?a().route.set("/router/enter",{to:"/pay"}):i.ZP.showAlert("错误",e.message)}},"抵价")):null,l.paired?null:[l.showcodepwnpay&&!l.showingcodepwnpay?a()("p",["或者：",a()("a",{href:l.iframeurl,target:"_blank",style:{display:l.showingcodepwnpay?"none":"inline-block"},onclick:e=>{}},"自动结算[微信]（提供: CodePwn）")]):null,a()("br"),a()("br")],l.isfree&&!l.success?[a()("button.btn.btn-primary",{onclick:async()=>{let e=await i.ZP.getCaptchaInput("输入验证码","本操作需要输入验证码完成，请输入下方显示的验证码","验证码",!1,!1),r=await s.Z.RedeemForFree(e);r.success||i.ZP.showAlert("错误",r.message)}},"免费获取"),a()("br"),a()("br")]:null,l.error?a()("p",{style:{color:"red"}},l.error):null,l.paired?a()("p",{style:{color:"blue"}},l.paired_notice):null,l.fatal?null:[l.success?null:a()(i.ZP.button,{onclick:()=>{c(!0)}},"刷新状态"),a()("br"),a()("br"),a()("div",{style:{width:"40%",display:l.paired||l.isfree?"none":""}},a()("form#payment-form",a()("p","点击下方按钮完成支付。"),a()("button.btn.btn-primary",{style:{width:"100%"},onclick:async e=>{e.preventDefault(),location.href=(await s.Z.StripeCreateSession()).url}},"支付")),a()("br"),a()("br")),a()("a",{href:"#!/shopping_cart",onclick:e=>{e.preventDefault(),a().route.set("/shopping_cart")}},"返回")])};async function c(e){let r=await s.Z.CheckPayment();if(r.error)return o&&clearInterval(o),o=null,await i.ZP.showAlert("错误",r.error_message),void a().route.set("/shopping_cart");if(!l.paired){if(!r.paired)return void(e&&(l.error=r.message,a().redraw()));l.error="",l.paired_notice=`请支付: ￥${r.price}`,l.paired=!0,a().redraw(),e=!1}r.success?(l.error="",l.paired_notice="支付成功！",l.success=!0,clearInterval(o),o=null,a().redraw()):e&&(l.error="尚未成功",a().redraw())}const p=l}}]);