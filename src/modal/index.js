/**
 * Created by beggl on 10/23/2017.
 */
import React, { Component } from 'react'
import './index.css'
const withModal = (WrappedComponent) => {
    return class ModaledComponent extends Component {

        constructor(props){
            super(props)

            this.state = {
                showContent: props.showContent,
            }

            this.closeModal = this.closeModal.bind(this);
        }

        closeModal(event){
            event.preventDefault()
            this.setState({showContent:false})

        }

        render() {

            const showContent = this.state.showContent;
            if(showContent){
            return (<div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <WrappedComponent />
                </div>
            </div>)
            }else{
                return null
            }
        }
    }
}

export default withModal