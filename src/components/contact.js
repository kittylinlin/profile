import React from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
} from 'react-mdl';

const Contact = () => (
  <div className="contact-body">
    <Grid className="contact-grid">
      <Cell col={6}>
        <h2>Kitty Lin</h2>
        <i className="fa fa-user" style={{ fontSize: '250px' }} aria-hidden="true" />
        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Test paragraph</p>
      </Cell>
      <Cell col={6}>
        <h2>Contact Me</h2>
        <hr />
        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                <i className="fa fa-phone-square" aria-hidden="true" />
                09xx-xxx-xxx
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                <i className="fa fa-envelope-square" aria-hidden="true" />
                Test Email
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default Contact;
