import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useRaces from "../hooks/useRaces";

function Home() {
    useRaces();

    return (
        <section className="h-screen overflow-scroll snap-proximty snap-y bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
            <div className="hero min-h-screen snap-always snap-start" style={{ backgroundImage: `url("/home_background.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Race Car Event</h1>
                    <p className="mb-5">Un projet crée lors du module de cours Wev Front Avancé</p>
                    <Link to="/races/map" className="btn btn-primary">Voir les courses autour de moi</Link>
                    </div>
                </div>
            </div>
            <div className="h-screen snap-always snap-start shrink-0 hero min-h-screen">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Fait en React</h1>
                            <Link to="/races" className="btn btn-primary">Voir les courses</Link>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Home;