import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from './../../Shared/RightSideNav/RightSideNav';
import BreakingNews from "./BreakingNews";
import NewsContainer from "./NewsContainer";

const Home = () => {

    const news = useLoaderData ()
    console.log(news);

    return (
        <div className="container mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews => <NewsContainer 
                        key={aNews._id}
                        news = {aNews}
                        ></NewsContainer>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;