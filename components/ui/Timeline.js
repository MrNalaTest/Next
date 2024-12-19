"use client";
/* 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Timeline = () => {
    const [currentDate, setCurrentDate] = useState('Nov 13');
    const [weekday, setWeekday] = useState('Wednesday');

    const events = [
        {
            date: 'Nov 13',
            weekday: 'Wednesday',
            title: 'Founders Tech Talks & Wine',
            time: '5:30 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/hshwxigc',
            hosts: ['Angie Acosta', 'Benhur Hernández'],
            location: 'Momentino Wine Bar'
        },
        {
            date: 'Nov 14',
            weekday: 'Thursday',
            title: '🌉 Open Finance, Open Minds by Redeban',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/openmindsredeban',
            hosts: ['Latam Fintech Hub'],
            location: 'Bambulé'
        },
        {
            date: 'Nov 18',
            weekday: 'Monday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        },
        {
            date: 'Nov 19',
            weekday: 'Monday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        },
        {
            date: 'Nov 22',
            weekday: 'tuesday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        },
        {
            date: 'Nov 24',
            weekday: 'saturday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        },
        {
            date: 'Nov 25',
            weekday: 'sunday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        },
        {
            date: 'Dec 2',
            weekday: 'Monday',
            title: 'Bogotá TechXchange: Wine edition',
            time: '6:00 PM',
            coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
            link: '/x64x36bm',
            hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
            location: 'Viva la Vida'
        } 
    ];

    const handleScroll = () => {
        const element = document.querySelector('.content-animated');
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 0) {
                updateDate();
            }
        }
    };

    const updateDate = () => {
        const today = new Date();
        const currentEvent = events.find(event => {
            const eventDate = new Date(today.getFullYear(), 10, parseInt(event.date.split(' ')[1]));
            return eventDate >= today;
        });

        if (currentEvent) {
            setCurrentDate(currentEvent.date);
            setWeekday(currentEvent.weekday);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-transparent text-white p-4 md:p-6 lg:p-8">
            <div className="relative max-w-3xl mx-auto ">
                Línea vertical 
                <div className="line" />

                                <div className="space-y-8 md:space-y-12 ">
                    {events.map((event, index) => (
                        <div key={index} className="relative pl-12 md:pl-16">
                            <div className="flex items-center gap-4 text-gray-400 mb-4">
                            <div className=''>
                                <div className="absolute left-3 md:left-4 w-3 h-3 rounded-full bg-gray-400" />
                                    <span className="pl-5 font-medium">{event.date}</span>
                                    <span className="ml-2">{event.weekday}</span>
                                </div>
                            </div>

                            <div className="bg-zinc-900 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:cursor-pointer">
                                <div className="p-4 flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-gray-400">{event.time}</div>
                                            <h3 className="text-xl font-semibold">{event.title}</h3>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                {event.hosts.map((host, i) => (
                                                    <div key={i} className="border-2 border-zinc-900 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-semibold text-white">
                                                        {host.split(' ').map(word => word[0]).join('')}
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-400">By {event.hosts.join(', ')}</span>
                                        </div>

                                        {event.location && (
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{event.location}</span>
                                            </div>
                                        )}
                                    </div>

                                    <Image
                                        src={event.coverImage}
                                        alt="Event thumbnail"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
 */



import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Índice del evento activo

  const events = [
    {
        date: 'Nov 13',
        weekday: 'Wednesday',
        title: 'Founders Tech Talks & Wine',
        time: '5:30 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/hshwxigc',
        hosts: ['Angie Acosta', 'Benhur Hernández'],
        location: 'Momentino Wine Bar'
    },
    {
        date: 'Nov 14',
        weekday: 'Thursday',
        title: '🌉 Open Finance, Open Minds by Redeban',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/openmindsredeban',
        hosts: ['Latam Fintech Hub'],
        location: 'Bambulé'
    },
    {
        date: 'Nov 18',
        weekday: 'Monday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    },
    {
        date: 'Nov 19',
        weekday: 'Monday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    },
    {
        date: 'Nov 22',
        weekday: 'tuesday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    },
    {
        date: 'Nov 24',
        weekday: 'saturday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    },
    {
        date: 'Nov 25',
        weekday: 'sunday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    },
    {
        date: 'Dec 2',
        weekday: 'Monday',
        title: 'Bogotá TechXchange: Wine edition',
        time: '6:00 PM',
        coverImage: 'https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=',
        link: '/x64x36bm',
        hosts: ['Sofka Technologies', 'Verónica', 'Carlos Galindo', 'Claudio Bersano'],
        location: 'Viva la Vida'
    } 
  ];

  const handleScroll = () => {
    const eventElements = document.querySelectorAll(".event-marker");
    let newActiveIndex = activeIndex; // Mantener el índice actual

    eventElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= 50) {
        newActiveIndex = index; // Actualizar al índice actual si está en el rango
      }
    });

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex); // Solo actualizar si cambia
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-transparent text-white p-4 md:p-6 lg:p-8">
      <div className="relative max-w-3xl mx-auto">
        {/* Línea vertical */}
        <div className="line" />

        {/* Contenido dinámico */}
        <div className="space-y-8 md:space-y-10">
          {events.map((event, index) => (
            <div key={index} className="relative pl-12 md:pl-16">
              {/* Marker que se queda fijo */}
              <div
                className={`event-marker ${
                  index === activeIndex ? "sticky top-9 content-animated" : ""
                }`}
                style={{ zIndex: index === activeIndex ? 10 : "auto" }}
              >
                <div className="absolute left-4 md:left-4 w-3 h-3 rounded-full bg-gray-400" />
                <span className="pl-5 font-medium">{event.date}</span>
                <span className="ml-2">{event.weekday}</span>
              </div>

              {/* Contenido del evento */}
              <div className="bg-zinc-900 border-zinc-800 rounded-lg hover:bg-zinc-800 hover:cursor-pointer">
                <div className="p-4 flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-4">
                    <div>
                      <div className="text-gray-400">{event.time}</div>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {event.hosts.map((host, i) => (
                          <div
                            key={i}
                            className="border-2 border-zinc-900 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-semibold text-white"
                          >
                            {host
                              .split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        By {event.hosts.join(", ")}
                      </span>
                    </div>

                    {event.location && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    )}
                  </div>

                  <Image
                    src={event.coverImage}
                    alt="Event thumbnail"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
