import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "shards-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SidebarUploadImage extends Component {
  static propTypes = {
    updateStateImageFiles: PropTypes.func.isRequired
  };
  state = {
    selectedFile: null,
    selectedFileName: "",
    file: false
  };

  onImageChange = event => {
    if (event.target.files) {
      const fileImage = event.target.files[0];

      this.setState(
        {
          file: true,
          selectedFileName: fileImage.name,
          selectedFile: fileImage
        },
        () => {
          const { selectedFile } = this.state;
          const reader = new FileReader();

          reader.onloadend = () => {
            let binaryData = reader.result;
            let base64String = window.btoa(binaryData);
            const fileImage = {
              file: base64String
            };
            this.props.updateStateImageFiles(fileImage);
          };
          reader.readAsBinaryString(selectedFile);
        }
      );
    }
  };

  render() {
    const nameSelectedCategory = () => {
      return (
        <div style={{ color: "green" }}>{this.state.selectedFileName}</div>
      );
    };
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Upload Image</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile2"
                  onChange={this.onImageChange}
                />
                <label className="custom-file-label" htmlFor="customFile2">
                  Choose file...
                </label>
                {this.state.file ? nameSelectedCategory() : ""}
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  artikel: state.artikel,
  imageFile: state.imageFile
});

const mapDispatchToProps = dispatch => {
  return {
    updateStateImageFiles: value =>
      dispatch({ type: "SELECTED_IMAGE_FILES", payload: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarUploadImage);
