import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAction = this.handleAction.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  handleAction() {
    this.props.action();
    this.handleClose();
  }
  
  render() {
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} onClick={this.handleShow}>{this.props.openButtonText}</Button>
        
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.props.body}</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleAction} bsStyle='primary'>{this.props.actionText}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent
