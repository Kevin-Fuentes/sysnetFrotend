import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Form() {
     const [value, setValue] = useState({});
     const { id } = useParams('id');

     const getUserById = async () => {
          if (id) {
               const data = await axios.get(`http://localhost:4000/api/registerUser/${id}`)
               console.log(data.data.data);
              setValue(data.data.data);
          }
     }

     useEffect(() => {
        
               getUserById() 
          
        
     }, [])

     const handleChange = (e) => {
          const target = e.target
          setValue({ ...value, [target.name]: target.value })
     }

     const handlerSubmit = async (e) => {
          e.preventDefault();
          if (!id) {
             
               await axios.post('http://localhost:4000/api/registerUser', value);
               localStorage.setItem('data', JSON.stringify(value));
               window.location.href = '/user'
      
          }
     
               await axios.put(`http://localhost:4000/api/registerUser/${id}`, value)
               localStorage.setItem('data', JSON.stringify(value));
               window.location.href = '/user'

     }


    

     return (<>
          <div className='container'>
               <div className='row'>
                    <div className="col-sm-12 ">
                         <h1>Registrar Clientes</h1>
                    </div>
               </div>

               <form>
                    <div className="form-row">
                         <div className="col-md-6 mb-3">
                              <label htmlFor="identificacion" className="form-label">Tipo de identificacion</label>
                              <select onChange={handleChange} name='tipoId' className="form-control" value={value.tipoId || ''} required>
                                   <option value=''>Tipo de Identificacion</option>
                                   <option value="rc">RC</option>
                                   <option value="ti">TI</option>
                                   <option value="cc">CC</option>
                              </select>
                         </div>


                         <div className="col-md-6 mb-3">
                              <label htmlFor="identificacion" className="form-label">Identificacion</label>
                              <input value={value.identificacion || ''} onChange={handleChange} name='identificacion' type="text" className="form-control" id="identificacion" aria-describedby="id" required />

                         </div>
                    </div>

                    <div className="form-row">
                         <div className="col-md-6 mb-3">
                              <label htmlFor="primerNombre" className="form-label">Primer Nombre</label>
                              <input value={value.primerNombre || ''} onChange={handleChange} name='primerNombre' type="text" className="form-control" id="primerNombre" aria-describedby="primerNombre" required

                              />

                         </div>

                         <div className="col-md-6 mb-3">

                              <label htmlFor="segundoNombre" className="form-label">Segundo Nombre</label>
                              <input value={value.segundoNombre || ''} onChange={handleChange} name='segundoNombre' type="text" className="form-control" id="segundoNombre" aria-describedby="segundoNombre" />

                         </div>

                    </div>

                    <div className="form-row">
                         <div className=" col-md-6  mb-3">

                              <label htmlFor="primerApellido" className="form-label">Primer Apellido</label>
                              <input value={value.primerApellido || ''} onChange={handleChange} name='primerApellido' type="text" className="form-control" id="primerApellido" aria-describedby="primerApellido" required />

                         </div>

                         <div className="col-md-6 mb-3 ">

                              <label htmlFor="segundoApellido" className="form-label">Segundo Apellido</label>
                              <input value={value.segundoApellido || ''} onChange={handleChange} name='segundoApellido' type="text" className="form-control" id="segundoApellido" aria-describedby="segundoApellido" />

                         </div>

                    </div>

                    <div className="form-row">
                         <div className=" col-md-4  mb-3">

                              <label htmlFor="direccion" className="form-label">Direccion</label>
                              <input value={value.direccion || ''} onChange={handleChange} name='direccion' type="text" className="form-control" id="direccion" aria-describedby="direccion" required />

                         </div>

                         <div className="col-md-4 mb-3 ">

                              <label htmlFor="telefono" className="form-label">Telefono</label>
                              <input value={value.telefono ||
                                   ''} onChange={handleChange} name='telefono' type="text" className="form-control" id="telefono" aria-describedby="telefono" required
                                   pattern="^\d*$"
                              />

                         </div>


                         <div className="col-md-4 mb-3 ">

                              <label htmlFor="email" className="form-label">Email</label>
                              <input value={value.email || ''} onChange={handleChange} name='email' type="email" className="form-control" id="email" aria-describedby="email" required
                                   pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                              />

                         </div>

                    </div>

                    <div className="form-row">
                         <div className=" col-md-4  mb-3">

                              <label htmlFor="Ocupacion" className="form-label">Ocupacion</label>
                              <input value={value.ocupacion || ''} onChange={handleChange} name='ocupacion' type="text" className="form-control" id="Ocupacion" aria-describedby="Ocupacion" required />

                         </div>
                         <div className=" col-md-4  mb-3">

                              <label htmlFor="fecha" className="form-label">Fecha de Nacimiento</label>
                              <input value={value.fechaNacimiento || ''} onChange={handleChange} name='fechaNacimiento' type="date" className="form-control" id="fecha" aria-describedby="fecha" required />

                         </div>
                         <div className=" col-md-4  mb-3">

                              <label htmlFor="foto" className="form-label">Foto</label>
                              <div className="input-group mb-3">
                                   <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                   </div>
                                   <div className="custom-file">
                                        <input onChange={handleChange} name='foto' type="file" className="custom-file-input" id="file" aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" htmlFor="file">Choose file</label>
                                   </div>
                              </div>


                         </div>
                    </div>

                    <button onClick={handlerSubmit} type="submit" className="btn btn-primary">Registrar</button>

               </form>

          </div>
     </>)
}

export default Form;