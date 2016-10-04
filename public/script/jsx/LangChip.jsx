import React from 'react';
import $ from 'jquery';
import Chip from 'material-ui/Chip';

export default class LangChip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chips: this.props.languages
        }
        this.styles = {
          chip: {
            margin: 4,
          },
          wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
          },
        };
    }
    
    render() {
        var self = this;
        var chips = [];
        this.state.chips.forEach(function(element) {
         chips.push(<Chip
                    key={element.id}
                    onRequestDelete={function() {
                        self.props.deleteLanguageChip(element.label)
                    }}
                    style={self.styles.chip}
                    >
                    {element.label}
                </Chip>);
        })
        return (
            <div id='lang-chips' style={{
                    display: 'flex',
                    flexWrap: 'wrap'
            }}>
                {chips}
            </div>
            
            
            )
    }
}