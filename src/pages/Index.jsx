import React, { useState } from 'react'
import { People, dressColors, skinColors } from '../assets/Assets'

const Index = () => {
    const [skinColor, setSkin] = useState('#FCD7B8')
    const [dressColor, setDress] = useState(null)
    // Indicate whether we're going to eit the male or female
    const [gender, setGender] = useState('male')
    // Holding the male profile preferences
    const [maleState, setMaleState] = useState({
        baseColor: '#B2C7C7',
        skinColor: '#FCD7B8',
        dressColor: null,
        dressBackGroundColor: '#B2C7C7',
    })

    const submitForm = (e) => {
        e.preventDefault()
        console.log('Submitting the form..')
    }

    /**
     * 
     * @param {string} target targeted area
     * @param {string} color
     * @param {string} component The corresponding color component
     */
    const updateProfile = (target = 'skinColor', color = 'FCD7B8', component = null) => {
        // User have to select the gender first
        if (!gender) {
            alert('Vous devez selectionner le sexe tout d\'abord')
            return
        }
        color = color.replace('color', '')
        let dressBackGroundColor = maleState.dressBackGroundColor
        if (!(new RegExp(/color\-striped/)).test(component) && target === 'dressColor') {
            dressBackGroundColor = `#${color}`
        } else if (target === 'dressColor') {
            dressBackGroundColor = maleState.baseColor
        }
        // Change male preferences
        if (gender === 'male') {
            setMaleState({
                ...maleState,
                [target]: `#${color}`,
                dressBackGroundColor
            })
        }
    }

    return (
        <div className="container center">
            {/* Form title */}
            <p className="center">
                <strong>Profil</strong>
            </p>

            <form className="profile-form ">
                {/* Form role */}
                <p className="form-role">Lequel de ces deux avatars préférez-vous ?</p>

                {/* Avatars container */}
                <div className="flex full-size center">
                    <div className="avatar">
                        <People.Male className="full-size" maleState={maleState} />
                    </div>
                    <div className="avatar">
                        {/* <People.Female className="full-size" /> */}
                    </div>
                </div>

                {/* Colors */}
                <div className="icons">
                    {/* Skin */}
                    <div className="flex">
                        {
                            Object.keys(skinColors).map(key =>
                                (key.toLocaleLowerCase() === 'skin')
                                    ? <img key={key} src={skinColors[key]} alt="" />
                                    : <img style={{ cursor: 'pointer' }} key={key} onClick={() => updateProfile('skinColor', key)} src={skinColors[key]} alt={key} />
                            )
                        }
                    </div>
                    {/* Dress */}
                    <div className="flex">
                        {
                            Object.keys(dressColors).map(key =>
                                (key.toLocaleLowerCase() === 'tshirt')
                                    ? <img key={key} src={dressColors[key]} alt="" />
                                    : <img style={{ cursor: 'pointer' }} key={key} onClick={() => updateProfile('dressColor', key, dressColors[key])} src={dressColors[key]} alt={key} />
                            )
                        }
                    </div>
                </div>

                <button type="submit" className="form-confirm" onClick={(e) => { submitForm(e) }}>Valider</button>
            </form>
        </div>
    )
}


export default Index