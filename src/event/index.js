/**
 * Created by beggl on 10/23/2017.
 */
import React,{Component} from 'react'

const Event =(e) =>
    <div>
        <h1>{e.title}</h1> - <h2>{e.date}</h2>
        <p>{e.description}</p>
    </div>

const Timeline = (events) =>
    <div>
        {events.map(e => (
            <Event e={e}/>
        ))
        }
    </div>


class EventForm extends Component {

    constructor() {
        super()
        this.state = {
            title: "Title",
            date: 'Date',
            description: 'Description'
        }

    }


    render() {
        const form  =
            (<form>
                <label>Title</label><input type="text"/><br/>
                <label>Date</label><input type="text" /><br/>
                <label>Description</label><br/>
                <input type="text-area"/>
                <button type="submit" value="submit">Add</button>
            </form>)

        return form

    }
}

export {Event, Timeline}