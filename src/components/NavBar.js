import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from "../data";
import { TweenLite } from 'gsap';
import { motion } from 'framer-motion';
import $ from 'jquery';

const NavBar = () => {
    const transition = { duration: 1, delay: -2, ease: [0.43, 0.13, 0.23, 0.96]};
    useEffect(() => {
        const $cursor = $(".cursor");
        const $overlay = $(".project-overlay");

        const moveCursor = e => {
            TweenLite.to($cursor, 0.5, {
                css: {
                    left: e.pageX,
                    top: e.pageY
                },
                delay: 0.03
            });
        }

        $(".p-1").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[0].cursor}`})
        });
        $(".p-2").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[1].cursor}`})
        });
        $(".p-3").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[2].cursor}`})
        });
        $(".p-4").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[3].cursor}`})
        });
        $(".p-5").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[4].cursor}`})
        });
        $(".p-6").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[5].cursor}`})
        });
        $(".p-7").hover(() => {
            $(".cursor").css({"background-image" : `url(${data[6].cursor}`})
        });

        $($overlay).mousemove(() => {
            TweenLite.to($cursor, 0.8, {scale: 1, autoAlpha: 1});
            $($overlay).on("mousemove", moveCursor);
        })

        $($overlay).mouseout(() => {
            TweenLite.to($cursor, 0.8, {scale: 0.1, autoAlpha: 0});
        })
    })
    
    return(
        <div>
            <div className="cursor"></div>
            <div className="wrapper">
                <div className="project-list">
                    {data.map((place, i) => (
                        <motion.h2 
                            key={`place${i}`} 
                            initial={{ x: 0, opacity: 0}}
                            animate={{ x: 1, opacity: 1 }} 
                            exit={{ x: 0, opacity: 0 , transition: { duration: 2, ease: transition.ease}}} 
                            className={`project p-${i+1}`}>
                            <Link to={`/${i}`}  className="link">
                                <div className="project-overlay"></div>
                                <div className="project-title"><h3>{place.name}</h3></div>
                                <div className="project-categ">{place.location}</div>
                            </Link>
                        </motion.h2>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NavBar;

