import React, { Component } from 'react'
import { Button, Modal, Icon, Form} from 'semantic-ui-react'

import axios from 'axios'
import { withCookies } from 'react-cookie';


class LoginModal extends Component {
  state = {
    modalOpen: false,
    email: null,
    password: null,
  }

  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleLogin = async () => {
    const { name, email, password } = this.state
    const { cookies } = this.props

    try{
      const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/login', {
        email: email,
        password: password,
        name: name,
      })

      if(res.status === 200){
        cookies.set('jwt', res.data.jwt)
        cookies.set('email', res.data.email)
        this.handleClose();
      }

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return(
      <Modal
        trigger={<Button primary inverted onClick={()=>{ this.handleOpen() }}>Login</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose} >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
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
          <Button color='green' onClick={this.handleLogin} inverted>
            <Icon name='checkmark'/> Login
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default withCookies(LoginModal)
