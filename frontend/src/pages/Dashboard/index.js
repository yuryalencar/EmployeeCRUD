import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import api from '../../services/api';

export default function Dashboard({ history }) {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function loadEmployees() {
            const response = await api.get('/employees');
            setEmployees(response.data);
        }

        loadEmployees();
    }, [employees])

    async function handleSubmitToDelete(employeeId) {
        async function deleteEmployee() {
            var userChoice = window.confirm("Deseja realmente deletar este usuário ?");
            if (userChoice) {
                const response = await api.delete('/employees/' + employeeId);
            
                if(response.status === 204){
                    const response = await api.get('/employees');
                    setEmployees(response.data);
                } else {
                    alert("Opa tivemos nesta exclusão problema tente novamente.");
                }
            }
        }

        deleteEmployee();
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
                                <button type="button" onClick={() => handleSubmitToDelete(employee.id)} className="btn">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}