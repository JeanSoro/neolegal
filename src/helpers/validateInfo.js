

export default function validateInfo(values) {
    let errors = {};

    if(!values.first_name.trim()){
        errors.first_name = 'Prenom obligatoire'
    }

    if(!values.last_name.trim()){
        errors.last_name = 'Nom obligatoire'
    }

    if(!values.email.trim()){
        errors.email = 'Email obligatoire'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid, please enter a valid address';
    }

    if(!values.phone_number.trim()){
        errors.phone_number = 'Numero de telephone obligatoire'
    }

    if(!values.street_address.trim()){
        errors.street_address = 'Address obligatoire'
    }
    if(!values.post_code.trim()){
        errors.post_code = 'Code postal obligatoire'
    }
    if(!values.country.trim()){
        errors.country = 'Veuillez indiquez un pays'
    } else if(values.country.trim()){
        errors.country = ''
    }

    return errors;
}
