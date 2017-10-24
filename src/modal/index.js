/**
 * Created by beggl on 10/23/2017.
 */
import React, { Component } from 'react'
const withModal = (wrappedComponent) => {
    return class ModaledComponent extends Component {

        constructor(props){
            super(props)

            this.state = {
                showContent:false,
            }

            this.closeModal = this.closeModal.bind();
        }

        closeModal(event){
            event.preventDefault()
            this.setState({showContent:false})

        }

        render() {

            const showContent = this.props.showContent;
            if(showContent){
            return (<div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <wrappedComponent {...this.props}/>
                </div>
            </div>)
            }else{
                return null
            }
        }
    }
}

export default withModal