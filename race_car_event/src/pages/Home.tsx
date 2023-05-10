import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useRaces from "../hooks/useRaces";

function Home() {
    useRaces();

    return (
        <section className="h-screen overflow-scroll snap-proximty snap-y bg-gradient-to-tr from-rose-800 via-purple-700 to-violet-700">
            <div className="h-screen  snap-always snap-start shrink-0 hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Race Car Event</h1>
                        <p className="py-6">Participez à des courses aussi dangereuses que lucratives</p>
                    </div>
                </div>
            </div>
            <div className="h-screen snap-always snap-start shrink-0 hero min-h-screen">
                    <div className="hero-content text-center ">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to="/races" className="btn btn-primary">Voir les courses</Link>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Home;