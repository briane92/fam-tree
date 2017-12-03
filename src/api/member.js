/**
 * Created by beggl on 11/25/2017.
 */
import gql from 'graphql-tag'

const updateMemberMutation = gql `
    mutation updateMember($id: Int!, $input: MemberInput){
        updateMember(id: $id, input:$input){
            id
        }
    }
`

export {updateMemberMutation}