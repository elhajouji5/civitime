import React, { useState, useEffect } from 'react'
import { People, dressColors, skinColors } from '../assets/Assets'

const Index = () => {
    // Indicate whether we're going to eit the male or female
    const [gender, setGender] = useState(null)

    const defaultProfilePreferences = {
        baseColor: '#B2C7C7',
        skinColor: '#FCD7B8',
        dressColor: null,
        dressBackGroundColor: '#B2C7C7',
    }

    // Holding the profile preferences
    const [profileState, setProfileState] = useState({
        male: { ...defaultProfilePreferences },
        female: { ...defaultProfilePreferences },
    })

    const submitForm = (e) => {
        e.preventDefault()
        if (!gender) {
            alert('Vous devez selectionner le sexe tout d\'abord')
            return
        }
        alert('Votre requête est bien traitée..')
    }

    /**
     * 
     * @param {string} target targeted area
     * @param {string} color
     * @param {string} component The corresponding color component path
     */
    const updateProfile = (target = 'skinColor', color = 'FCD7B8', component = null) => {
        // User have to select the gender first
        if (!gender) {
            alert('Vous devez selectionner le sexe tout d\'abord')
            return
        }

        // Set the selected color
        color = '#' + color.replace('color', '')

        // Retrieve the targeted gender preferences that will be changed
        const targetedGenderValues = profileState[gender]
        // Change skin color
        if (target === 'skinColor') {
            targetedGenderValues[target] = color
        } else {
            // Change dress colors
            // If the selected component is not stripped dresses use a simple color for all the T-Shirt
            // Else the background color will be different so that it gives a stripped colors
            if (!(new RegExp(/color-striped/)).test(component) && target === 'dressColor') {
                targetedGenderValues['dressColor'] = color
                targetedGenderValues['dressBackGroundColor'] = color
            } else if (target === 'dressColor') {
                targetedGenderValues['dressColor'] = color
                targetedGenderValues['dressBackGroundColor'] = targetedGenderValues.baseColor
            }

        }
        setProfileState({ ...profileState, [gender]: targetedGenderValues })
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
                    <People.Male style={{ cursor: 'pointer' }} setGender={setGender} key="male" className="avatar" active={gender === 'male'} maleState={profileState.male} />
                    <People.Female style={{ cursor: 'pointer' }} setGender={setGender} key="female" className="avatar" active={gender === 'female'} femaleState={profileState.female} />
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