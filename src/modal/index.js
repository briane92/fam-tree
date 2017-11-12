/**
 * Created by beggl on 10/23/2017.
 */
import React, { Component } from 'react'
import {Modal, Button} from 'semantic-ui-react'
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
            this.onOpen = this.onOpen.bind(this);
        }


        onOpen = () => this.setState({open:true})
        close =() =>  this.setState({open:false})

        render() {
            const {closeOnEscape, closeOnRootNodeClick, button } = this.state

            let openButton
            if(button !== undefined ){
                console.log(button)
                console.log("this is a test")
                openButton =  React.cloneElement(button, {onClick: this.onOpen})

            }else{
                openButton = <Button onClick={this.onOpen}>Dummy Button </Button>
            }


            return (
            <Modal size={'small'} open={this.state.open} closeOnEscape={closeOnEscape} closeOnRootNodeClick = {closeOnRootNodeClick} trigger={openButton} closeIcon>
                <Modal.Content>
                    <WrappedComponent closeAction = {this.close} openAction = {this.onOpen} />
                </Modal.Content>
            </Modal>)
        }
    }
}

export default withModal