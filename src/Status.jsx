import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import DatePicker from 'react-date-picker';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class Status extends Component {

 constructor(props){
 super(props);

 this.state = {
 contact:'No', 
 positive:'No', 
 key:'C', 
 submit: false,
 date : '',
 suggestedAction: 'You\'re good to head to class, Ag! Just make sure to double mask.'
 };
 this.handleSubmit = this.handleSubmit.bind(this);
 }

 handlecontactChange = (event) => {
 this.setState({
 contact: event.target.value
 });
 }

 handlepositiveChange = (event) => {
 this.setState({
 positive: event.target.value
 });
 }

 handleKeyChange = (event) => {
 this.setState({
 key: event.target.value
 });
 }

 handlecontactDateChange = (event) => {
  this.setState({
  date: event
  });
  }

 handleSubmit(event){
  this.setState({
    suggestedAction: 'You\'re good to head to class, Ag! Just make sure to double mask.'
  });
 this.setState({
  submit: true
 });
 event.preventDefault();
 }

 render() {
 
 return (
 <Container style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: '50px'}}>
 <div className="Generator">
 <header className="Generator-header">
 {/* <img src={logo} className="App-logo" alt="logo" /> */}
 <h2> &nbsp;&nbsp;Your Information </h2>
 <form onSubmit={this.handleSubmit}>

 <label> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have you been in contact with anyone who has tested positive for COVID-19
 in the past 14 days?* &nbsp;&nbsp; 
 </label>
 <select name='contact' value={this.state.contact} onChange={this.handlecontactChange}>
 <option selected value="No">No</option>
 <option value="Yes">Yes</option>
 </select>
 <p> </p>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If yes, select when: &nbsp;&nbsp; 
 <DatePicker
      value={this.state.date}
      onChange={this.handlecontactDateChange}
  />
 <p> </p>

 <label>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have you tested positive in the past 14 days?*&nbsp;&nbsp; 
 </label>
 <select name='positive' onChange={this.handlepositiveChange}>
 <option selected value="No">No</option>
 <option value="Yes">Yes</option>
 </select>
 <p> </p>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If yes, select when: &nbsp;&nbsp; 
 <DatePicker
      onChange={this.handlecontactDateChange}
  />
  <p> </p>
 
 <label> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select any symptoms, if applicable:&nbsp;&nbsp; 
 <ReactMultiSelectCheckboxes name='key' onChange={this.handleKeyChange} 
 options={[
  { label: 'Fever', value: 1},
  { label: 'Cough', value: 2},
  { label: 'Nausea', value: 3},
  { label: 'Headache', value: 4},
  { label: 'Difficulty Breathing', value: 5}
]} />
 </label>
 <p> </p>
 <input style={{width: "100%"}} type="submit" value="Determine Today's Action Plan" />
 </form>
 <p> </p>
 {this.state.submit &&
 <span><strong>Suggested Actions: </strong>{this.state.suggestedAction}
 <br />
 </span>}
 </header>
 </div>
 </Container>
 
 ); 
 }
}

export default Status;