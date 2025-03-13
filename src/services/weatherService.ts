import { faker, HelpersModule } from "@faker-js/faker";
import{storeweatherData} from 
 export const generateLondonWeatherData = (): WeatherData => {
 const generatedWeatherData = {
 city:generateLondonWeatherData,
 temperature: faker.number.int({ min: -15, max: 30 }),
 humidity: faker.number.int({ min: 79, max: 86 }),
 wind: faker.number.int({ min: 2, max: 78 }),
 rain: faker.number.int({ min: 65, max: 75 }),
 };

 return generatedWeatherData;
 };

 export const generateDublinWeatherData = (): WeatherData => {
 const generatedWeatherData: WeatherData = {
 city:"Dublin",
 temperature: faker.number.int({ min: -15, max: 30 }),
 humidity: faker.number.int({ min: 79, max: 86 }),
 wind: faker.number.int({ min: 2, max: 78 }),
 rain: faker.number.int({ min: 65, max: 75 }),
 };

 return generatedWeatherData;
 };
