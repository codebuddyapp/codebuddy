import React from 'react';
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class SearchElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            found: ['JavaScript', 'Java', 'Python', 'C', 'C#', 'C++', 'PHP', 'Swift', 'Objective-C'],
            open: false
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(text, source) {
        console.log(text, source);
        if(source === -1 && this.state.found.indexOf(text) === -1) {
            $('#search-field').val('');
        }
    }

    render() {
        return(
            <div className='search'>
                <AutoComplete
                    id='search-field'
                    floatingLabelText="Programming Language"
                    filter={AutoComplete.caseInsensitiveFilter}
                    onNewRequest={this.handleChange}
                    openOnFocus={false}
                    dataSource={this.state.found}
                />
                
            </div>
        )
    }
}

export default SearchElement;