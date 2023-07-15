
// import React library and Component class from react package.

import React, { Component } from 'react';

// import CSS from Form.css.

import './Form.css'

// Defines a class component named FormClass that extends the Component class from React.

class FormClass extends Component {



    state = {
        Name: '',
        Rate: '',
        Dept: '',
        EmpData: []
    };



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.Name, this.state.Dept, this.state.EmpData);
    };


    clickHandler = (e) => {
        e.preventDefault();
        const { Name, Rate, Dept } = this.state;
        const newEmployee = { Name, Rate, Dept };
        const updatedEmpData = [...this.state.EmpData, newEmployee];
        this.setState({ EmpData: updatedEmpData, Name: '', Rate: '', Dept: '' });
    };



    render() {
        const { Name, Rate, Dept, EmpData } = this.state;

        return (
            <div className='container'>

                <h1 className='my-heading'>Employee Feedback Form</h1>



                <form>
                    <div className='name-area'>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter"
                            name="Name"
                            value={Name}
                            onChange={this.changeHandler}
                            required
                        /><br />
                    </div>

                    <div className='dept-area'>
                        <label htmlFor="dept">Department:</label>
                        <input
                            id="dept"
                            type="text"
                            placeholder="Enter"
                            name="Dept"
                            value={Dept}
                            onChange={this.changeHandler}
                            required
                        /><br />
                    </div>

                    <div className='rating-area'>
                        <label htmlFor="rating">Rate:</label>
                        <input
                            id="rating"
                            type="number"
                            placeholder="Enter"
                            name="Rate"
                            value={Rate}
                            onChange={this.changeHandler}
                            required
                        /><br />

                    </div>
                    <button onClick={this.clickHandler}>Submit</button>
                </form>



                {EmpData.length > 0 && (
                    <div className='output'>
                        {/* <h2>Employee Data:</h2> */}
                        {EmpData.map((employee, index) => (
                            <p className='data' key={index}>
                                Name: {employee.Name} |
                                Department: {employee.Dept} |
                                Rate: {employee.Rate}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}


export default FormClass;
