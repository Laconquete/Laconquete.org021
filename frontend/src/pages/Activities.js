import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Users, Bell } from "lucide-react";

const Activities = () => {
  const [selectedDay, setSelectedDay] = useState('all');

  const weeklySchedule = [
    {
      day: "Lundi - Samedi",
      time: "06h00 - 08h30",
      title: "Dévotion Matinale",
      description: "Temps de prière et de méditation pour commencer la journée dans la présence de Dieu",
      location: "Église",
      type: "prayer",
      icon: "🌅"
    },
    {
      day: "Mercredi",
      time: "16h30 - 18h30",
      title: "Enseignements Bibliques",
      description: "Étude approfondie de la Parole de Dieu pour fortifier notre foi",
      location: "Église",
      type: "teaching",
      icon: "📚"
    },
    {
      day: "Vendredi",
      time: "16h00 - 18h30",
      title: "Jeûne et Prière",
      description: "Temps de jeûne et de prière pour chercher la face de Dieu",
      location: "Église",
      type: "prayer",
      icon: "🙏"
    },
    {
      day: "Dimanche",
      time: "08h00 - 11h00",
      title: "Culte Dominical",
      description: "Culte principal de la semaine avec louange, enseignement et communion",
      location: "Église",
      type: "worship",
      icon: "⛪"
    }
  ];

  const upcomingEvents = [
    {
      date: "2025-01-11",
      endDate: "2025-01-17",
      title: "Semaine de Jeûne et de Prière 2025",
      theme: "Donne-moi donc cette montagne...",
      time: "16h00 - 18h45",
      speakers: ["Pst. J. Romain Kazadi", "Dr. David Kateba"],
      description: "Une semaine spéciale de jeûne et de prière pour commencer l'année dans la présence de Dieu",
      type: "special"
    },
    {
      date: "2025-02-15",
      title: "Conférence de Jeunes",
      theme: "Jeunesse Conquérante",
      time: "09h00 - 17h00",
      speakers: ["Équipe Pastorale"],
      description: "Conférence dédiée aux jeunes pour leur équipement spirituel",
      type: "conference"
    },
    {
      date: "2025-03-21",
      title: "Journée des Familles",
      theme: "Famille Bénie, Famille Conquérante",
      time: "10h00 - 16h00",
      speakers: ["Pasteur Josué Romain"],
      description: "Journée spéciale pour renforcer les liens familiaux dans la foi",
      type: "family"
    }
  ];

  const departments = [
    {
      name: "Louange",
      groups: ["Groupe ARCO", "Chorale des Mamans (Miriame)", "Cano Vocal"],
      description: "Ministère de la musique et de la louange",
      icon: "🎵"
    },
    {
      name: "Ecodime",
      description: "École Dominicale - Formation biblique pour tous les âges",
      icon: "🎓"
    },
    {
      name: "Département des Sœurs",
      description: "Ministère dédié aux femmes de l'église",
      icon: "👩‍👩‍👧‍👧"
    },
    {
      name: "Département des Papas",
      description: "Ministère dédié aux hommes de l'église",
      icon: "👨‍👨‍👦‍👦"
    },
    {
      name: "Protocole",
      description: "Organisation et coordination des événements",
      icon: "📋"
    },
    {
      name: "Média et Communication",
      description: "Diffusion et communication des activités",
      icon: "📱"
    },
    {
      name: "Les Anciens",
      description: "Conseil des anciens de l'église",
      icon: "👴"
    },
    {
      name: "Les Diacres",
      description: "Service diaconal et soutien pastoral",
      icon: "🤝"
    },
    {
      name: "Social",
      description: "Œuvres sociales et soutien communautaire",
      icon: "❤️"
    },
    {
      name: "Propreté",
      description: "Entretien et maintenance des locaux",
      icon: "🧹"
    },
    {
      name: "Intercession",
      description: "Ministère de la prière et de l'intercession",
      icon: "🕊️"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl px-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow">
            Nos Activités
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Programme hebdomadaire et événements spéciaux
          </p>
        </motion.div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Programme Hebdomadaire
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez-nous pour nos activités régulières
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weeklySchedule.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{activity.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                    <p className="text-blue-600 font-semibold">{activity.day}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Événements à Venir
            </h2>
            <p className="text-xl text-gray-600">
              Ne manquez pas nos événements spéciaux
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-lg">
                        {new Date(event.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </div>
                      {event.endDate && (
                        <div className="text-sm mt-2 opacity-90">
                          au {new Date(event.endDate).getDate()}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{event.theme}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Orateurs: {event.speakers.join(', ')}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Départements
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos différents ministères
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.slice(0, 6).map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{dept.name}</h3>
                {dept.groups && (
                  <div className="text-sm text-blue-600 mb-2">
                    {dept.groups.join(' • ')}
                  </div>
                )}
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/departments"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Voir tous les départements
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;