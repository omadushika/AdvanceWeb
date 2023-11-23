import './Main.scss'
import Image from 'next/image';




async function getDetails() {
    const cardDetails = await fetch("http://localhost:4002/cards");
    return cardDetails.json()
}

export default async function Main(){

    const data = await getDetails()
    console.log(data);
    

    return(
        <section className='main container section'>

            <div className='secTitle'>
                <h3 className='title'>
                    Most Visited Destination
                </h3>
            </div>
            <div>
            {data.map((cards) =>{
                return <div className='card'>
                    <Image src={cards.imagePath} alt='city' width={300} height={412}/>
                    <h3>{cards.name}</h3>
                </div>;
                
            })

            }
            </div>

        </section>

    )
}
