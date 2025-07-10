import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, Users, Bell, Heart, Crown, Star, Zap } from "lucide-react";

const Activities = () => {
  const [selectedDay, setSelectedDay] = useState('all');

  const weeklySchedule = [
    {
      day: "Lundi",
      time: "16h30 - 18h30",
      title: "Réunion de Sœurs et Mamans",
      description: "Temps de communion, prière et enseignement pour les femmes de l'église",
      location: "Église",
      type: "fellowship",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      day: "Lundi - Samedi",
      time: "06h00 - 08h30",
      title: "Dévotion Matinale",
      description: "Temps de prière et de méditation pour commencer la journée dans la présence de Dieu",
      location: "Église",
      type: "prayer",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      day: "Mercredi",
      time: "16h30 - 18h30",
      title: "Enseignements Bibliques",
      description: "Étude approfondie de la Parole de Dieu pour fortifier notre foi",
      location: "Église",
      type: "teaching",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      day: "Vendredi",
      time: "16h00 - 18h30",
      title: "Jeûne et Prière",
      description: "Temps de jeûne et de prière pour chercher la face de Dieu",
      location: "Église",
      type: "prayer",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      day: "Dimanche",
      time: "08h00 - 11h00",
      title: "Culte Dominical",
      description: "Culte principal de la semaine avec louange, enseignement et communion",
      location: "Église",
      type: "worship",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50"
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
      type: "special",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      date: "2025-02-15",
      title: "Conférence de Jeunes",
      theme: "Jeunesse Conquérante",
      time: "09h00 - 17h00",
      speakers: ["Équipe Pastorale"],
      description: "Conférence dédiée aux jeunes pour leur équipement spirituel",
      type: "conference",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      date: "2025-03-21",
      title: "Journée des Familles",
      theme: "Famille Bénie, Famille Conquérante",
      time: "10h00 - 16h00",
      speakers: ["Pasteur Josué Romain"],
      description: "Journée spéciale pour renforcer les liens familiaux dans la foi",
      type: "family",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const departments = [
    {
      name: "Louange",
      groups: ["Groupe ARCO", "Chorale des Mamans (Miriame)", "Cano Vocal"],
      description: "Ministère de la musique et de la louange",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "Ecodime",
      description: "École Dominicale - Formation biblique pour tous les âges",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Département des Sœurs",
      description: "Ministère dédié aux femmes de l'église",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Département des Papas",
      description: "Ministère dédié aux hommes de l'église",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600"
    },
    {
      name: "Protocole",
      description: "Organisation et coordination des événements",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      name: "Média et Communication",
      description: "Diffusion et communication des activités",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl px-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-4 rounded-full glass-effect animate-float">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow text-gradient-blue">
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
            <h2 className="text-5xl font-bold text-gradient mb-4">
              Programme Hebdomadaire
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez-nous pour nos activités régulières
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklySchedule.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6 hover-lift shadow-elegant group"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center text-white mr-4 icon-container shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                    <p className={`font-semibold bg-gradient-to-r ${activity.gradient} bg-clip-text text-transparent`}>
                      {activity.day}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="font-semibold">{activity.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span>{activity.location}</span>
                  </div>
                </div>
                
                <div className={`bg-gradient-to-r ${activity.bgGradient} p-4 rounded-lg border-l-4 border-gradient-to-b ${activity.gradient}`}>
                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient mb-4">
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
                className="card-elevated rounded-2xl overflow-hidden hover-lift shadow-dramatic"
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${event.gradient} p-8 text-white flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-lg uppercase tracking-wide">
                        {new Date(event.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </div>
                      {event.endDate && (
                        <div className="text-sm mt-2 opacity-90">
                          au {new Date(event.endDate).getDate()}
                        </div>
                      )}
                      <div className="mt-4">
                        <Crown className="w-8 h-8 mx-auto animate-float" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${event.gradient} text-white text-sm font-semibold`}>
                        {event.type.toUpperCase()}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className={`text-xl font-semibold mb-4 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                      {event.theme}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-blue-500" />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-green-500" />
                        <span>Orateurs: {event.speakers.join(', ')}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                    
                    <button className={`btn-gradient bg-gradient-to-r ${event.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
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
            <h2 className="text-5xl font-bold text-gradient mb-4">
              Nos Départements
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos différents ministères
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6 text-center hover-lift shadow-elegant group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dept.gradient} flex items-center justify-center text-white mx-auto mb-4 icon-container shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                {dept.groups && (
                  <div className="text-sm text-blue-600 mb-3 font-semibold">
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
            <Link
              to="/departments"
              className="inline-block btn-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir tous les départements
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Activities;