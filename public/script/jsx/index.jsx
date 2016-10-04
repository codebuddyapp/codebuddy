import React from 'react';
import ReactDOM from 'react-dom';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';


import SearchElement from './LangSearch.jsx'
import LangChip from './LangChip.jsx'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenLanguages: []
        }
        this.handleLanguageAdd = this.handleLanguageAdd.bind(this);
        this.handleDeletingLanguageChip = this.handleDeletingLanguageChip.bind(this);
    }
    submit(){
        alert('Hello '+document.getElementById('firstName').value);
        return false;
    }
    handleLanguageAdd(result) {
        var test = (el) => el.id === result.id;
        var exist = this.state.chosenLanguages.some(test);
        if(!exist) {
            var chosen = this.state.chosenLanguages;
            chosen.push(result);
            this.setState({
                chosenLanguages: chosen
            })
            
        }
    }
    handleDeletingLanguageChip(label) {
        var newArray = this.state.chosenLanguages;
        newArray.splice(this.state.chosenLanguages.indexOf(label), 1);
        this.setState({
            chosenLanguages: newArray
        })
    }
    render() {
        return (
            <form>
                <TextField
                    style={{marginTop: '15px'}}
                    id="firstName"
                    hintText="First Name"
                />
                <TextField
                    style={{marginTop: '15px'}}
                    id="lastName"
                    hintText=""
                    hintText="Last Name"
                />
                <TextField
                    style={{textAlign: 'left'}}
                    id="description"  
                    hintText="Tell us about yourself"
                    multiLine={true}
                    rows={2}
                />
                <SearchElement func={this.handleLanguageAdd} />
                <LangChip languages={this.state.chosenLanguages} deleteLanguageChip={this.handleDeletingLanguageChip} />
                <Divider style={{marginRight: '-25px', marginLeft: '-25px', marginTop: '35px'}} />
                <TextField hintText="GitHub"  underlineShow={false} style={{lineHeight: '14px', height: '38px'}}/>
                <Divider style={{marginRight: '-25px', marginLeft: '-25px'}} />
                <TextField hintText="Facebook"  underlineShow={false} style={{lineHeight: '14px', height: '38px'}} />
                <Divider style={{marginRight: '-25px', marginLeft: '-25px'}} />
                <TextField hintText="FreeCodeCamp"  underlineShow={false} style={{lineHeight: '14px', height: '38px'}} />
                <Divider style={{marginRight: '-25px', marginLeft: '-25px'}} />
                <TextField hintText="CodePen"  underlineShow={false} style={{lineHeight: '14px', height: '38px'}} />
                <Divider style={{marginRight: '-25px', marginLeft: '-25px', marginBottom: '15px'}} />
                 <RaisedButton label="Primary" primary={true} onClick={this.submit} />
            </form>
            );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <div style={{
                    textAlign: 'center',
                    marginTop: '100px',
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <Paper style={{display: 'block', width:'356px', padding: '25px'}}>
                        <h1 style={{fontWeight: '100'}}>Registration page</h1>
                        <Search />
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('name'));

