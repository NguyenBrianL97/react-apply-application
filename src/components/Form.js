import React from 'react';

const pstyle = {
    borderRadius: '60px',
    background: '#f4f4f4',
    padding: '10px 10px'

}


function Form() {
  return (
    <div style={pstyle}>
        <form >
            First Name: <input type = 'text' />
            <br/><br/>
            Last Name: <input type = 'text' />
            <br/><br/>
            Password: <input type = 'password' /> 
            {'     '}
            Re-type Password: <input type = 'password' />
            <br/><br/>
            <input type ='file' name='fileupload' accept = "application/pdf" />
            <br/><br/>
            <p>Cover Letter: </p> 
            <textarea>
                
            </textarea>
            <br/><br/>
            <input type = 'radio' /> Male <input type = 'radio' /> Female <input type = 'radio' />  Not Listed
            <br/><br/>
            <select name='dropdown'>
                <option value="SWE" selected>Software Engineer</option>
                <option value="CE" >Civil Engineer</option>
                <option value="EE" >Electrical Engineer</option>
            </select>
            <br/><br/>
            <input type = 'button' name ='ok' value='OK' />






        </form>
    </div>
  );
}

export default Form;
