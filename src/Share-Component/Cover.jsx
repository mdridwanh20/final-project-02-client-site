import React from 'react'
import { Parallax } from 'react-parallax'

export default function Cover({ CoverImg, title, description }) {
    return (

        <Parallax
            blur={{ min: -60, max: 50 }}
            bgImage={CoverImg}
            bgImageAlt="cover image"
            strength={-200}
        >
            <div>
                <div
                    className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">

                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase"> {title} </h1>
                            <p className="mb-5 capitalize">
                                {description}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </Parallax>



    )
}
