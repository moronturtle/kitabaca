import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormInput
} from "shards-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  addCategory,
  getCategory
} from "../../actions/articleDashboard/categoryActions";

import PropTypes from "prop-types";

class SidebarCategories extends Component {
  static propTypes = {
    addCategory: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
  };

  state = {
    newCategory: "",
    pickCategory: ""
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newCategory = () => {
    const newCategory = {
      category: this.state.newCategory
    };

    this.props.addCategory(newCategory);
  };

  pickCategory = e => {
    let categoryChecked = e.target.value;

    if (e.target.checked) {
      this.setState(
        {
          pickCategory: categoryChecked
        },
        () => {
          const { pickCategory } = this.state;
          const selectedCategory = {
            category: pickCategory
          };
          this.props.updateStateCategory(selectedCategory);
        }
      );
    }
  };

  render() {
    const { category } = this.props.category;

    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Categories</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {category.map(({ _id, category }) => (
                <div className="form-check" key={_id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={category}
                    name={category}
                    checked={
                      this.state.pickCategory === category ? true : false
                    }
                    onChange={this.pickCategory}
                  />
                  <label className="form-check-label">{category}</label>
                </div>
              ))}
            </ListGroupItem>
            <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput
                  placeholder="New category"
                  onChange={this.onChange}
                  name="newCategory"
                />
                <InputGroupAddon type="append">
                  <Button
                    theme="white"
                    className="px-2"
                    onClick={this.newCategory}>
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = dispatch => {
  return {
    updateStateCategory: value =>
      dispatch({ type: "SELECTED_CATEGORY", payload: value }),
    ...bindActionCreators({ addCategory, getCategory }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCategories);
