import {
  CalendarDays,
  Clock10Icon,
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
import Gardeners from "../components/Gardeners";
import { useLoaderData } from "react-router";
import TipTrendingCard from "../components/TipTrendingCard";
import Landscaping from "./Landscaning";
import LandscapingCard from "./LandscapingCard";
import NewsletterSection from "./NewsletterSection";
import SpecialOffers from "./SpecialOffers";
import FaqSection from "./FaqSection";

const Home = () => {
  const gardener = useLoaderData();
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
      url: "https://i.ibb.co/1Gyqx6wY/pexels-sevenstormphotography-381739.jpg",
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
      url: "https://i.ibb.co/YB4Ys2T2/pexels-leigh-patrick-14477-298246.jpg",
    },
  ];

  const BannerItem = ({ icon, text }) => (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm md:text-base">{text}</span>
    </div>
  );

  return (
    <div>
      <div className="w-full pt-20">
        <Slide
          duration={10}
          transitionDuration={200}
          infinite={true}
          indicators={true}
          arrows={true}
          pauseOnHover={false}
        >
          {images.map((image) => (
            <div key={image.id} className="each-slide-effect">
              <div
                className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.55), 
                  rgba(0, 0, 0, 0.55)
                ), url(${image.url})`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="max-w-5xl bg-black/20 rounded-xl p-6 md:p-10 text-white space-y-4 shadow-xl backdrop-blur-sm"
                >
                  <h1 className="text-3xl md:text-5xl font-bold">
                    <Typewriter
                      words={image.title}
                      loop={false}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={2000}
                    />
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <BannerItem
                      icon={<CalendarDays className="text-green-300" />}
                      text={image.date}
                    />
                    <BannerItem
                      icon={<Clock10Icon className="text-yellow-300" />}
                      text={image.time}
                    />
                    <BannerItem
                      icon={<MapPinPlus className="text-red-300" />}
                      text={image.location}
                    />
                    <BannerItem
                      icon={<Users2Icon className="text-blue-300" />}
                      text={image.speakers.join(", ")}
                    />
                    <BannerItem
                      icon={<CreditCardIcon className="text-amber-300" />}
                      text={image.registrationFee}
                    />
                    <BannerItem
                      icon={<MailIcon className="text-sky-300" />}
                      text={image.contactEmail}
                    />
                    <BannerItem
                      icon={<Link2Icon className="text-pink-300" />}
                      text={image.website}
                    />
                  </div>

                  <motion.a
                    href={image.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px rgba(255, 255, 255, 0.5)",
                    }}
                    className="inline-block mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-full"
                  >
                    Visit Event Website
                  </motion.a>
                </motion.div>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div>
        <Gardeners gardener={gardener}></Gardeners>
      </div>
      <div>
        <TipTrendingCard></TipTrendingCard>
      </div>
      <div>
        <LandscapingCard></LandscapingCard>
      </div>
      <SpecialOffers></SpecialOffers>
      <motion.div
        initial={{ opacity: 0, rotateX: "90deg" }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 2 }}
      >
        <Landscaping></Landscaping>
      </motion.div>
      <FaqSection></FaqSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;
