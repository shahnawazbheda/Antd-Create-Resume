import React from 'react'
import { useState } from 'react'
import { Button, Form, Input } from 'antd'



export default function Resume(props) {
    const [name, setName] = useState(props.name)
    const [street, setStreet] = useState(props.Street)
    const [near, setNear] = useState(props.Near)
    const [city, setcity] = useState(props.city)
    const [email, setEmail] = useState(props.Email)
    const [contactNo, setcontactNo] = useState(props.contactNo)
    const [objective, setObjective] = useState(props.objective)
    const [courses, setCourses] = useState(props.Courses)
    const [university, setUniversity] = useState(props.University)
    const [passingYear, setPassingYear] = useState(props.PassingYear)
    const [percetnage, setPercetnage] = useState(props.Percetnage)
    const [skills, setskills] = useState(props.skills)
    const [hobbies, setHobbies] = useState(props.Hobbies)
    const [experience, setExperience] = useState(props.Experience)


    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (

        <>
            <center>
                <div className='bg-light container text-dark text-center m-5'>
                    <h1><b> RESUME</b></h1>
                    <div className='row m-5 ps-5 pe-5'>
                        <div className='col-8 text-start'>
                            <h5><b >{name}</b><br />
                                {street},<br /> {near}<br /> {city}</h5>
                        </div>
                        <div className='col-4 text-start'>
                            <h5><b>E-mail:</b>{email}<br />
                                <b >Contact No. :</b>{contactNo}</h5><br />
                        </div>
                        <div className='col-12'>
                            <h5 className='alert alert-secondary text-start '>
                                <b> Objective:</b>

                            </h5>
                            <h5 className='text-start text-justify'>{objective}</h5>
                        </div>

                        <div className='col-12'>
                            <h5 className='alert alert-secondary text-start '>
                                <b> Educational Qualifications:</b>

                            </h5>
                            <h5 className='text-start text-justify'>
                                {/* <table className='table-borderd table-striped'>
                                <tr>
                                    <td>Courses</td>
                                    <td>University/Board</td>
                                    <td>Passing Year</td>
                                    <td>Percentage</td>
                                </tr>
                            </table> */}
                                <table className="m-1 table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Courses</th>
                                            <th scope="col">University/Board</th>
                                            <th scope="col">Passing Year</th>
                                            <th scope="col">Percetnage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{courses}</th>
                                            <td>{university}</td>
                                            <td>{passingYear}</td>
                                            <td>{percetnage}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </h5>
                        </div>

                        <div className='col-12 text-start'>
                            <h5 className='alert alert-secondary'>
                                <h5><b>Technical Skills</b></h5>
                            </h5>
                            <h6><b>Computer:</b> {skills}</h6>

                        </div>

                        <div className='col-12 text-start'>
                            <h5 className='alert alert-secondary'>
                                <h5><b>Hobbies</b></h5>
                            </h5>
                            <h6>{hobbies}</h6>

                        </div>

                        <div className='col-12 text-start'>
                            <h5 className='alert alert-secondary'>
                                <h5><b>Experience</b></h5>
                            </h5>
                            <h6>{experience}</h6>

                        </div>


                    </div>

                </div>
            </center>
            <div className='container'>
                <h4 className='text-light'>Enter Name</h4>
            <input className='form-control' onChange={(event)=>{setName(event.target.value)}} value={name} type='text'></input>
            <div className='row'>
                <div className='col-4'>
                    <h4 className='text-light'>Street</h4>
                    <input className='form-control' onChange={(event)=>{setStreet(event.target.value)}} value={street} type='text'></input>

                </div>
                <div className='col-4'>
                    <h4 className='text-light'>Near</h4>
                    <input className='form-control'  onChange={(event)=>{setNear(event.target.value)}} value={near} type='text'></input>

                </div>
                <div className='col-4'>
                    <h4 className='text-light'>city</h4>
                    <input className='form-control'  onChange={(event)=>{setcity(event.target.value)}} value={city} type='text'></input>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                    <h4 className='text-light'>Enter E-Mail</h4>
                    <input className='form-control'  onChange={(event)=>{setEmail(event.target.value)}} value={email} type='text'></input>

                </div>
                <div className='col-6'>
                    <h4 className='text-light'>Enter ContactNo.</h4>
                    <input className='form-control'  onChange={(event)=>{setcontactNo(event.target.value)}} value={contactNo} type='text'></input>

                </div>
            </div>
            <h4 className='text-light'>Enter Objetive</h4>
            <textarea className='form-control' type='text' onChange={(event)=>{setObjective(event.target.value)}} value={objective} rows={3}></textarea>

            <div className='row'>
                <div className='col-3'>
                    <h4 className='text-light'>Enter Courses</h4>
                    <input className='form-control'  onChange={(event)=>{setCourses(event.target.value)}} value={courses} type='text'></input>

                </div>

                <div className='col-3'>
                    <h4 className='text-light'>Enter University</h4>
                    <input className='form-control' onChange={(event)=>{setUniversity(event.target.value)}} value={university} type='text'></input>

                </div>

                <div className='col-3'>
                    <h4 className='text-light'>Enter Passing Year.</h4>
                    <input className='form-control'  onChange={(event)=>{setPassingYear(event.target.value)}} value={passingYear} type='text'></input>

                </div>

                <div className='col-3'>
                    <h4 className='text-light'>Enter Percentage.</h4>
                    <input className='form-control' onChange={(event)=>{setPercetnage(event.target.value)}} value={percetnage} type='text'></input>

                </div>
            </div>
            <h4 className='text-light'>Enter Skills.</h4>
            <textarea className='form-control'  onChange={(event)=>{setskills(event.target.value)}} value={skills} type='text' rows={3}></textarea>

            <h4 className='text-light'>Enter Hobbies.</h4>
            <textarea className='form-control'  onChange={(event)=>{setHobbies(event.target.value)}} value={hobbies} type='text' rows={3}></textarea>

            <h4 className='text-light'>Enter Experience.</h4>
            <input className='form-control'  onChange={(event)=>{setExperience(event.target.value)}} value={experience} type='text'></input><br/>

            <button className='btn btn-primary form-control'>submit</button>

                {/* <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                 
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>*/}
            </div> 

        </>
        // <div className='container text-light text-center' >Resume</div>
    )
}
