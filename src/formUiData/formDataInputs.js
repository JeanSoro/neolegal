import formData from './formData';
 
let formDataInput = formData.map((data,index)=> {
    const aboutUser = data.questions[0];
    const userAddress = data.questions[1];

    const aboutUserFieldsData = aboutUser.fields.map((inputs,index)=> {
        return inputs
    })
    const aboutUserLocationsData = userAddress.fields.map((inputs,index)=> {
        return inputs
    })
    
    const fieldLabels = aboutUserFieldsData.map((aboutUserField)=> {
        return aboutUserField.label;
    })
    const fieldInputNames = aboutUserFieldsData.map((aboutUserField)=> {
        return aboutUserField.name;
    })
    const addressFieldLabels = aboutUserLocationsData.map((aboutUserLocation)=> {
        return aboutUserLocation.label;
    })
    const addressInputNames = aboutUserLocationsData.map((aboutUserLocation)=> {
        return aboutUserLocation.name;
    })

    const addressDropdownLabels = aboutUserLocationsData.map((aboutUserLocations)=> {
        return aboutUserLocations.options
    })


    // About user info details
    let aboutUserFieldLabels = [];
    aboutUserFieldLabels.push(fieldLabels);

    let aboutUserFieldInputNames = [];
    aboutUserFieldInputNames.push(fieldInputNames);

    // Address details for inputs
    let aboutUserFieldAddressLabels = [];
    aboutUserFieldAddressLabels.push(addressFieldLabels);

    let aboutUserFieldAddressInputNames = [];
    aboutUserFieldAddressInputNames.push(addressInputNames);

    // Values for label and inputs names User Info

    const prenom = aboutUserFieldLabels[0][0];
    const first_name = aboutUserFieldInputNames[0][0];


    const nom = aboutUserFieldLabels[0][1];
    const last_name = aboutUserFieldInputNames[0][1];

    const email_label = aboutUserFieldLabels[0][2];
    const email = aboutUserFieldInputNames[0][2];

    const telephone = aboutUserFieldLabels[0][3];
    const phone_number = aboutUserFieldInputNames[0][3];

    
    // Values for label and inputs names User Address
    const adresse = aboutUserFieldAddressLabels[0][0];
    const street_address = aboutUserFieldAddressInputNames[0][0];

    const codePostal = aboutUserFieldAddressLabels[0][1];
    const post_code = aboutUserFieldAddressInputNames[0][1];

    const pays = aboutUserFieldAddressLabels[0][2];
    const country = aboutUserFieldAddressInputNames[0][2];

    const canadaDropDownOption = addressDropdownLabels[2][0].label;
    const canadaDropDownValue = addressDropdownLabels[2][0].value;

    const usaDropDownOption = addressDropdownLabels[2][1].label;
    const usaDropDownValue = addressDropdownLabels[2][1].value;

    return {
        prenom, 
        first_name, 
        nom, 
        last_name,email_label,email, 
        telephone,phone_number,
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
    }

})

export default formDataInput