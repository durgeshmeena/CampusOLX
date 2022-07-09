import React , {useEffect,useState} from 'react';

export default function Admin() {

    useEffect(() => {
        window.location.href = "https://localhost:5000/admin";
    } , []);

    return (
        <h1>Admin</h1>
    );
}