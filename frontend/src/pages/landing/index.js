import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import AppBar from 'material-ui/AppBar';
import Template from '../../templates/default';


class Landing extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  render() {
    const styles = getStyles(this.context.muiTheme);
    return (
    <div>
      <div style={styles.welcome}>
        <AppBar title="Tilda Center" />
        <Template>
          <Paper style={styles.root}>
            Welcome to  Tilda Center!<br />
          <div style={styles.rootsmall}>We are an open space in Novi Sad, Serbia<br />
            where people gather to share resources and knowledge, <br />
            work on projects and develop their IT/technical solutions.
            </div>
          </Paper>
        </Template>
      </div>
      <div style={styles.about}>
        Content
      </div>
      <div style={styles.address}>
        <iframe
          width="50%"
          height="90%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="http://www.openstreetmap.org/export/embed.html?bbox=19.82783317565918%2C45.260894658321625%2C19.833819866180423%2C45.26323944678294&amp;layer=mapnik&amp;marker=45.26206517674392%2C19.8308265209198"
          style={styles.iframe}
        >
        </iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/?mlat=45.26207&amp;mlon=19.83083#map=18/45.26207/19.83083">
            View Larger Map
          </a>
        </small>
      </div>
      <div style={styles.contact}>
        Content
      </div>
    </div>
    );
  }
}


export default Landing;
