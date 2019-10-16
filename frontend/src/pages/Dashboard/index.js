import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './index.css';

import api from '../../services/api';

export default function Dashboard({ history }) {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        api.get('/employees').then(response => setEmployees(response.data));
    }, [employees]);

    function handleSubmitToDelete(employeeId) {
        async function deleteEmployee() {
            var userChoice = window.confirm("Deseja realmente deletar este usuário ?");
            if (userChoice) {
                const response = await api.delete('/employees/' + employeeId);

                if (response.status === 204) {
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
                <button className="btn btn-new-employee">Novo Funcionário</button>
            </Link>

            <Table className="example">
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Sobrenome</Th>
                        <Th>E-mail</Th>
                        <Th>NIS/PIS</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {employees.map(employee => (
                        <Tr key={employee.id}>
                            <Td>{employee.name}</Td>
                            <Td>{employee.lastName}</Td>
                            <Td>{employee.email}</Td>
                            <Td>{employee.nisPis}</Td>
                            <Td>
                                <Link to={"/update"}>
                                    <button type="button" onClick={() => localStorage.setItem('employeeId', employee.id)} className="btn-edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                </Link>
                                <button type="button" onClick={() => handleSubmitToDelete(employee.id)} className="btn-delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

        </>
    );
}