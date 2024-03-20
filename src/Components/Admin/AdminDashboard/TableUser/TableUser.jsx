// import React, { useState, useEffect } from 'react';
// // import './Table.css';
// import { Button, Table, Form } from 'react-bootstrap';
// import axios from 'axios';

// function TableUser({ apiEndpoint }) {
//     const [data, setData] = useState([]);
//     const [formData, setFormData] = useState({});
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const [editItemId, setEditItemId] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, [apiEndpoint]);

//     const fetchData = async () => {
//         axios.get(apiEndpoint)
//             .then(response => {
//                 setData(response.data.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     };

//     const handleDelete = async (id) => {
//         axios.delete(`${apiEndpoint}/${id}`)
//             .then(() => {
//                 const newData = data.filter(item => item._id !== id);
//                 setData(newData);
//             })
//             .catch(error => {
//                 console.error('Error deleting data:', error);
//             });
//     };

   

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleFileChange = (e) => {
//         setFormData({
//             ...formData,
//             image: e.target.files[0]
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formDataToSend = new FormData();
//         formDataToSend.append('name', formData.name);
//         formDataToSend.append('image', formData.image);
//         formDataToSend.append('description', formData.description);

//         const axiosRequest = editItemId ?
//             axios.put(`${apiEndpoint}/${editItemId}`, formDataToSend) :
//             axios.post(apiEndpoint, formDataToSend);

//         axiosRequest
//             .then(response => {
//                 const jsonData = response.data;
//                 if (editItemId) {
//                     const newData = data.map(item => (item._id === editItemId ? jsonData : item));
//                     setData(newData);
//                     setEditItemId(null);
//                 } else {
//                     setData([...data, jsonData]);
//                 }
//                 setFormData({});
//                 setIsFormVisible(false);
//             })
//             .catch(error => {
//                 console.error('Error adding/editing data:', error);
//             });
//     };

//     return (
//         <div className='col-lg-10 '>
//             <Button onClick={() => setIsFormVisible(!isFormVisible)} className='my-5' variant="primary">
//                 {isFormVisible ? 'Hide Form' : 'Add Data'}
//             </Button>
//             {isFormVisible && (
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group>
//                         <Form.Label>Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="name"
//                             value={formData.name || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Image</Form.Label>
//                         <Form.Control
//                             type="file"
//                             name="image"
//                             onChange={handleFileChange}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             name="description"
//                             value={formData.description || ''}
//                             onChange={handleInputChange}
//                         />
//                     </Form.Group>
//                     <Button type="submit" className='mb-5' variant="primary">{editItemId ? 'Edit' : 'Submit'}</Button>
//                 </Form>
//             )}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>Name</th>
//                         <th>Image</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item._id}>
//                             <td>{item._id}</td>
//                             <td>{item.name}</td>
//                             <td><img src={item.image} alt="" height="50" width="50" /></td>
//                             <td>{item.description}</td>
//                             <td className='d-flex text-center '>
//                                 {/* <Button onClick={() => handleEdit(item._id)} variant="info" className='me-5'>Edit</Button> */}
//                                 <Button onClick={() => handleDelete(item._id)} variant="danger">Delete</Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }

// export default TableUser;


import React, { useState, useEffect } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import axios from 'axios';

function TableUser({ apiEndpoint }) {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({});
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, [apiEndpoint]);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiEndpoint);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(data)

    const fetchUserById = async (id) => {
        try {
            const response = await axios.get(`${apiEndpoint}/${id}`);
            setSelectedUser(response.data);
        } catch (error) {
            console.error('Error fetching user by ID:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiEndpoint}/${id}`);
            const newData = data.filter(item => item._id !== id);
            setData(newData);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleGetUserById = (id) => {
        fetchUserById(id);
        setSelectedUserId(id);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEmailChange = (e) => {
        setFormData({
            ...formData,
            [e.target.email]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);

        axios.post(apiEndpoint, formDataToSend)
            .then(response => {
                const jsonData = response.data;
                setData([...data, jsonData]);
                setFormData({});
                setIsFormVisible(false);
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
    };

    return (
        <div className='col-lg-10 '>
            <Button onClick={() => setIsFormVisible(!isFormVisible)} className='my-5' variant="primary">
                {isFormVisible ? 'Hide Form' : 'Add Data'}
            </Button>
            {isFormVisible && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button type="submit" className='mb-5' variant="primary">Submit</Button>
                </Form>
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                            <td className='d-flex text-center '>
                                <Button onClick={() => handleGetUserById(item._id)} variant="info" className='me-3'>View</Button>
                                <Button onClick={() => handleDelete(item._id)} variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedUser && (
                <div>
                    <h2>User Details</h2>
                    <p>ID: {selectedUser._id}</p>
                    <p>Name: {selectedUser.name}</p>
                    <p>Email:{selectedUser.email}</p>
                    <p>password: {selectedUser.password}</p>
                </div>
            )}
        </div>
    );
}

export default TableUser;
