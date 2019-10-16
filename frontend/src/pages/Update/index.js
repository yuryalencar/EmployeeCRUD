import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Update({ history }) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nisPis, setNisPis] = useState('');

    const [nameOld, setNameOld] = useState('');
    const [lastNameOld, setLastNameOld] = useState('');
    const [emailOld, setEmailOld] = useState('');
    const [nisPisOld, setNisPisOld] = useState('');

    useEffect(() => {
        async function getData() {
            const response = await api.get("/employees/" + localStorage.getItem("employeeId"));
            setNameOld(response.data.name);
            setLastNameOld(response.data.lastName);
            setEmailOld(response.data.email);
            setNisPisOld(response.data.nisPis);
        }

        getData();
        setTimeout(function(){ loadForm(); }, 10);
    });

    async function loadForm(){
        if (name === '') {
            await setName(nameOld);
        }
        if (lastName === '') {
            await setLastName(lastNameOld);
        }
        if (email === '') {
            await setEmail(emailOld)
        }
        if (nisPis === '') {
            await setNisPis(nisPisOld);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await api.put('/employees/' + localStorage.getItem("employeeId"), {
                name,
                lastName,
                email,
                nisPis
            });

            if (response.status === 200) {
                history.push('/');
            }
        } catch (e) {
            alert('Ocorreu um erro no cadastro verifique os dados informados e tente novamente !', e);
        }
    }

    return (
        <>
            <p>
                Edite aqui o cadastro do funcionário(a): <strong>{nameOld}</strong>.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">NOME * (Entre 2 e 30 caracteres)</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={nameOld}
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="lastName">SOBRENOME * (Entre 2 e 50 caracteres)</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder={lastNameOld}
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="email">E-MAIL *</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={emailOld}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="nisPis">NIS/PIS * (11 dígitos)</label>
                <input
                    id="nisPis"
                    name="nisPis"
                    type="number"
                    placeholder={nisPisOld}
                    value={nisPis}
                    onChange={event => setNisPis(event.target.value)}
                />

                <button type="submit" className="btn">Atualizar</button>
            </form>
        </>
    );
}