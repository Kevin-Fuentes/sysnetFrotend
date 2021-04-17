import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserRegister({ active }) {
     const [data, setdata] = useState(null)
     

     const getUser = async () => {
          const { data: { data } } = await axios.get('http://localhost:4000/api/registerUser');
          data.concat((JSON.parse(localStorage.getItem('data'))))

          setdata(data)

     }

     useEffect(() => {
          if (!data) {
               var timer = setTimeout(() => getUser(), 0)
          }

          return () => {
               clearTimeout(timer)
          }
     }, [data])

     const deleteUser = async (id) => {
          const res = await axios.delete(`http://localhost:4000/api/registerUser/${id}`);
          const deleteUser = data.filter((user) => id !== user._id)
          setdata(deleteUser);
          alert(res.data.message)
     }

     
     return (<>
          <div className="container">
               <div className="col-12" style={
                    { right: '250px' }
               }
               >
                    <h1>Usuarios</h1>
                    {data !== null ? <>
                         <table className="table table-dark mt-3 col">
                              <thead>
                                   <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tipo de Identificacion</th>
                                        <th scope="col">Identificacion</th>
                                        <th scope="col">Primer Nombre</th>
                                        <th scope="col">Segundo Nombre</th>
                                        <th scope="col">Primer Apellido</th>
                                        <th scope="col">Segundo Apellido</th>
                                        <th scope="col">Direccion</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Ocupacion</th>
                                        <th scope="col">Fecha de nacimiento</th>
                                        <th scope="col">Foto</th>
                                        <th scope="col">tools</th>
                                   </tr>
                              </thead>
                              {data.map((user, index) => {
                                   return <tbody key={index}>
                                        <tr>
                                             <th scope="row">{index + 1}</th>
                                             <td>{user.tipoId}</td>
                                             <td>{user.identificacion}</td>
                                             <td>{user.primerNombre}</td>
                                             <td>{user.segundoNombre}</td>
                                             <td>{user.primerApellido}</td>
                                             <td>{user.segundoApellido}</td>
                                             <td>{user.telefono}</td>
                                             <td>{user.direccion}</td>
                                             <td>{user.email}</td>
                                             <td>{user.ocupacion}</td>
                                             <td>{user.fechaNacimiento}</td>
                                             <td>{user.foto}</td>
                                             <td>
                                                  <Link to={`/${user._id}`}>
                                                  <button type="button" className="btn btn-primary m-2">Actualizar</button>
                                                  </Link>
                                                  <button type="button" className="btn btn-danger m-2" onClick={() => deleteUser(user._id)} >Eliminar</button>

                                             </td>

                                        </tr>

                                   </tbody>
                              })}

                         </table>
                         <Link to='/'>
                              <button type="button" className="btn btn-primary m-2" >Regresar</button></Link>
                    </>
                         : null


                    }
               </div>

          </div>
     </>)
}


export default UserRegister