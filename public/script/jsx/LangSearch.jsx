import React from 'react';
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class SearchElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            found: ['JavaScript', 'Java', 'Python', 'C', 'C#', 'C++', 'Scala', 'Ruby', 'R', 'Perl', 'PHP', 'Swift', 'Objective-C'],
            searchText: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(text, source) {
        if(source !== -1 && this.state.found.indexOf(text) !== -1) {
            var result = {id: source, label: text}
            this.props.func(result);
        }
        var self = this;
    }

    render() {
        return(
            <div className='search'>
                <AutoComplete
                    key={Math.random()}
                    id='search-field'
                    searchText={this.state.searchText}
                    style={{marginTop: '15px'}}
                    hintText="Programming Language"
                    filter={AutoComplete.caseInsensitiveFilter}
                    onNewRequest={this.handleChange.bind(this)}
                    openOnFocus={true}
                    dataSource={this.state.found}
                />
                
            </div>
        )
    }
}

export default SearchElement;