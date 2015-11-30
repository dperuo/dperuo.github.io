/** @jsx React.DOM */

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.github.com/users/dperuo/repos?type=public&sort=updated");
xhr.setRequestHeader("origin", "http://dperuo.github.io.dev");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "442db54d-07d7-5a43-1cf2-b4d1dfc4eff6");

xhr.send(data);

/* jshint ignore:start */

var OpenSource = React.createClass({
  render: function() {
    return (
        <div className="section" data-used-for="repos" web-only>
          <h4 className="section__heading">OPEN SOURCE</h4>
          <div className="row section__entry">
            <ul className="skill-list">
              <li className="skill-list__item">Angular.js</li>
              <li className="skill-list__item">Bootstrap 3</li>
              <li className="skill-list__item">CSS3</li>
              <li className="skill-list__item">Foundation 5</li>
              <li className="skill-list__item">JavaScript</li>
              <li className="skill-list__item">Jira</li>
              <li className="skill-list__item">jQuery</li>
              <li className="skill-list__item">Node.js</li>
              <li className="skill-list__item">npm</li>
              <li className="skill-list__item">React.js</li>
              <li className="skill-list__item">Sass</li>
              <li className="skill-list__item"><a href="/skills"><i className="fa fa-fw fa-share"></i>More&hellip;</a></li>
            </ul>
        </div>
      </div>
    );
  }
});

React.render(
  <OpenSource />,
  document.querySelector('#open-source')
);

/* jshint ignore:end */
