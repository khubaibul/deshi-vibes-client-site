import React from 'react';
import mensTShirt from "../../../assets/TShirt.png";
import mensPants from "../../../assets/Mens Pants.png";
import mensShoes from "../../../assets/Mens Shoes.png";
import womenGroup from "../../../assets/Women Group.png";
import womenShoes from "../../../assets/Women Shoes.png";
import kidsWear from "../../../assets/kids-group.png";
import OneLineup from './OneLineup';

const ProductLineup = () => {
    const lineups = [
        {
            id: 1,
            name: "Mens Single Color T-Shirt",
            image: mensTShirt,
            description: "Synergistically extend competitive manufactured products whereas flexible leadership skills. Dynamically fashion.",
            imagePosition: "right"
        },
        {
            id: 2,
            name: "Mens Gabardine & Gens Pant",
            image: mensPants,
            description: "Progressively synergize ethical niches vis-a-vis go forward ROI. Dramatically procrastinate standardized.",
            imagePosition: "left"
        },
        {
            id: 3,
            name: "Mens Shoes Collection",
            image: mensShoes,
            description: "Completely underwhelm backend outsourcing without intermandated e-services. Proactively network backend methods.",
            imagePosition: "right"
        },
        {
            id: 4,
            name: "Womens Top Collection",
            image: womenGroup,
            description: "Authoritatively conceptualize stand-alone niche markets rather than fully researched ideas. Synergistically.",
            imagePosition: "left"
        },
        {
            id: 5,
            name: "Women Shoes Collection",
            image: womenShoes,
            description: "Quickly incubate intuitive supply chains without client-centered applications. Appropriately target high.",
            imagePosition: "right"
        },
        {
            id: 6,
            name: "Kids Wear",
            image: kidsWear,
            description: "Objectively restore backend markets before unique bandwidth. Enthusiastically foster functionalized sources.",
            imagePosition: "left"
        },
    ]
    return (
        <section className='flex flex-col gap-6 mt-36'>
            {
                lineups?.map(lineup => <OneLineup key={lineup.id} lineup={lineup} />)
            }
        </section>
    );
};

export default ProductLineup;