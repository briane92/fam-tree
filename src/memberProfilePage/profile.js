/**
 * Created by beggl on 12/9/2017.
 */
import gql from 'graphql-tag'

const BioSection = ({bio}) => {
    if(bio){
        return (
            <div>
                <h2>Biography</h2>
                <p>{bio}</p>
            </div>)
    } else {
        return null
    }
}


const Profile = ({member, editButton}) =>
    <div className='center'>
        <Header size='huge'>
            <Header.Content>
                {member.name}
            </Header.Content>
            <Button
                onClick={()=> this.setState({edit: true})}
                color='grey'
                floated='right'>
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </Button>
            <Header.Subheader>
                <Label as='a' color='black' ribbon>Relation</Label>
                {member.relation}
            </Header.Subheader>
        </Header>
        <BioSection bio={member.bio}/> <br/>
</div>

Profile.query = gql `
    query getMember($id: Int!) {
        member(id:$id) {
            id
            name
            relation
            bio
        }
    }`

export {Profile}


