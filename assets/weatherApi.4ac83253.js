const o="https://api.openweathermap.org/data/2.5/weather",i="https://api.openweathermap.org/data/2.5/air_pollution";class p{constructor(t){this.apiKey=t}getWeatherByCoords(t,e){const a=`${o}?lat=${t}&lon=${e}&appid=${this.apiKey}&units=metric`;return fetch(a).then(r=>r.json())}getPollutionByCoords(t,e){const a=`${i}?lat=${t}&lon=${e}&appid=${this.apiKey}`;return fetch(a).then(r=>r.json()).then(r=>r.list[0])}getWeatherByCityName(t){const e=`${o}?q=${t}&appid=${this.apiKey}&units=metric`;return fetch(e).then(a=>a.json())}}export{p as W};
