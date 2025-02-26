import Github from "../../assets/github.svg?react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bond mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> Space Invaders Redesign </h3>
                            <p className="text-gray-400 mb-4">
                                Redesigned Space Invaders with new features like power-ups, enemy types and a boss battle. Developed interfaces for new currency mechanics to enhance user experience. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["Unity", "C#", "Figma"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a style={{display: "table-cell"}} target="_blank" href="https://saifjouda.github.io/SpaceInvadersRedesignJournal/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Journal → </a>
                                <a style={{display: "table-cell"}} target="_blank" href="https://github.com/edwardowong/SpaceInvadersRedesign">
                                <Github />   
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> 
                                University Database System </h3>
                            <p className="text-gray-400 mb-4">
                                Designed a database system for university data management and developed an interactive website with APIs for data display.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["JavaScript", "SQL", "HTML/CSS", "PHP"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> Stock Simulator </h3>
                            <p className="text-gray-400 mb-4">
                                Developed a stock simulation program for managing portfolios, integrating real-time stock data and dynamic graphs for trend visualization using API parsing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["C++", "JSON", "nlohmann"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-end items-center">
                                <a style={{display: "table-cell"}} target="_blank" href="https://github.com/edwardowong/Stock-Simulator">
                                <Github/>
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> Web Load Balancer </h3>
                            <p className="text-gray-400 mb-4">
                                Developed a dynamic web load balancer to optimize network traffic distribution, using Python sockets for TCP connections to reduce latency and improve system reliability.                        
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["Python", "Sockets"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-end items-center">
                                <a style={{display: "table-cell"}} target="_blank" href="https://github.com/edwardowong/Web-Load-Balancer">
                                <Github/>
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> Drone Simulator </h3>
                            <p className="text-gray-400 mb-4">
                                Developed a VR simulation for drone flight, featuring realistic navigation and movement controls.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["Unity", "C#", "Blender"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-end items-center">
                                <a style={{display: "table-cell"}} target="_blank" href="https://github.com/edwardowong/Drone-Simulator">
                                <Github/>
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                            <h3 className="text-xl font-bold mb-2"> Berkeley Pacman AI </h3>
                            <p className="text-gray-400 mb-4">
                                Developed AI agents for Pacman using state-space search and probabilistic inference, solving mazes with various search algorithms like A* and breadth-first.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-1">
                                {["Python", "AI"].map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>))}
                            </div>
                            <div className="flex justify-end items-center">
                                <a style={{display: "table-cell"}} target="_blank" href="https://github.com/edwardowong/Pacman-AI">
                                <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}