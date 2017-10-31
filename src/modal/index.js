/**
 * Created by beggl on 10/23/2017.
 */
import React, { Component } from 'react'
import {Modal} from 'semantic-ui-react'
import './index.css'
const withModal = (WrappedComponent) => {
    return class ModaledComponent extends Component {

        constructor(props){
            super(props)

            this.state = {
                button: props.button,
                open: false,
                closeOnEscape: false,
                closeOnRootNodeClick: false,
            }

            this.close = this.close.bind(this);
        }

        close =() =>  this.setState({opent:false})



        render() {
            const {closeOnEscape, closeOnRootNodeClick } = this.state

            return (
            <Modal closeOnEscape={closeOnEscape} closeOnRootNodeClick = {closeOnRootNodeClick} trigger={this.state.button} closeIcon>
                <Modal.Content>
                    <WrappedComponent />
            </Modal.Content>
            </Modal>)
        }
    }
}

export default withModal