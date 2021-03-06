import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

import axios from 'axios'
import { withCookies } from 'react-cookie';


class UserDetailModal extends Component {
  state = {
    modalOpen: false,
  }

  handleOpen  = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleLogin = async () => {
    const { cookies } = this.props

    try{
      // const res = await axios.get(process.env.REACT_APP_SERVER_URL+'/get_info', {
      //   params:{
      //     jwt: cookies.get('jwt')
      //   }
      // })

      const res = await axios.get(process.env.REACT_APP_SERVER_URL+'/get_info', {
        withCredentials: true,
      })

      if(res.status === 200){
        console.log("success get_info", res)
      }

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return(
      <Modal
        trigger={<Button primary inverted onClick={()=>{ this.handleOpen() }}>UserDetailModal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose} >
        <Modal.Header>Get Detail</Modal.Header>

        <Modal.Actions>
          <Button color='green' onClick={this.handleLogin} inverted>
            <Icon name='checkmark'/> Get User Info
          </Button>

          <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close'/> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default withCookies(UserDetailModal)
