var React = require("react");
var ReactDOM = require('react-dom')



// var HelloMessage = React.createClass({
//   render: function() {
//     return <div>
//             <label htmlFor='first-name'>First Name:</label>
//             <input id='firstName' name='first-name' /><br/>
//         </div>;
//   }
// });


//используй обычные input 
function Form(props) {
    function submit(){
        alert('Hello '+document.getElementById('firstName').value);
        return false;
    }
    return(<form>
                First Name: <br />
                <input type='text' id='firstName' /><br />
                Last Name: <br />
                <input type='text' id='lastName' /><br />
                Description: <br />
                <textarea style={{width: '50vh', height: '100px'}} type='text' id='description' /><br />
                
                GitHub <input type='text' id='GitHub' /> <br />
                FreeCodeCamp <input type='text' id='FreeCodeCamp' /> <br />
                Facebook <input type='text' id='Facebook' /> <br />
                CodePen <input type='text' id='CodePen' /> <br /> <br />
                <input id='registerButton' type='button' onClick={submit} value='Register' />
            </form>);
    
}


// class AddLanguage extends React.Component{
        
//         constructor(){
//             this.state ={}
//         }
//         addSpeakingLang(){
//             this.state
//         }
// }


ReactDOM.render(<Form />, document.getElementById('name'));

