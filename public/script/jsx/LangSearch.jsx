import React from 'react';
import $ from 'jquery';

class SearchElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            found: []
        }
    }
    componentDidMount() {
        var self = this;
        $('#search-field').on('keydown', function(){
            $.getJSON('/languages', function(data) {
                var result = [];
                data.languages.forEach(function(element) {
                    var LCElement = element.toLowerCase();
                    var LCVal = $('#search-field').val().toLowerCase();
                    if(LCElement.indexOf(LCVal) !== -1 && LCVal !== '') {
                        result.push(element);
                    }
                })
                self.setState({
                    found: result
                })
            })
        })
    }
    render() {
        var foundElement = [];
        var self = this;
        if(self.state.found.length) {
            self.state.found.forEach(function(element) {
                foundElement.push(<div className='search-element' key={Math.random()}>{element}</div>);
            }) 
        } else {
            foundElement = '';
        }
        return(
            <div className='search'>
                {'Search Programming Language'}
                <input type='text' id='search-field'></input>
                {foundElement}
            </div>
        )
    }
}

export default SearchElement;