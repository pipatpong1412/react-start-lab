import React, {useState} from 'react'

export default function TestForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        notes: '',
        car: 'select'
    })

    const hdlChange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    const hdlSumit = e => {
        e.preventDefault()
        // if(formData.username > 4){
        //     console.log('username must < 4')
        //     return
        // }
        // if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        //     console.log('Invalid email format')
        //     return
        // }
        // console.log('sent', formData)
    }

    return (
        <form className="test-form" onSubmit={hdlSumit}>
            <label>
                Username :
                <input type="text" name='username' value={formData.username} onChange={hdlChange}/>
            </label>
            <label>
                Email :
                <input type="email" name='email' value={formData.email} onChange={hdlChange}/>
            </label>
            <br/>
            <br/>
            <label>
                NOTE
                <textarea name='notes' value={formData.notes} onChange={hdlChange}></textarea>
            </label>
            <select name='car' value={formData.car} onChange={hdlChange}>
                <option value="select" disabled selected>car</option>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <button type="submit">Send</button>
        </form>
    )
}