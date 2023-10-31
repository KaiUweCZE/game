import React from "react";
import ButtonA from "../components/ButtonA";
import BoxTalks from "../components/BoxTalks";
import MyMap from "./UserPages/MyMap";


const Home = () => {
    const content = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Indae ullam ab. Repudiandae molestiae perferendis amet quasi illum sit enim earum officia laboriosam sint?"]
    const answers = ["yop"]
    
    return(
        
        <div className="container__home">
          
            <main className="home">
                <article>
                    <h2>Úvod</h2>
                    <p>
                        Region Goloa je po moři vzdálena od Kanta přibližně 500 mil.
                        Lodí je to dlouhá pouť plná menších, či o trochu větších ostrovů a jeskyní.
                        Pokemoní zápasy zde mají dlouhou tradici, však právě zde je původ prvních strukturovaných
                        soutěží. To co ti nabízíme v této hře je, abys vyrazil na své dobrodružství právě v tomto regionu.
                        Samozřejmně se odsud můžeš plavit dál, ať už brouzdat po přilehlých destinacích (Maloonovy ostrovy, Gorzárova jaskyně, Mokřady na kraji země),
                        tak i přímo do běžně známých regionů(Kanto, Jhoto, Hoenn...). Nezapomeň, že každá cesta začíná volbou!
                        Pokud jsi na cestu připraven není nic snažšího, než se <ButtonA link= "Register"/>
                        <br />prof. Tommy Bubble 
                    </p>
                    
                </article>
            </main>
            
        </div>
        
        
    )
}

export default Home