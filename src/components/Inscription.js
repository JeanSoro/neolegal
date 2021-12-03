import React,{ useEffect }  from 'react';
import useForm from '../hooks/useForm';
import validateInfo from '../helpers/validateInfo';
import formDataInput from '../formUiData/formDataInputs';
import Illu from '../illu.svg';

export default function Inscription() {
    
    const { 
        prenom, 
        first_name, 
        nom, 
        last_name,
        email_label,
        email, 
        telephone,
        phone_number,
        adresse, 
        street_address, 
        codePostal, 
        post_code,
        pays,
        country,
        canadaDropDownOption,
        canadaDropDownValue,
        usaDropDownOption,
        usaDropDownValue
    } = formDataInput[0];

    const {handleChange,values,submitHandler,userList,errors} = useForm(validateInfo);

    useEffect(() => {
        localStorage.setItem('userList', JSON.stringify(userList))
    }, [userList])

    return (
        <>
            <div className="container">
            
                <form onSubmit={submitHandler}>
                <h1>Veuillez entrer vos informations</h1>
                    <div className="form-group">
                        <label htmlFor="prenom">{prenom}</label>
                        <input type="text" value={values.first_name} name={first_name} className={`form-control`} id="prenom" aria-describedby="prenomAide" placeholder="Entrez votre prénom... " onChange={handleChange}/>
                        {errors.first_name ? <p className="error-msg-text">{errors.first_name}</p> : null}

                        <label htmlFor="nom">{nom}</label>
                        <input type="text" value={values.last_name} name={last_name} className={`form-control`} id="nom" aria-describedby="nomAide" placeholder="Entrez votre nom..." onChange={handleChange}/>
                        {errors.last_name ? <p className="error-msg-text">{errors.last_name}</p> : null}

                        <label htmlFor="email">{email_label}</label>
                        <input type="email" value={values.email} name={email} className={`form-control`} id="email" aria-describedby="emailAide" placeholder="Entrez votre adresse e-mail..." onChange={handleChange}/>
                        {errors.email ? <p className="error-msg-text">{errors.email}</p> : null}

                        <label htmlFor="telephone">{telephone}</label>
                        <input type="text" value={values.phone_number} name={phone_number} className={`form-control`} id="telephone" aria-describedby="telephoneAide" placeholder="Entrez votre numéro de téléphone..." onChange={handleChange}/>
                        {errors.phone_number ? <p className="error-msg-text">{errors.phone_number}</p> : null}

                        <label htmlFor="adresse">{adresse}</label>
                        <input type="text" value={values.street_address} name={street_address} className={`form-control`} id="adresse" aria-describedby="prenomAide" placeholder="Entrez votre adresse..." onChange={handleChange}/>
                        {errors.street_address ? <p className="error-msg-text">{errors.street_address}</p> : null}

                        <label htmlFor="codePostal">{codePostal}</label>
                        <input type="text" value={values.post_code} name={post_code} className={`form-control`} id="codePostal" aria-describedby="nomAide" placeholder="Entrez votre code postal..." onChange={handleChange}/>
                        {errors.post_code ? <p className="error-msg-text">{errors.post_code}</p> : null}

                        <label htmlFor="pays">{pays}</label>
                        <select className={`form-control`}  name={country} aria-label="Liste déroulante" onChange={handleChange}>
                            <option defaultValue>Sélectionnez un pays...</option>
                            <option value={canadaDropDownValue}>{canadaDropDownOption}</option>
                            <option value={usaDropDownValue}>{usaDropDownOption}</option>
                        </select>
                        {errors.country ? <p className="error-msg-text dropdown">{errors.country} </p> : null}
                    </div>
                    <button onClick={submitHandler} type="button" className="btn btn-primary">Envoyer</button>
                </form>
              
            </div>
        </>
    )
}
