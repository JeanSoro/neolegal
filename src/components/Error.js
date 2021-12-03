import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-page-container">
            <h2>Oups, une erreur est survenue. Veuillez cliquer ci-dessous pour soumettre à nouveau le formulaire.</h2>
            <Link to={`/`} className='btn btn-primary'>
            Retour à la page d'accueil
            </Link>
        </div>
    )
}
