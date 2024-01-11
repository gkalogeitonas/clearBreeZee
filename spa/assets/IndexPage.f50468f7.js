import{Q as h}from"./QBtn.f9f74dec.js";import{Q as d}from"./QSpinner.668480e2.js";import{Q as p}from"./QInput.2cab5469.js";import{Q as g}from"./QPage.17c93452.js";import{W as m}from"./weatherApi.4ac83253.js";import{_ as u,G as w,I as i,J as _,K as n,R as e,L as s,S as l,O as o,N as y,M as c,U as D}from"./index.327a9d3d.js";import"./use-router-link.6a032760.js";import"./render.41002b6c.js";import"./use-dark.8ced2649.js";const v=w({name:"IndexPage",data(){return{search:"",weatherData:null,pollutionData:null,position:null,apiKey:"5114231f956c863476e7ffdc500717e1",weatherApi:null}},created(){this.weatherApi=new m(this.apiKey)},methods:{getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{this.showPosition(t),this.position=t,this.getWeatherByCoords(t.coords.latitude,t.coords.longitude),this.getPollutionByCoords(t.coords.latitude,t.coords.longitude)},t=>{switch(t.code){case t.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case t.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case t.TIMEOUT:alert("The request to get user location timed out.");break;case t.UNKNOWN_ERROR:alert("An unknown error occurred.");break}}):console.log("Geolocation is not supported by this browser.")},showPosition(t){console.log("Latitude: "+t.coords.latitude+"<br>Longitude: "+t.coords.longitude)},async getWeatherByCoords(t,a){this.weatherData=await this.weatherApi.getWeatherByCoords(t,a)},async getPollutionByCoords(t,a){this.pollutionData=await this.weatherApi.getPollutionByCoords(t,a)},async getWeatherByCityName(t){this.weatherData=await this.weatherApi.getWeatherByCityName(t),this.weatherData&&this.weatherData.coord&&(this.pollutionData=await this.weatherApi.getPollutionByCoords(this.weatherData.coord.lat,this.weatherData.coord.lon))}}}),f={class:"col q-pt-lg q-px-md"},x={key:0,class:"col text-white text-center"},C={class:"text-h4 text-weight-light"},N={class:"text-h6 text-weight-light"},k={class:"text-h2 text-weight-thin q-my-lg"},B=e("span",{class:"text-small"},"\xB0",-1),P={key:1,class:"col text-white text-center"},I={class:"aqi-circle"},A={class:"text-h2"},O=e("div",{class:"text-caption"},"AQI",-1),b={class:"text-h6 text-weight-light"},L={class:"text-h6 text-weight-light"},Q={class:"text-h6 text-weight-light"},W={class:"text-h6 text-weight-light"},V={class:"text-h6 text-weight-light"},q={class:"text-h6 text-weight-light"},E={class:"text-h6 text-weight-light"},S={key:1,class:"col text-h2 text-center text-white"};function M(t,a,U,R,T,$){return i(),_(g,{class:"flex column"},{default:n(()=>[e("div",f,[s(p,{color:"white","text-color":"white","label-color":"white",outlined:"",modelValue:t.search,"onUpdate:modelValue":a[1]||(a[1]=r=>t.search=r),placeholder:"Search"},{prepend:n(()=>[s(h,{size:"lg",color:"",name:"my_position",icon:"gps_fixed",onClick:t.getLocation},null,8,["onClick"])]),append:n(()=>[s(d,{name:"search",color:"white",onClick:a[0]||(a[0]=r=>t.getWeatherByCityName(t.search))})]),_:1},8,["modelValue"])]),t.weatherData||t.pollutionData?(i(),l(D,{key:0},[t.weatherData?(i(),l("div",x,[e("div",C,o(t.weatherData.name),1),e("div",N,o(t.weatherData.weather[0].main),1),e("div",k,[e("span",null,o(Math.round(t.weatherData.main.temp,2)),1),B,y("C ")])])):c("",!0),t.pollutionData?(i(),l("div",P,[e("div",I,[e("div",A,o(t.pollutionData.main.aqi),1),O]),e("div",b," NO: "+o(t.pollutionData.components.no)+" \u03BCg/m3 ",1),e("div",L," NO2: "+o(t.pollutionData.components.no2)+" \u03BCg/m3 ",1),e("div",Q," O3: "+o(t.pollutionData.components.o3)+" \u03BCg/m3 ",1),e("div",W," SO2: "+o(t.pollutionData.components.so2)+" \u03BCg/m3 ",1),e("div",V," PM2.5: "+o(t.pollutionData.components.pm2_5)+" \u03BCg/m3 ",1),e("div",q," PM10: "+o(t.pollutionData.components.pm10)+" \u03BCg/m3 ",1),e("div",E," NH3: "+o(t.pollutionData.components.nh3)+" \u03BCg/m3 ",1)])):c("",!0)],64)):(i(),l("div",S,[s(h,{size:"",color:"primary",label:"Find my location",icon:"gps_fixed",onClick:t.getLocation},null,8,["onClick"])]))]),_:1})}var Z=u(v,[["render",M]]);export{Z as default};