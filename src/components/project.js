import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    const { activeTab } = this.state;
    if (activeTab === 0) {
      return (
        <div className="project-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}>React Project #1</CardTitle>
            <CardText>practice</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project 2 */}
          <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}>React Project #2</CardTitle>
            <CardText>practice</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
    return (
      <div><h1>This is React</h1></div>
    );
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="project-body">
        <Tabs
          activeTab={activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Express</Tab>
          <Tab>React</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
