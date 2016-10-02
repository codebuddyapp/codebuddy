import React from 'react';
import ReactDOM from 'react-dom';
import SearchElement from './LangSearch.jsx'



class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    submit(){
        alert('Hello '+document.getElementById('firstName').value);
        return false;
    }
    render() {
        return (
            <form>
                First Name: <br />
                <input type='text' id='firstName' /><br />
                Last Name: <br />
                <input type='text' id='lastName' /><br />
                Description: <br />
                <textarea style={{width: '50vh', height: '100px'}} type='text' id='description' /><br />
                <SearchElement/>
                GitHub <input type='text' id='GitHub' /> <br />
                FreeCodeCamp <input type='text' id='FreeCodeCamp' /> <br />
                Facebook <input type='text' id='Facebook' /> <br />
                CodePen <input type='text' id='CodePen' /> <br /> <br />
                <input id='registerButton' type='button' onClick={this.submit} value='Register' />
            </form>
            );
    }
}

ReactDOM.render(<Search />, document.getElementById('name'));

