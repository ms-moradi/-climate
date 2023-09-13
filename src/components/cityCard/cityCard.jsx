import picture1 from "@/assets/image/picture-6.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet, faTemperatureThreeQuarters, faStopwatch, faCircleNotch } from '@fortawesome/free-solid-svg-icons';


const CityCard =({result})=>{
    const temp = (result.data.result.main.temp).toFixed(0)
    return(
        <div>
            <div className="w-full h-[564px] relative">
                <Image src={picture1} alt="background" className="w-full h-[564px] object-cover mix-blend-darken"/>
            </div>
            <div className="w-full h-[564px] text-white bg-zinc-800 flex flex-col justify-between opacity-50 absolute top-0 py-8 px-4">
                <div className="flex flex-col-reverse">
                    <div>
                        <h1 className="text-4xl">shiraz</h1>
                        <h5 className="text-base">{result.data.result.weather[0]?.main}</h5>
                    </div>
                    <div className="flex justify-start gap-1">
                        <h2 className="text-8xl">{temp}</h2>
                        <FontAwesomeIcon icon={faCircleNotch} className="text-[12px]"/>
                    </div>
                </div>
                <div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <FontAwesomeIcon icon={faWind}  className=""/>
                    <FontAwesomeIcon icon={faDroplet}  className=""/>
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                    <FontAwesomeIcon icon={faStopwatch} />
                </div>
                
                
            </div>
        </div>
    )
}

export default CityCard;