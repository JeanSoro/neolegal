import { useState}  from 'react';
import { useNavigate } from "react-router-dom";
import validateInfo from '../helpers/validateInfo';

const useForm = (validateInfo) => {

    const url = `https://enovode7uq1r.x.pipedream.net/`;

    const getLocalStorage = () => {
        let userList = localStorage.getItem('userList');
    
        if(userList){
            return (userList = JSON.parse(localStorage.getItem('userList')))
        } else {
            return []
        }
    }

    const [userList, setUserList] = useState(getLocalStorage());

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        street_address: '',
        post_code: '',
        country: '',
    })

    const [errors, setErrors] = useState({});
    

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    let navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const {first_name, last_name,email,phone_number,street_address,post_code,country} = values;
        const newList = {first_name, last_name,email,phone_number,street_address,post_code,country};
        
        await setErrors(validateInfo(values))
        
        if(first_name && last_name && email && phone_number && street_address && post_code && country){
           
            await setUserList([...userList,newList])
            try{
                fetch(`${url}`,{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify([...userList,newList])
                }).then(()=> {
                    navigate(`merci/${first_name}`);
                    console.log('request posted')
                }).catch(error => {
                    console.error(`${error} resource`)
                    navigate(`/error`);
                })
            } catch(e){
                console.log(e)
            }
        }   
    }


    return {handleChange, values, submitHandler, getLocalStorage,userList,errors}

}

export default useForm



