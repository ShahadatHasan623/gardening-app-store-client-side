import {
  CalendarDays,
  Clock10Icon,
  CreditCardIcon,
  Link2Icon,
  MailIcon,
  MapPinPlus,
  Users2Icon,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
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
  const gardener = useLoaderData() || [];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const images = [
    {
      id: "event-1",
      title: ["Bloom & Grow Expo"],
      date: "June 10, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "Botanical Garden, Dhaka",
      description:
        "Join global leaders to explore the future of gardening, sustainability, and eco-friendly techniques.",
      speakers: [
        "Dr. Arif Hossain (Horticulture Expert)",
        "Nusrat Jahan (Urban Gardener)",
      ],
      registrationFee: "Free",
      contactEmail: "info@bloomexpo.com",
      website: "https://bloomexpo.com",
      url: "https://i.ibb.co/G3bQ094V/pexels-asphotograpy-101841.jpg",
    },
    {
      id: "event-2",
      title: ["Spring Into Gardening"],
      date: "May 5, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Green Field Park, Chattogram",
      description:
        "Celebrate the joys of spring with planting workshops, flower shows, and local garden market.",
      speakers: ["Ayesha Rahman", "Rafiq Islam"],
      registrationFee: "৳200",
      contactEmail: "spring@eventgarden.com",
      website: "https://springgardenfest.com",
      url: "https://i.ibb.co/1Gyqx6wY/pexels-sevenstormphotography-381739.jpg",
    },
    {
      id: "event-3",
      title: ["The Gardeners' Gathering"],
      date: "April 10, 2026",
      time: "2:00 PM - 7:00 PM",
      location: "Urban Garden Center, Rajshahi",
      description:
        "An inspiring afternoon of networking, seed exchange, expert talks, and nature walks.",
      speakers: ["Sharmin Akter", "Tariq Mahmood"],
      registrationFee: "Free",
      contactEmail: "gathering@gardenspot.org",
      website: "https://gardenersgathering.org",
      url: "https://i.ibb.co/YB4Ys2T2/pexels-leigh-patrick-14477-298246.jpg",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-300 min-h-screen">
      
      {/* ================= HERO SLIDER SECTION ================= */}
      {/* কম্প্যাক্ট উচ্চতা: মোবাইলে h-[380px], ট্যাবে h-[450px], ডেক্সটপে h-[500px] */}
      <div className="w-full pt-20 relative group/slider">
        <Slide
          duration={5000}
          transitionDuration={500}
          infinite={true}
          indicators={false}
          arrows={true}
          pauseOnHover={true}
          onChange={(oldIndex, newIndex) => setCurrentSlideIndex(newIndex)}
        >
          {images.map((image, idx) => (
            <div key={image.id} className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] overflow-hidden">
              {/* Background Image with Premium Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-100 group-hover/slider:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.8)), url(${image.url})`,
                }}
              />

              {/* Slider Content */}
              <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-6 md:px-12 z-10">
                <div className="max-w-2xl space-y-4 text-left">
                  
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20">
                    <Sparkles className="w-3 h-3 animate-pulse" /> Upcoming Event
                  </span>

                  {/* Animated Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight min-h-[45px] md:min-h-[55px]">
                    {currentSlideIndex === idx && (
                      <Typewriter
                        words={image.title}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                      />
                    )}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base font-normal leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                    {image.description}
                  </p>

                  {/* Info Tags & Action Button Row */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {/* Micro Info Row */}
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-medium">
                      <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/5">
                        <CalendarDays className="w-3.5 h-3.5 text-emerald-400" /> {image.date}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/5">
                        <MapPinPlus className="w-3.5 h-3.5 text-rose-400" /> {image.location.split(',')[0]}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/5">
                        <CreditCardIcon className="w-3.5 h-3.5 text-amber-400" /> {image.registrationFee}
                      </span>
                    </div>

                    {/* Action Button */}
                    <motion.a
                      href={image.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs rounded-xl shadow-md shadow-emerald-950/20 transition-all duration-300 group"
                    >
                      Get Tickets
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slide>

        {/* ================= SLIDER FLOOR CARD: ACTIVE EVENT SUMMARY ================= */}
        {/* স্লাইডার হাইট কমানোর সাথে সামঞ্জস্য রেখে কার্ডের প্যাডিং ও স্পেসিং কমানো হয়েছে */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 max-w-6xl mx-auto px-4 hidden lg:block">
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-gray-100 dark:border-zinc-800 grid grid-cols-4 gap-4 items-center">
            
            <div className="border-r border-gray-100 dark:border-zinc-800/80 pr-2">
              <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">Timing & Hours</h4>
              <p className="text-xs font-semibold flex items-center gap-1.5 text-gray-800 dark:text-zinc-200">
                <Clock10Icon className="w-3.5 h-3.5 text-amber-500" /> {images[currentSlideIndex].time}
              </p>
            </div>

            <div className="border-r border-gray-100 dark:border-zinc-800/80 pr-2">
              <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">Keynote Speakers</h4>
              <p className="text-xs font-semibold truncate flex items-center gap-1.5 text-gray-800 dark:text-zinc-200" title={images[currentSlideIndex].speakers.join(", ")}>
                <Users2Icon className="w-3.5 h-3.5 text-emerald-500" /> {images[currentSlideIndex].speakers[0]}
              </p>
            </div>

            <div className="border-r border-gray-100 dark:border-zinc-800/80 pr-2">
              <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">Official Inquiry</h4>
              <p className="text-xs font-semibold truncate flex items-center gap-1.5 text-gray-800 dark:text-zinc-200">
                <MailIcon className="w-3.5 h-3.5 text-sky-500" /> {images[currentSlideIndex].contactEmail}
              </p>
            </div>

            <div className="pl-2">
              <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">Event Portal</h4>
              <a href={images[currentSlideIndex].website} target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
                <Link2Icon className="w-3.5 h-3.5" /> Open Website
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Spacing for Slider Floor Card Layout */}
      <div className="h-10 lg:h-16" />

      {/* ================= COMPONENT SECTIONS LAYOUT ================= */}
      <div className="space-y-24 md:space-y-28 pb-24">
        
        {/* Gardeners Grid */}
        <section className="max-w-7xl mx-auto px-4">
          <Gardeners gardener={gardener} />
        </section>

        {/* Trending Guides / Tips */}
        <section className="bg-gradient-to-b from-transparent via-emerald-50/10 dark:via-emerald-950/5 to-transparent py-6">
          <div className="max-w-7xl mx-auto px-4">
            <TipTrendingCard />
          </div>
        </section>

        {/* Landscaping Cards & Showcase */}
        <section className="max-w-7xl mx-auto px-4 space-y-16">
          <LandscapingCard />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Landscaping />
          </motion.div>
        </section>

        {/* Offers Section */}
        <section>
          <SpecialOffers />
        </section>

        {/* FAQ Area */}
        <section className="max-w-5xl mx-auto px-4">
          <FaqSection />
        </section>

        {/* Newsletter Footer CTA */}
        <section className="max-w-7xl mx-auto px-4">
          <NewsletterSection />
        </section>

      </div>

    </div>
  );
};

export default Home;