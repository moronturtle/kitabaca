import React, { Component } from "react";
import { Col } from "shards-react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "shards-react";

import {
  getCategory,
  deleteCategory
} from "../../actions/articleDashboard/categoryActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class DataTableCategory extends Component {
  state = {
    categoryItems: false,
    columsCategory: []
  };

  componentDidMount() {
    this.props.getCategory();
  }

  componentWillReceiveProps(nextProps) {
    let keysCategoryItems = Object.keys(nextProps.category.category[0]);
    let columsCat = keysCategoryItems.map(this.setColumnTable);

    const customColumns = {
      dataField: "action",
      text: "Actions",
      formatter: this.rankFormatter
    };
    columsCat.push(customColumns);

    this.setState(
      {
        categoryItems: nextProps.category.category,
        columsCategory: columsCat
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
    // console.log("ini row", row);
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
    this.props.deleteCategory(id);
  };

  render() {
    return (
      <Col sm="12">
        {this.state.categoryItems === false ? (
          ""
        ) : (
          <BootstrapTable
            keyField="_id"
            data={this.state.categoryItems}
            columns={this.state.columsCategory}
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
  category: state.category
});

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getCategory, deleteCategory }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableCategory);
