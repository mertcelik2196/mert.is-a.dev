import { Component } from "react";


export default class Home extends Component {

    constructor(...props) {
        super(...props);

        this.state = {
          user: null,
          error: false,
          repos: []
        };
    }

    componentDidMount() {
$(document).ready(function(){$('.pop-up i').click(function(){$('.pop-up').css({'opacity': '0','visible': 'hidden','left': '5500px'})})})
$(document).ready(function(){$('#p').click(function(){$('.pop-up').css({'left': '0px','opacity': '1','visible': 'initial'})})})
if (!this.state.user) {
 fetch("https://api.github.com/users/mertcelik2196").then(res => res.json()).then(user => this.setState({ user, error: false })).catch(e => this.setState({ user: null, error: true }));
};

if(!this.state.repos.length) {
fetch(`${window.location.origin}/api/repos`).then(res => res.json()).then(repos => this.setState({ repos })).catch(e => this.setState({ repos: [] }))
}

    }

    render() {
        return (<div className="b">


        <div className="head">
        <h1>Mêrt</h1>
        <a href="https://www.instagram.com/mertcelik2196/"><i className="fab fa-instagram" /></a>
        <a href="https://github.com/mertcelik2196"><i className="fab fa-github" /></a>
        <a href="https://discord.com/users/708746139092123679"><i className="fab fa-discord" /></a>
        <a href="#projeler" id="p">Projelerim</a>
        </div>


        <div className="pop-up">
               <i className="fas fa-times"></i>
               <h1>Projelerim</h1>
               <div className="buttonsholder mt-2">
                           <a href="https://merttube.vercel.app/" className="btn btn-lg buttons blurple text-white">MertTube</a>
                           <a href="/premid.zip" className="btn btn-lg buttons blurple text-white" target="_blank">TürkAnime PreMID</a>
                           <a href="/ping.exe" className="btn btn-lg buttons blurple text-white" target="_blank">Ping Refresher</a>
                       </div>
           </div>


           <div className="container">
             <img src={this.state.user?.avatar_url ?? "https://avatars1.githubusercontent.com/mertcelik2196"} alt="Logo" title="Logo" draggable="false" />
             <div className="description">
               <h1>{ this.state.user?.name ?? "mertcelik2196" }</h1>
               <p>{(!this.state.user && this.state.error) ? "Error!" : this.state.user?.bio ?? "Loading..."}</p>
             </div>
           </div>

           <div align="center">
                  <h1 className="title">Github Repositories</h1>
                  </div>
                  <div id="repos">
                  {
                      this.state.repos.map((m, i) => {
                          return (
                    <div className="repo"><div className="repo-title"><a href={m.url} target="_blank">{m.name}</a><div><p>{m.star}</p><img src="https://discord.com/assets/141d49436743034a59dec6bd5618675d.svg"/></div></div><p>{m.description}</p></div>
                          )
                      })
                  }
  </div>

           <div id="footer">
          <h1 className="copyright">Tüm Hakları Saklıdır <i className="far fa-copyright"></i> - 2021</h1>
       </div>



</div>
  );

    }
}
