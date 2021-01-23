import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import { FaAlignJustify, FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import { FiEdit3 } from 'react-icons/fi'

const MoreDeets = () => {
    const cardInfo = [

        {
            image:
                "https://thebfsclub.co.uk/assets/img/avatar-female-1.jpg",
            title: "Michael Jordan",
            text: "he is very close to goat Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  ",

            
            
            
        },
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
            title: "Lebron James",
            text: "THE GOAT specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ersions of Lorem Ipsum.",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSqLlUFzss2SVIxDcKgpE4HAUMVJDUTjudxhDThRuU_b0DQmDRP2WOGNblHXoRmBavFmu2j7bXuUQzDVrwE6_WlAbTlJwx9RFfw&usqp=CAU&ec=45761792",
            title: "Alex Caruso",
            text: "THE TRUE GOAT specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently versions of Lorem Ipsum. ",
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjauUvme6DIuwsXLiH9xPcIMwrUQfXzoGRw&usqp=CAU",
            title: "Steph Curry",
            text: "he good specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the Ipsum. ",
        },
        {
            image:
                "https://cf-s3.petcoach.co/thumbnails/user_profile_thumb/uploads/users/825318/avatar/c721c06562b8577d27727d2fd13c12f7d32da41e.jpeg",
            title: "Michael Jordan",
            text: "he is very close to goat specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        },




    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: ".5rem" }} key={index} className="box">


                <a href="https://www.youtube.com/c/jamesqquick" className="Edit">
                    <FiEdit3 />
                </a>
                <div className="card-header-cont">
                    <div className="card-cont" ></div>
                    <div>
                    <Card.Img src="holder.js/171x180" roundedCircle src={card.image} style={{ width: 100, height: 100, borderRadius: 400 / 2, alignSelf: 'center' , marginTop:-60}} /></div>
                </div>

                <Card.Body>

                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text style={{}}>{card.text}</Card.Text>

                    <a
                        href="https://www.youtube.com/c/jamesqquick"
                        className="twitter social"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.youtube.com/c/jamesqquick"
                        className="instagram social"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.youtube.com/c/jamesqquick"
                        className="facebook social"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.youtube.com/c/jamesqquick"
                        className="youtube social"
                    >
                        < FaYoutube />
                    </a>




                </Card.Body>
            </Card>
        );
    };

    return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;