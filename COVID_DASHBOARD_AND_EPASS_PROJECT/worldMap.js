componentDidMount()
 {

    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(response => response.json())
    .then(response => this.setState({ worlddata: response }))
    // .then(()=>{this.colors1()})
    .then(() => {
    let tempMap = new Map();
    this.state.worlddata.map(coun => {
    tempMap.set(coun.country, coun);})
    this.setState({
    worldmapdata: tempMap
    })
    })
    } 
   
    mouseEnter = (event) => {
    var x = event.target.id;
    // console.log('mouse enter '+x);
    if (x.length === 0) {
    var y = event.target.className;
    x = event.target.className.baseVal;
    let d = this.state.worldmapdata.get(x);
    if (d != null) {
    document.getElementById("head").innerHTML = d.country;
    document.getElementById("totalCases").innerHTML = d.cases;
    document.getElementById("activeCases").innerHTML = d.active;
    document.getElementById("recovered").innerHTML = d.recovered;
    document.getElementById("deaths").innerHTML = d.deaths;
    // console.log(y);
    var index;
    var list = document.getElementsByClassName(x);
    for (index = 0; index < list.length; ++index) {
    list[index].style.strokeDashoffset = "0";
    list[index].style.strokeDasharray = "700";
    list[index].style.strokeWidth = "2";
    }
    }
    }
    else {
    let d = this.state.worldmapdata.get(x);
    if (d != null) {
    document.getElementById("head").innerHTML = d.country;
    document.getElementById("totalCases").innerHTML = d.cases;
    document.getElementById("activeCases").innerHTML = d.active;
    document.getElementById("recovered").innerHTML = d.recovered;
    document.getElementById("deaths").innerHTML = d.deaths;
    document.getElementById(x).style.strokeDashoffset = "0";
    document.getElementById(x).style.strokeDasharray = "700";
    document.getElementById(x).style.strokeWidth = "2";
    document.getElementById(x).style.fillOpacity = "80%";
    }
    }
    }
   
    mouseleave = (event) => {
    var x = event.target.id;
    // console.log('mouse enter '+x);
    if (x.length === 0) {
    var y = event.target.className;
    x = event.target.className.baseVal;
    let d = this.state.worldmapdata.get(x);
    if (d != null) {
    document.getElementById("head").innerHTML = d.country;
    document.getElementById("totalCases").innerHTML = d.cases;
    document.getElementById("activeCases").innerHTML = d.active;
    document.getElementById("recovered").innerHTML = d.recovered;
    document.getElementById("deaths").innerHTML = d.deaths;
    var index;
    var list = document.getElementsByClassName(x);
    for (index = 0; index < list.length; ++index) {
    list[index].style.strokeDashoffset = "0";
    list[index].style.strokeDasharray = "0";
    list[index].style.strokeWidth = "0";
    }
    }
    }
    else {
    let d = this.state.worldmapdata.get(x);
    if (d != null) {
    document.getElementById("head").innerHTML = d.country;
    document.getElementById("totalCases").innerHTML = d.cases;
    document.getElementById("activeCases").innerHTML = d.active;
    document.getElementById("recovered").innerHTML = d.recovered;
    document.getElementById("deaths").innerHTML = d.deaths;
    // document.getElementById("casespermillion").innerHTML=d.case
   sPerOneMillion;
    // document.getElementById("deathspermillion").innerHTML=d.dea
   thsPerOneMillion;
    document.getElementById(x).style.strokeDashoffset = "0";
    document.getElementById(x).style.strokeDasharray = "0";
    document.getElementById(x).style.strokeWidth = "0";
    // document.getElementById(x).style.transform="scale3d(1,1,1)"
    }
    }
    }
   //svg code snippet starts here
   <React.Fragment>
   
    <svg width="1350" height="622" style={{}} viewBox="0 0 1214 522" fill="none"
   xmlns="http://www.w3.org/2000/svg" className="icon">
   <g id="world" filter="url(#filter0_d)">
   <rect width="2050" height="800" fill="#deeaee" />
    {/* #42C8C8 */}
   <path onMouseLeave={this.mouseleave} onMouseEnter={this.mouseEnter} id="Afghanistan" d="M833.645 157.687L834.55 158.772L832.802 159.255L831.355 159.918L827.799 160.4L824.604 161.184L823.157 162.871L824.302 164.499L825.146 166.428L823.941 168.055L824.423 169.562L823.88 170.949L820.746 170.828L822.615 173.36L820.746 174.384L819.902 176.675L820.565 179.026L819.48 180.111L818.214 179.749L815
   .803 180.292L815.683 181.316H813.211L811.825 183.547L812.307 186.802L808.329 188.429L805.978 188.068L805.435 188.911L803.386 188.429L800.191 189.032L794.404187.043L796.755 183.547L796.092 181.075L793.5 180.412L792.777 177.941L791.149174.867L792.114 172.757L790.607 172.154L790.908 169.321L791.27 164.499L794.826 166.006L797.177 165.463L797.418 163.715L799.83 163.173L801.397 161.967L801.2
   76 158.893L803.808 158.109L803.989 156.783L805.737 157.808L806.701 157.929H808.51L811.101 158.772L812.187 159.194L814.236 157.989L815.502 158.712L816.044 156.964L817.973 157.024L818.335 156.482L818.214 154.915L819.239 153.588L821.228
   154.432L821.168 155.638L822.193 155.819L822.735 159.074L824.363 160.34L825.267159.496L826.593 159.134L828.1 157.386L830.39 157.687H833.645Z" fill="#FFAD33"
   stroke="black" stroke-width="0.120556" stroke-linecap="round" strokelinejoin="round" />
   <path onMouseLeave={this.mouseleave} onMouseEnter={this.mouseEnter} id="Angola" d="M675.838 344.79L676.199 345.996L675.777 347.865L676.32 349.673L675.777 351.12L676.018 352.446L668.966 352.385L668.484 364.742L670.654 367.877L672.824 370.288L666.555 371.855L658.417 371.313L656.127 369.504L642.444 369.625L641.961369.926L639.972 368.178L637.802 368.058L635.753 368.721L634.125 369.444L633.824 367.033L634.366 363.597L635.572 360.041L635.753 358.413L636.898 354.917L637.742 353.35L639.731 350.818L640.876 349.07L641.238 346.237L641.057 344.007L640.093 342.62L639.188 340.27L638.405 337.979L638.586 337.135L639.61 335.628L638.646 331.891L637.923 329.299L636.235 326.828L636.597 326.104L637.983 325.562L63
   9.008 325.622L640.213 325.2L650.28 325.26L651.063 328.093L652.028 330.444L652.811 331.71L654.077 333.699L656.368 333.398L657.453 332.855L659.321 333.398L659
   .864 332.433L660.768 330.203L662.878 330.022L663.059 329.359H664.807L664.505 330.746L668.604 330.685L668.664 333.157L669.328 334.603L668.785 336.954L669.026
    339.365L670.111 340.812L669.87 345.393L670.714 345.032L672.161 345.152L674.27344.549L675.838 344.79Z" fill="#FF8C1A" stroke="black" strokewidth="0.120556" stroke-linecap="round" stroke-linejoin="round" />
   
   </g>
   <defs>
   <filter id="filter0_d" x="0" y="0" width="1214" height="521.405" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    {/* <feFlood floodopacity="0" result="BackgroundImageFix"/> */}
   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 00 0 0 0 0 0 127 0" />
   
   <feOffset dx="6.02781" dy="2.41112" />
   <feGaussianBlur stdDeviation="1.20556" />
   <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.250" />
   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
   </filter>
   </defs>
   </svg>
   </React.Fragment>
   