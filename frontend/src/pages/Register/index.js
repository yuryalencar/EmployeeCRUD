import React, { useState } from 'react';
import api from '../../services/api';

export default function Register({ history }) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nisPis, setNisPis] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post('/employees', {
                name,
                lastName,
                email,
                nisPis
            });
            history.push('/');

        } catch (e) {
            alert('Ocorreu um erro no cadastro verifique os dados informados e tente novamente !');
        }
    }

    return (
        <>
            <p>
                Cadastre aqui seus <strong>funcionários</strong>.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">NOME * (Entre 2 e 30 caracteres)</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nome do funcionário"
                    value={name}
                    required
                    onChange={event => setName(event.target.value)}
                />

                <label htmlFor="lastName">SOBRENOME * (Entre 2 e 50 caracteres)</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Sobrenome do funcionário"
                    value={lastName}
                    required
                    onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="email">E-MAIL *</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail do funcionário"
                    value={email}
                    required
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="nisPis">NIS/PIS * (11 dígitos)</label>
                <input
                    id="nisPis"
                    name="nisPis"
                    type="number"
                    placeholder="NIS ou PIS do funcionário"
                    value={nisPis}
                    required
                    onChange={event => setNisPis(event.target.value)}
                />

                <button type="submit" className="btn">Cadastrar</button>
            </form>
        </>
    );
}