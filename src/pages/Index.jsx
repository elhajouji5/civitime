import React from 'react'
import Assets from '../assets/Assets'

const Index = () => {

    return (
        <div className="container center">
            {/* Form title */}
            <p className="center">
                <strong>Profil</strong>
            </p>

            <div className="profile-form ">
                {/* Form role */}
                <p className="form-role">Lequel de ces deux avatars préférez-vous ?</p>

                {/* Avatars container */}
                <div className="flex full-size center">
                    <div className="avatar">
                        <img src={Assets.man} className="full-size" />
                    </div>
                    <div className="avatar">
                        <img src={Assets.woman} className="full-size" />
                    </div>
                </div>

                {/* Colors */}
                <div className="icons">
                    <div className="flex">
                        <img src={Assets.Skin} />
                        <img src={Assets.colorFCD7B8} />
                        <img src={Assets.colorE0A39A} />
                        <img src={Assets.colorFCCC84} />
                        <img src={Assets.color533724} />
                    </div>
                    <div className="flex">
                        <img src={Assets.TShirt} />
                        <img src={Assets.colorB2C7C7} />
                        <img src={Assets.color88C10F} />
                        <img src={Assets.colorFF1414} />
                        <img src={Assets.colorStriped} />
                    </div>
                </div>

                <button className="form-confirm">Valider</button>
            </div>
        </div>
    )
}


export default Index