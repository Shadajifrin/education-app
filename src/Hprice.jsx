// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './components/Title'
import PriceCard from './components/PriceCard'
const Hprice = () => {
    return (
        <div>
            <section className='hPrice padding '>

                <Title subtitle="our pricing" title="pricing & packages" />
                <div className='price container grid'>
                    <PriceCard />
                </div>
            </section>
        </div>
    )
}

export default Hprice
