/**
 * Created by beggl on 10/31/2017.
 */
import React, { Component } from 'react'
import {withModal} from '../uiComponents'
import {CreateMemberFormWithData} from './createMember'
import {MemberGridWithData as MemberGrid} from './memberGrid.js'
import {Button} from 'semantic-ui-react'


class MemberPage extends Component {
    constructor () {
        super()
        this.state = {
            userName: '',
            AddRelationship: false,
            AddEvent:false,
        }
        this.closeModal = this.closeModal.bind(this);
        this.addRelation = this.addRelation.bind(this);
    }

    closeModal = () => this.setState({AddRelationship:false})
    addRelation = (relation)  => {
        const updatedrelations = [...this.state.relationships, relation]
        this.setState({
            relationships: updatedrelations
        })
    }
    componentDidMount() {
        console.log("component did mount")
        const user = localStorage.getItem('userName')
        console.log(localStorage)
        console.log(user)
        let userName = ''
        if (user) {
            userName = user
            console.log(userName)
        }
        this.setState({userName:userName})
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`current username ${this.state.userName}`)
        console.log(`next username ${nextState.userName}`)
        return (this.state.userName !== nextState.userName)

    }

    render(
    ) {
        const relationshipButton = <Button color='black'>Add Relationship</Button>
        const CreateMemberForm = withModal(CreateMemberFormWithData)

        return (
            <div className="App">
                <h1 id="heading"> Family Members </h1>
                <MemberGrid userName={this.state.userName}/> <br/>
                <CreateMemberForm  showContent = {this.state.AddRelationship} button={relationshipButton} />
            </div>
        );
    }

}

export default MemberPage