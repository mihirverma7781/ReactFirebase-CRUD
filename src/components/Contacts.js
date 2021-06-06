import React,{useState,useEffect} from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {

const [contactObjects,setContactObjects] = useState({})
const [currentId,setCurrentId] = useState('')

useEffect(() => {
    firebaseDb.child("contacts").on('value',snapshot=>{
        if(snapshot.val()!=null){
            setContactObjects({
                ...snapshot.val()
            })
        }
    })
}, [])


    const addOrEdit = obj => {
        firebaseDb.child("contacts").push(
            obj
            , err => {
                if (err) {
                    console.log(err);
                }
            });
    };

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Registration</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>

                <div className="col-md-7">
                    <div>List of contacts</div>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>FullName</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id=>{
                                    return<tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td><a className="btn btn-primary" onClick={()=>setCurrentId(id)}><i className="fas fa-pencil-alt"></i></a></td>
                                        <td><a className="btn btn-danger"><i className="fas fa-trash-alt"></i></a></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Contacts;
