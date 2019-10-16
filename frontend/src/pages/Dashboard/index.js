import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import api from '../../services/api';

export default function Dashboard() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function loadEmployees() {
            const response = await api.get('/employees');
            setEmployees(response.data);
            console.log(response.data);
        }

        loadEmployees();
    }, [])

    async function deleteEmployee(employeeId){
        console.log(employeeId);
    }

    return (
        <>
            <Link to="/register">
                <button className="btn">Novo Funcionário</button>
            </Link>

            <table className="employees-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>E-mail</th>
                        <th>nisPis</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.nisPis}</td>
                            <td>
                                <button type="button" className="btn btn-edit">Editar</button>
                                <button type="button" onClick={deleteEmployee(employee.id)} className="btn">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}