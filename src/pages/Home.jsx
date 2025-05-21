import {
  CalendarDays,
  Clock10Icon,
  CreditCard,
  CreditCardIcon,
  Link2Icon,
  MailIcon,
  MapPinPlus,
  Users2Icon,
} from "lucide-react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const images = [
    {
      id: "event-1",
      title: ["Bloom & Grow Expo"],
      date: "June 10, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Botanical Garden, Dhaka",
      description:
        "Join global leaders to explore the future of gardening, sustainability, and eco-friendly techniques.",
      speakers: [
        "Dr. Arif Hossain – Horticulture Expert",
        "Nusrat Jahan – Urban Gardener",
        "Michael Green – Sustainability Advocate",
      ],
      registrationFee: "Free",
      contactEmail: "info@bloomexpo.com",
      website: "https://bloomexpo.com",
      url: "https://i.ibb.co/G3bQ094V/pexels-asphotograpy-101841.jpg",
    },
    {
      id: "event-2",
      title: ["Spring Into Gardening"],
      date: "May 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Green Field Park, Chattogram",
      description:
        "Celebrate the joys of spring with planting workshops, flower shows, and local garden market.",
      speakers: [
        "Ayesha Rahman – Flower Specialist",
        "Rafiq Islam – Agricultural Scientist",
      ],
      registrationFee: "৳200",
      contactEmail: "spring@eventgarden.com",
      website: "https://springgardenfest.com",
      url: "https://i.ibb.co/G3bQ094V/pexels-asphotograpy-101841.jpg",
    },
    {
      id: "event-3",
      title: ["The Gardeners' Gathering"],
      date: "April 10, 2025",
      time: "2:00 PM - 7:00 PM",
      location: "Urban Garden Center, Rajshahi",
      description:
        "An inspiring afternoon of networking, seed exchange, expert talks, and nature walks.",
      speakers: [
        "Sharmin Akter – Landscape Designer",
        "Tariq Mahmood – Permaculture Instructor",
      ],
      registrationFee: "Free",
      contactEmail: "gathering@gardenspot.org",
      website: "https://gardenersgathering.org",
      url: "https://i.ibb.co/G3bQ094V/pexels-asphotograpy-101841.jpg",
    },
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slide {...properties}>
        {images.map((image) => (
          <div className="each-slide-effect" key={image.id}>
            <div
              id={image.id}
              className="w-full h-[100vh] bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ),
                  url(${image.url})
                `,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="text-white w-1/2 bg-black/50 flex flex-col  justify-center rounded-xl space-y-3 lg:p-15 p-8"
              >
                <h1 className="lg:text-4xl text-2xl font-semibold">
                  <Typewriter
                    words={image.title}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-red-200" />
                  <p>{image.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock10Icon className="text-red-500" />
                  <p>{image.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinPlus className="text-red-800" />
                  <p>{image.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Users2Icon className="text-blue-500" />
                  <p>
                    {image.speakers[1]} <br /> {image.speakers[2]}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="text-amber-300" />
                  <p>{image.registrationFee}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="text-blue-500" />
                  <p>{image.contactEmail}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link2Icon className="text-red-800" />
                  <p>{image.website}</p>
                </div>
                <div>
                  <motion.button
                    className="py-2 px-15  border-2 rounded-4xl text-xl"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                  >
                    <a href={image.website}>event</a>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
