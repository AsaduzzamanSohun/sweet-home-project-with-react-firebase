import "./Home.css"
import loading from '../../assets/loading/dwelling-spot-bg.gif'

const Home = () => {
    return (
        <main className="font-montserrat bg-slate-400">
            <span className='text-6xl'>Welcome to DwellingSpot</span>
            <img src={loading} alt="" />
        </main>
    );
};

export default Home;