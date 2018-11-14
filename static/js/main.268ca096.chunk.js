(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){n(23),e.exports=n(53)},36:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(8),a=n(15),c=n(9),i=(n(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(5),u=n(18),h="git_access/src/HomePage/CHANGE_USERNAME",m="git_access/src/HomePage/GITHUB_SIGNIN",d="git_access/src/HomePage/GITHUB_METRICS",g="git_access/src/HomePage/GITHUB_SET_AUTH",p=Object(u.a)({OAuthToken:""});var f=function(e,t){switch(void 0===e&&(e=p),t.type){case h:return l.a({},e,{username:t.payload.replace(/@/gi,"")});case m:return console.log("Reducer"),l.a({},e);case g:return console.log("Reducer"),e.set("OAuthToken",t.token);default:return e}},v=n(57),E=n(56),w=n(55);var b="4cfba37be95601c9e08a",k="http://localhost:3000",A="http://localhost:3000/";var y=n(19),H=n(20),G=(n(50),{error:!1,loading:!1,authenticated:!1,OAuthToken:"",userInfo:null,userName:"",userAvatar:""}),N=function(e){function t(t){var n=e.call(this,t)||this;return n.state=G,n}return l.b(t,e),t.prototype.componentDidMount=function(){var e=this,t=H.parse(window.location.href,!0).query.code;t&&(this.setState({loading:!0}),console.log("code :"+t),fetch("https://git-access-trinity.herokuapp.com/authenticate/"+t).then(function(e){return e.json()}).then(function(t){var n=t.token;void 0===n?(console.error("Error: no access token recieved. Likely caused by old code used."),e.setState({loading:!1,error:!0})):console.log("access_token : "+n),e.setState({OAuthToken:n,loading:!1,authenticated:!0}),e.getUserInfo(n),e.props.githubStoreAuth}))},t.prototype.getUserInfo=function(e){var t=this;this.setState({loading:!0}),void 0!==e&&fetch("https://api.github.com/user?access_token="+e,{method:"get"}).then(function(e){var n=e.json();return t.setState({userInfo:n}),n}).then(function(e){var n=e.avatar_url,o=e.name;void 0===n?(console.error("Error: problem occurred parsing user data."),t.setState({loading:!1,error:!0})):t.setState({userAvatar:n,userName:o,loading:!1})})},t.prototype.render=function(){var e;return e=!1===this.state.authenticated?o.createElement("button",{className:"Git-Access-button",title:"GitHub Login",onClick:this.props.onPressGitSignIn}," Click here to authorize"):o.createElement("button",{className:"Continue to Github Metrics",title:"GitHub Metrics",onClick:this.props.onPressGitMetrics},"Click here to continue to GitHub metrics"),o.createElement("article",null,o.createElement(y.Helmet,null,o.createElement("title",null,"Home Page"),o.createElement("meta",{name:"description",content:"The homepage of my app"})),o.createElement("div",{className:"Home-Page"},o.createElement("header",{className:"Home-Page-header"},o.createElement("img",{className:"avatar",src:this.state.userAvatar?this.state.userAvatar:"https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png",alt:"logo"}),o.createElement("h1",{className:"App-title"},"Welcome to Git Access ",this.state.userName?this.state.userName:"Guest")),o.createElement("section",{className:"centered"},o.createElement("h2",null,"Here you can enter connect to the Github API"),o.createElement("p",null,"This project was created using ",o.createElement("i",null,"React-Redux")," for component creation on state management")),o.createElement("section",null,e)))},t}(o.Component);var S=Object(c.b)(function(e){return e.OAuthToken,{}},function(e){return{onPressGitSignIn:function(){return e((console.log("Action"),window.location.href="https://github.com/login/oauth/authorize?scope=user:email&client_id="+b+"&redirect_uri="+A,{type:m}))},onPressGitMetrics:function(){return e((console.log("Action"),window.location.href=k+"/metrics",{type:d}))},githubStoreAuth:function(t){return e((n=t,console.log("Action"),{type:g,token:n}));var n}}})(N),T=(n(51),function(){return o.createElement("h1",null,"Metrics")}),I=function(){return o.createElement("h1",null,"About")},_=function(){return o.createElement("ul",null,o.createElement("li",null,o.createElement(w.a,{to:"/"},"Home")),o.createElement("li",null,o.createElement(w.a,{to:"/metrics"},"Metrics")),o.createElement("li",null,o.createElement(w.a,{to:"/about"},"About")))},P=function(){return o.createElement(v.a,null,o.createElement("div",null,o.createElement(_,null),o.createElement(E.a,{exact:!0,path:"/",component:S}),o.createElement(E.a,{path:"/metrics",component:T}),o.createElement(E.a,{path:"/about",component:I})))},C=Object(r.b)(f,{OAuthToken:"",currentUsername:void 0});a.render(o.createElement(c.a,{store:C},o.createElement(P,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/service-worker.js";i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.268ca096.chunk.js.map