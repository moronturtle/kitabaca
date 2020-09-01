import React, { Component } from "react";
import { Container, Row, Card } from "shards-react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

import PageTitle from "../components/common/PageTitle";
import classnames from "classnames";

import DataTableArticle from "../components/add-new-post/DataTableArticle";
import DataTableCategory from "../components/add-new-post/DataTableCategory";

class ManageArticle extends Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <div>
        <Container
          fluid
          className="main-content-container px-4 pb-4"
          style={{ marginTop: "0" }}>
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="4"
              title="Manage Article"
              subtitle="Article data"
              className="text-sm-left"
            />
          </Row>
          <Card small className="mb-3" style={{ padding: "1em" }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}>
                  Article
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}>
                  Category
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row style={{ paddingTop: "1em" }}>
                  <DataTableArticle />
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row style={{ paddingTop: "1em" }}>
                  <DataTableCategory />
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ManageArticle;
