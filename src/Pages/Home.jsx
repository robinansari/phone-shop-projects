import { useLoaderData } from "react-router-dom";
import Phone from "../components/Phone/Phone";
import Banner from "./Banner/Banner";


const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Phone phones={phones}></Phone>
        </div>
    );
};

export default Home;