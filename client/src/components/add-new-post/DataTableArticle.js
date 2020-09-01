import React, { Component } from "react";
import { Col } from "shards-react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "shards-react";

import {
  getArticle,
  deleteArticle
} from "../../actions/articleDashboard/articleActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class DataTableArticle extends Component {
  state = {
    ArticleItems: false,
    columsArticle: []
  };

  componentDidMount() {
    this.props.getArticle();
  }

  componentWillReceiveProps(nextProps) {
    let keysArticleItems = Object.keys(nextProps.article.articleItems[0]);
    let columsArt = keysArticleItems.map(this.setColumnTable);

    const customColumns = {
      dataField: "action",
      text: "Actions",
      formatter: this.rankFormatter
    };
    columsArt.push(customColumns);

    this.setState(
      {
        ArticleItems: nextProps.article.articleItems,
        columsArticle: columsArt
      },
      () => {}
    );
  }

  setColumnTable = data => {
    return {
      dataField: data,
      text: data.replace(/_/g, ""),
      hidden: data === "_id" ? true : false
    };
  };

  rankFormatter = (cell, row, rowIndex, formatExtraData) => {
    // console.log("ini row", row._id);
    return (
      <div>
        <Button
          size="sm"
          theme="danger"
          className="mb-2 mr-1"
          onClick={this.onDeleteClick.bind(this, row._id)}>
          Delete
        </Button>
      </div>
    );
  };

  onDeleteClick = id => {
    this.props.deleteArticle(id);
  };

  render() {
    return (
      <Col sm="12">
        {this.state.ArticleItems === false ? (
          ""
        ) : (
          <BootstrapTable
            keyField="_id"
            data={this.state.ArticleItems}
            columns={this.state.columsArticle}
            striped
            hover
            pagination={paginationFactory()}
          />
        )}
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  article: state.artikel
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getArticle, deleteArticle }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTableArticle);
