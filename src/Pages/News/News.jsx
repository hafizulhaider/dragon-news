import Header from "../../Shared/Header/Header";
import RightSideNav from './../../Shared/RightSideNav/RightSideNav';


const News = () => {
    return (
        <>
        <Header></Header>
        <div className="container mx-auto grid md:grid-cols-4">
            <div className="col-span-3"> 
                this is details
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
        </>
    );
};

export default News;