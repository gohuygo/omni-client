import React, { Component } from 'react'
import { Button, Modal, Icon, Form} from 'semantic-ui-react'

class SignupModal extends Component {
  state = {
    modalOpen: false,
    email: null,
    name: null,
    password: null,
  }

  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSignup = async () => {
    console.log("handle Signup")
  }

  render() {
    return(
      <Modal
        trigger={<Button primary inverted onClick={()=>{ this.handleOpen() }}>Signup</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose} >
        <Modal.Header>Create A New Account</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field required>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => {this.setState({name: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Email</label>
                <input placeholder='Email' onChange={(e) => {this.setState({email: e.target.value})}} />
              </Form.Field>

              <Form.Field required>
                <label>Password</label>
                <input placeholder='Password' onChange={(e) => {this.setState({password: e.target.value})}} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' onClick={this.handleSignup} inverted>
            <Icon name='checkmark'/> Signup
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default SignupModal
