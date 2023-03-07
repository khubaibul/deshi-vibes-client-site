import React from 'react';

const OneLineup = ({ lineup }) => {
    return (
        <div className={`flex items-center uppercase px-10 ${lineup.imagePosition === "left" && "flex-row-reverse"}`}>
            <div className="w-1/2 pl-28 flex flex-col gap-y-3" data-aos="slide-up" data-aos-duration="2000">
                <h4 className='text-3xl font-bebas'>{lineup.name}</h4>
                <dl>{lineup.description}</dl>
                <button className='uppercase w-[150px] py-2 font-bebas rounded-sm border-[1.5px] border-primary hover:bg-primary active:bg-opacity-70 hover:text-white transition-all duration-300'>
                    Explore Now
                </button>
            </div>
            <div className='w-1/2' data-aos="slide-up" data-aos-duration="1000">
                <img src={lineup.image} alt="" />
            </div>
        </div>
    );
};

export default OneLineup;