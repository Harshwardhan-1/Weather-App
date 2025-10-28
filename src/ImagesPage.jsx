import CloudsImg from './assets/clouds.png';
import RainImg from './assets/rain.png';
import ClearImg from './assets/clear.png';
import DrizzleImg from './assets/drizzle.png';
import HumidityImg from './assets/Humidity.png';
import SnowImg from './assets/snow.png';
import WindImg from './assets/wind.png';
import './ImagesPage.css';


export default function ImagesPage({image}){
            let img;
            switch(image){
                case "Clouds":
                img=CloudsImg;
                break;
                 case "Rain":
          img = RainImg;
          break;
        case "Clear":
          img = ClearImg;
          break;
        case "Drizzle":
          img = DrizzleImg;
          break;
        case "Snow":
          img = SnowImg;
          break;
        case "Wind":
          img = WindImg;
          break;
          case "Humidity":
            img=HumidityImg;
            break;
        default:
          img = CloudsImg;
            }
            
    return(
         <img src={img} alt={image} className='image'/>
    );
}