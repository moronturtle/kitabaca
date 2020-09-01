import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
// import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import SidebarUploadImage from "../components/add-new-post/SidebarUploadImage";

import { Card, Button, CardBody, ListGroup, ListGroupItem } from "shards-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addArticle,
  resetStatusArticle
} from "../actions/articleDashboard/articleActions";

class AddNewPost extends Component {
  state = {
    articleTitleReset: "",
    articleContentReset: "",
    redirect: false
  };

  componentDidUpdate(prevProps) {
    const { success } = this.props.artikel;

    if (success !== prevProps.artikel.success) {
      alert("success added new article");
      window.location.reload(false);
    }
  }

  saveArticle = e => {
    const newArticle = {
      title: this.props.artikel.dataArticle.title,
      content: this.props.artikel.dataArticle.content,
      category: this.props.category.selectedCategory,
      fileImage: this.props.imageFile.fileImage
    };

    this.props.addArticle(newArticle);
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Add New Article"
            subtitle="Article Posts"
            className="text-sm-left"
          />
        </Row>
        <Row>
          {/* Editor */}
          <Col lg="9" md="12">
            <Editor
              title={this.state.articleTitleReset}
              content={this.state.articleContentReset}
            />
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            {/* <SidebarActions /> */}
            <SidebarUploadImage />
            <SidebarCategories />
            <Card small className="mb-3">
              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Button
                      theme="primary"
                      className="mb-3 mr-3"
                      onClick={this.saveArticle}>
                      Save Article
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  artikel: state.artikel,
  imageFile: state.imageFile,
  category: state.category
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ addArticle, resetStatusArticle }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost);
