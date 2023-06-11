import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';


function FormSignUp({handleSubmit}) {
    const [name,setName] = useState("@gmail.com");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(true);
    
    return (
    <form 
    onSubmit={(e)=> 
    {e.preventDefault() 
    handleSubmit(nov)}}
    >
    
    <TextField 
    id="name" 
    label="Nombre" 
    variant="outlined" 
    fullWidth 
    margin='normal' 
    onChange={(e) => {console.log(e.target.value)
        setName(e.target.value)}}
        value={name}
    />

    <TextField 
    id="apellido" 
    label="Apeliido" 
    variant="outlined" 
    fullWidth 
    margin='normal'
    onChange={(e) => {console.log(e.target.value)
        setLastName(e.target.value)}}
        value={lastName}
    />
    
    <TextField 
    id="email" 
    label="Email" 
    variant="outlined" 
    fullWidth 
    margin='normal'
    onChange={(e) => {console.log(e.target.value)
        setEmail(e.target.value)}}
        value={email}
    />
    
    <FormGroup>

        <FormControlLabel 
        control={
        <Switch/>} 
        label="Promociones"
        checked={prom}
        onChange={(e) => setProm(e.target.checked)}
        />

        <FormControlLabel 
        control={
        <Switch/>} 
        label="Novedades"
        checked={nov}
        onChange={(e) => setNov(e.target.checked)}
    />

    </FormGroup>
    
    <Button 
    variant="contained"
    type='submit'>
    Registrarse
    </Button>
    </form>
)}

export default FormSignUp;