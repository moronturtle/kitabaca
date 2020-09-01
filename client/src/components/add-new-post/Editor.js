import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import "../ck-editor/CkEditor";
import { connect } from "react-redux";

class Editor extends Component {
  state = {
    articleTitle: this.props.title,
    articleContent: this.props.content
  };

  componentWillReceiveProps(props) {
    //this will get whenever state changes after initial render
    // console.log(props);
    if (props.artikelJudul === "" && props.artikelIsi === "") {
      this.setState({
        articleTitle: props.title,
        articleContent: props.content
      });
    }
  }

  onChange = e => {
    this.setState(
      {
        articleTitle: e.target.value
      },
      () => {
        const { articleTitle } = this.state;
        const dataArticle = {
          title: articleTitle,
          content: this.props.artikelIsi
        };
        this.props.updateStateDataArticle(dataArticle);
      }
    );

    // this.setState({ [e.target.name]: e.target.value }, () => {
    //   console.log("ini title", this.state.email);
    // });
  };

  rteChange = (content, delta, source, editor) => {
    this.setState(
      {
        articleContent: editor.getHTML()
      },
      () => {
        const { articleContent } = this.state;
        const dataArticle = {
          content: articleContent,
          title: this.props.artikelJudul
        };
        this.props.updateStateDataArticle(dataArticle);
      }
    );
  };
  render() {
    return (
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput
              size="lg"
              className="mb-3"
              placeholder="Article Title"
              name="articleTitle"
              onChange={this.onChange}
              value={this.state.articleTitle}
            />
            <ReactQuill
              className="add-new-post__editor mb-1"
              name="articleContent"
              onChange={this.rteChange}
              value={this.state.articleContent || ""}
            />
          </Form>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { artikel } = state;
  return {
    artikelJudul: artikel.dataArticle.title,
    artikelIsi: artikel.dataArticle.content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateStateDataArticle: value =>
      dispatch({ type: "DATA_ARTICLE", payload: value })
  };
}

// const mapStateToProps = state => ({
//   // artikel: state.articleItems
//   artikeltes: state.artikel.titleArticle
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
