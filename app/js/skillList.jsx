/** @jsx React.DOM */

/* jshint ignore:start */

var SkillList = React.createClass({
  render: function() {
    return (
        <div className="section" data-used-for="skills">
          <h4 className="section__heading">TOP 12 SKILLS</h4>
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
  <SkillList />,
  document.querySelector('#skill-list')
);

/* jshint ignore:end */
