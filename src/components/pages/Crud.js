import React from 'react';

const pstyle = {
    borderRadius: '60px',
    background: '#f4f4f4',
    padding: '10px 10px',
    borderStyle: 'solid',
}

class Add extends React.Component {
  state = {
    name: '',
    sdate: '',
    empid: '',
    phone: '',
    dept: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addemp(this.state.name,this.state.sdate,this.state.empid,this.state.phone,this.state.dept);
    this.setState({
      name: '',
      sdate: '',
      empid: '',
      phone: '',
      dept: ''
    });
  }

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });

  render() {
    return (
    <div>
      <h1 style={pstyle}>CRUD PAGE</h1>
      <form style={pstyle} onSubmit={this.onSubmit}> 
        <h1 style={{textDecoration: 'underline'}}>Create Employee record</h1>

        Name: <input type = 'text' name="name" value={this.state.name} onChange={this.onChange}/>
        <br/><br/>
        Start Date: <input type = 'text' name="sdate" value={this.state.sdate} onChange={this.onChange}/>
        <br/><br/>
        Employee ID: <input type = 'text' name="empid" value={this.state.empid} onChange={this.onChange}/> 
        <br/><br/>
        Contact Number: <input type = 'text' name="phone" value={this.state.phone} onChange={this.onChange}/>
        <br/><br/>
        Department: <input type = 'text' name="dept" value={this.state.dept} onChange={this.onChange}/>
        <br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}

let inp_name="";
let inp_date="";
let inp_id="";
let inp_number="";
let inp_dept="";
class Crud extends React.Component {
  constructor() {
    super();
    this.state={
      list: [
        {name: 'Brian',
        sdate: '3/20/2020',
        empid: 1,
        phone: '5101235678',
        dept: 'Software'
        },
        {name: 'Henry',
        sdate: '3/14/2020',
        empid: 2,
        phone: '4081235678',
        dept: 'Electrical'
        }
      ]
    }
    
  }

  ButtonRemoveHandler(id)
  {
      let upd_lst=this.state.list.filter(val=>val.empid!==id);
      this.setState({list:upd_lst});
  }



  //addemp
  addemp = (name,sdate,empid,phone,dept) => {
    const newEmployee = {
      name: name,
      sdate: sdate,
      empid: empid,
      phone: phone,
      dept: dept
    }

    this.setState({ list: [...this.state.list, newEmployee]})
  }



  ButtonUpdateHandler(id)
  {
    
    var list = [...this.state.list];
    var index = list.findIndex(obj => obj.empid === id);
    list[index].name = inp_name;
    list[index].sdate = inp_date;
    list[index].dept = inp_dept;
    list[index].phone = inp_number;
    list[index].empid = inp_id;
    this.setState({list});

    inp_name="";
    inp_date="";
    inp_id="";
    inp_number="";
    inp_dept="";
  }

  onSubmit = (e) => {
    e.preventDefault();

    
  }

  UpdateValueN(e)
    {
        inp_name=e.target.value;
    }
  UpdateValueD(e)
    {
        inp_dept=e.target.value;
    }
  UpdateValueP(e)
    {
        inp_number=e.target.value;
    }
  UpdateValueI(e)
    {
        inp_id=e.target.value;
    }
  UpdateValueS(e)
    {
        inp_date=e.target.value;
    }
  

  render() {
    return(
      <div>
        <Add addemp={this.addemp}/>
        <div>
          
          {this.state.list.map(val=>

            <div style={pstyle}>            

              <div><b>{val.name}</b></div>
              <div><b>{val.sdate}</b></div>
              <div><b>{val.empid}</b></div>        
              <div><b>{val.phone}</b></div>
              <div><b>{val.dept}</b></div>
              <br/>
              <div ><button onClick={()=>this.ButtonRemoveHandler(val.empid)}>Delete Employee Record</button></div>
              <br/>

              <form onSubmit={this.onSubmit}> 

                Name: <input type = 'text' name="name" onBlur={this.UpdateValueN} />
                <br/><br/>
                Start Date: <input type = 'text' name="sdate" onBlur={this.UpdateValueS} />
                <br/><br/>
                Employee ID: <input type = 'text' name="empid" onBlur={this.UpdateValueI}/> 
                <br/><br/>
                Contact Number: <input type = 'text' name="phone" onBlur={this.UpdateValueP}/>
                <br/><br/>
                Department: <input type = 'text' name="dept" onBlur={this.UpdateValueD}/>
                <br/><br/>

                <div ><button onClick={()=>this.ButtonUpdateHandler(val.empid)}>Update Employee Record</button></div>

                
                

                
                
              </form>


            </div>
          )}

        </div>
      </div>
    )
  }
}

export default Crud;


