
import {Fade} from "react-awesome-reveal";
import FooterCarCollection from "../../pages/CarsCollectionPage/FooterCarCollection"

const Histoire = () => {

  return (
    <div className="flex flex-col min-[300vh]">
          
        <section className="flex h-screen">
            <div className="flex-1 bg-[url('/mc.jpeg')] bg-cover bg-center " />
              <div className="flex-1 flex flex-col items-center justify-center h-[100vh]  h-full p-8  md:p-12 lg:p-0"> 
                <Fade className="" cascade damping={0.2} direction="up">
                        <h2 className="text-3xl font-semibold  md:text-4xl lg:text-6xl mb-16"> Our History</h2> 
                        <p  className="text-muted-foreground text-lg md:text-xl mx-32  text-justify lg:text-xl leading-[2rem]"> <p className="leading-relaxed">Depuis 1998, nous fournissons des voitures de sport, de luxe et de collection avec un service et une qualité exceptionnels.   Nous nous engageons à offrir à nos clients des véhicules uniques, soigneusement sélectionnés et entretenus pour garantir une expérience de conduite inégalée. </p>
                        <div className="my-6"/> <p className="leading-relaxed">Notre équipe de professionnels dévoués est toujours prête à répondre à vos besoins et à vous accompagner dans le choix de la voiture de vos rêves. Que vous soyez à la recherche d'une performance époustouflante, d'un confort raffiné ou d'un charme intemporel, nous avons le véhicule qu'il vous faut. Faites confiance à notre expertise pour vous offrir non seulement une voiture, mais une véritable œuvre d'art sur roues.</p> </p>
                </Fade>
              </div>
        </section>
        
          
        <section className="flex h-screen">
            <div className="flex-1 flex flex-col items-center justify-center h-[100vh]  h-full p-8  md:p-12 lg:p-0"> 
        <Fade className="" cascade damping={0.2} direction="up">

        <h2 className="text-3xl font-semibold  md:text-4xl lg:text-6xl mb-16"> Our History</h2> 
        <p  className="text-muted-foreground text-lg md:text-xl mx-32  text-justify lg:text-xl leading-[2rem]"> <p className="leading-relaxed">Depuis 1998, nous fournissons des voitures de sport, de luxe et de collection avec un service et une qualité exceptionnels.   Nous nous engageons à offrir à nos clients des véhicules uniques, soigneusement sélectionnés et entretenus pour garantir une expérience de conduite inégalée. </p>
                <div className="my-6"/> <p className="leading-relaxed">Notre équipe de professionnels dévoués est toujours prête à répondre à vos besoins et à vous accompagner dans le choix de la voiture de vos rêves. Que vous soyez à la recherche d'une performance époustouflante, d'un confort raffiné ou d'un charme intemporel, nous avons le véhicule qu'il vous faut. Faites confiance à notre expertise pour vous offrir non seulement une voiture, mais une véritable œuvre d'art sur roues.</p> </p>
        </Fade>
              </div>
          <div className="flex-1 bg-[url('/ld2.jpg')] bg-center bg-cover"/>
        </section>
        <section className="flex h-screen">
            <div className="flex-1 bg-[url('/shop.jpg')] bg-cover  " />
              <div className="flex-1 flex flex-col items-center justify-center h-[100vh]  h-full p-8  md:p-12 lg:p-0"> 
        <Fade className="" cascade damping={0.2} direction="up">
        <h2 className="text-3xl font-semibold  md:text-4xl lg:text-6xl mb-16"> Our History</h2> 
        <p  className="text-muted-foreground text-lg md:text-xl mx-32  text-justify lg:text-xl leading-[2rem]"> <p className="leading-relaxed">Depuis 1998, nous fournissons des voitures de sport, de luxe et de collection avec un service et une qualité exceptionnels.   Nous nous engageons à offrir à nos clients des véhicules uniques, soigneusement sélectionnés et entretenus pour garantir une expérience de conduite inégalée. </p>
                <div className="my-6"/> <p className="leading-relaxed">Notre équipe de professionnels dévoués est toujours prête à répondre à vos besoins et à vous accompagner dans le choix de la voiture de vos rêves. Que vous soyez à la recherche d'une performance époustouflante, d'un confort raffiné ou d'un charme intemporel, nous avons le véhicule qu'il vous faut. Faites confiance à notre expertise pour vous offrir non seulement une voiture, mais une véritable œuvre d'art sur roues.</p> </p>
        </Fade>
              </div>
        </section>
        <FooterCarCollection />

    </div>
  )
}

export default Histoire 
