import React,{ Component } from 'react';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
      super(props); 
      this.state={
          name:'',
          age:'',
          height:'',
          weight:'',
          gender:'',
          bmi:''
      };
      this.handleChange =this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);  
      this.handleRadio = this.handleRadio.bind(this); 
     this.handleClear  = this.handleClear.bind(this);
    }
   
    handleChange({target}){
      this.setState({
          [target.name]:target.value
      });
  }
  
  handleSubmit(event){
    event.preventDefault();
    var div = Number(this.state.height/100);
    div = Number(div) *  Number(div);
    const com =( Number(this.state.weight) / Number(div)).toFixed(2);
    this.setState({
        bmi : com      
    });
    
}

handleRadio(event){
    this.setState({
      selectedOption: event.target.value
    });
}


handleClear(event){
  this.setState({
    name:'',
    age:'',
    height:'',
    weight:'',
    gender:'',
    bmi:Number(0),
    selectedOption: null
  });

 const col =  document.getElementsByClassName("footer");
  
}
    render() {
      
      const renderNameChange = () => {
        if (this.state.name==='') {
          return <div>Hi  ............,</div>;
        } else {
          return <div> Hi {this.state.name}!<br/></div> ;
        }
      }
      const renderBmiChange =() =>{
        if(this.state.bmi ===''){
          return <div>Your BMI is  ...........</div>;
        }
        else{
          var str = "";
          if(this.state.bmi < 18.5)
            str = "Under Weight";
          else if(this.state.bmi >= 18.5 & this.state.bmi <=24.5)
          str = "Normal Weight";
          else if(this.state.bmi >= 25 & this.state.bmi <=30)
          str = "Over Weight";
          else if(this.state.bmi >=35  & this.state.bmi <= 39.5)
          str = "Severe Obesity";
          else if(this.state.bmi >= 40 & this.state.bmi <= 44.5)
          str = "Morbid Obesity";
          else if(this.state.bmi >=45)
          str = "Super Obesity";
          else
          return <div>Your BMI is ........... <br/> </div>;

          return <div>Your BMI is {this.state.bmi} <br/> {str} </div>;
        }
      }

      
        return(
<div className="whole">                
                        <div className="header">
                                 <h1>Body Mass Index(BMI) Calculator</h1>                            
                        </div>
  <div id="body-part">
      <div className="body">       
                        
          <form onSubmit={this.handleSubmit}>
                  <label className="labels">
                          Name
                   </label><br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br/>
               
                   <label className="labels">
                          Age
                   </label><br/>
                        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} ></input><br/>
            
                   <label className="labels">
                          Height
                   </label><br/>
                            <input type="text" name="height" placeholder='in cm' value={this.state.height} onChange={this.handleChange}></input><br/>
            
                   <label className="labels">
                          Weight
                   </label><br/>
                            <input type="text" name="weight" placeholder='in kg' value={this.state.weight} onChange={this.handleChange}></input><br/>
            
                   <label>
                          Gender
                   </label><br/>  

                     <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.handleRadio}
            />
            Male
          </label>
        
        
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.handleRadio}
            />
            Female
          </label>   <br/>
             <input type="submit" value="Calculate"></input>
              <button id="clear" value="Clear" onClick={this.handleClear}>Clear</button>
          </form>
      </div>
  </div>
  <div id="bottom-head">Results</div>
        <div className='footer'> 
               
        {renderNameChange()}
        {renderBmiChange()}  
        </div>  
        <div id="image">
        </div>          
</div>
);
    
}
  }
