import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, MapPin, Users, Bell, Heart, Crown, Star, Zap, ChevronDown, ChevronUp, Send } from "lucide-react";

const ActivitiesDepartments = () => {
  const [selectedDay, setSelectedDay] = useState('all');
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    motivation: ''
  });

  // Programme hebdomadaire mis à jour
  const weeklySchedule = [
    {
      day: "Lundi",
      time: "16h30 - 18h30",
      location: "Église",
      title: "Réunion de Sœurs et Mamans",
      description: "Temps de communion, prière et enseignement pour les femmes de l'église",
      type: "fellowship",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      day: "Mardi", 
      time: "16h30 - 18h30",
      location: "Église",
      title: "Réunion des Papas",
      description: "Temps de communion et formation pour les hommes de l'église",
      type: "fellowship",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      day: "Lundi - Samedi",
      time: "06h00 - 08h30",
      location: "Église",
      title: "Dévotion Matinale",
      description: "Temps de prière et de méditation pour commencer la journée dans la présence de Dieu",
      type: "prayer",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      day: "Mercredi",
      time: "16h30 - 18h30",
      location: "Église",
      title: "Enseignements Bibliques",
      description: "Étude approfondie de la Parole de Dieu pour fortifier notre foi",
      type: "teaching",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      day: "Vendredi",
      time: "16h00 - 18h30",
      location: "Église",
      title: "Jeûne et Prière",
      description: "Temps de jeûne et de prière pour chercher la face de Dieu",
      type: "prayer",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      day: "Samedi",
      time: "14h30 - 17h00",
      location: "Église",
      title: "Culte de la Jeunesse",
      description: "Service spécialement dédié aux jeunes avec louange contemporaine et enseignement",
      type: "youth",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      day: "Dimanche",
      time: "08h00 - 11h00",
      location: "Église",
      title: "Culte Dominical",
      description: "Culte principal de la semaine avec louange, enseignement et communion",
      type: "worship",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50"
    }
  ];

  // Événements à venir avec affiches
  const upcomingEvents = [
    {
      date: "2025-01-11",
      endDate: "2025-01-17",
      title: "Semaine de Jeûne et de Prière 2025",
      theme: "Donne-moi donc cette montagne...",
      time: "16h00 - 18h45",
      location: "Église",
      speakers: ["Pst. J. Romain Kazadi", "Dr. David Kateba"],
      description: "Une semaine spéciale de jeûne et de prière pour commencer l'année dans la présence de Dieu",
      type: "special",
      gradient: "from-blue-600 to-purple-600",
      poster: "https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85"
    },
    {
      date: "2025-02-15",
      title: "Conférence Génération Espoir",
      theme: "Jeunesse Conquérante",
      time: "09h00 - 17h00",
      location: "Église",
      speakers: ["Équipe Pastorale", "Leaders Jeunesse"],
      description: "Conférence dédiée aux jeunes pour leur équipement spirituel et leadership",
      type: "conference",
      gradient: "from-green-600 to-emerald-600",
      poster: "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      date: "2025-03-21",
      title: "Journée des Familles",
      theme: "Famille Bénie, Famille Conquérante",
      time: "10h00 - 16h00",
      location: "Église",
      speakers: ["Pasteur Josué Romain"],
      description: "Journée spéciale pour renforcer les liens familiaux dans la foi",
      type: "family",
      gradient: "from-orange-600 to-red-600",
      poster: "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  // Départements avec design amélioré
  const departments = [
    {
      id: 1,
      name: "Louange",
      groups: ["Groupe ARCO", "Chorale des Mamans (Miriame)", "Cano Vocal"],
      description: "Ministère de la musique et de la louange pour glorifier Dieu",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      activities: [
        "Répétitions hebdomadaires",
        "Animation des cultes",
        "Concerts spirituels",
        "Formation musicale"
      ],
      responsible: "Équipe Musicale",
      vision: "Conduire l'assemblée dans l'adoration et la louange authentique",
      photos: [
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg"
      ]
    },
    {
      id: 2,
      name: "Génération Espoir",
      groups: ["Jeunes 15-25 ans", "Leaders Jeunesse", "Ministère Campus"],
      description: "Jeunesse de l'église - Formation et équipement des jeunes leaders",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      activities: [
        "Culte jeunesse samedi",
        "Camps et retraites",
        "Formation leadership",
        "Évangélisation campus"
      ],
      responsible: "Équipe Jeunesse",
      vision: "Former la nouvelle génération de leaders spirituels",
      photos: [
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
        "https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg"
      ]
    },
    {
      id: 3,
      name: "Ecodime",
      groups: ["Enfants", "Adolescents", "Jeunes", "Adultes"],
      description: "École Dominicale - Formation biblique pour tous les âges",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      activities: [
        "Cours bibliques dominicaux",
        "Programmes d'évangélisation",
        "Formation de moniteurs",
        "Activités éducatives"
      ],
      responsible: "Équipe d'Enseignement",
      vision: "Équiper chaque membre dans la connaissance de la Parole de Dieu",
      photos: [
        "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
      ]
    },
    {
      id: 4,
      name: "Département des Sœurs",
      groups: ["Femmes mariées", "Jeunes femmes", "Mamans"],
      description: "Ministère dédié aux femmes de l'église",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      activities: [
        "Réunions de prière lundi",
        "Conférences féminines",
        "Œuvres sociales",
        "Mentorat spirituel"
      ],
      responsible: "Équipe Féminine",
      vision: "Édifier et autonomiser les femmes dans leur rôle biblique",
      photos: [
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg"
      ]
    },
    {
      id: 5,
      name: "Département des Papas",
      groups: ["Hommes mariés", "Jeunes hommes", "Pères"],
      description: "Ministère dédié aux hommes de l'église",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-600",
      activities: [
        "Réunions mardi",
        "Retraites spirituelles",
        "Mentorat masculin",
        "Projets communautaires"
      ],
      responsible: "Équipe Masculine",
      vision: "Former des hommes selon le cœur de Dieu, leaders dans leurs foyers",
      photos: [
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
        "https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg"
      ]
    },
    {
      id: 6,
      name: "Média et Communication",
      groups: ["Équipe technique", "Réseaux sociaux", "Communication"],
      description: "Diffusion et communication des activités",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      activities: [
        "Diffusion des cultes",
        "Gestion des réseaux sociaux",
        "Communication interne",
        "Production multimédia"
      ],
      responsible: "Équipe Média",
      vision: "Étendre la portée de l'Évangile par les médias modernes",
      photos: [
        "https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
      ]
    }
  ];

  // Vie de l'église
  const vieEglise = [
    {
      title: "Exhortations du Dimanche",
      description: "Messages d'encouragement et d'édification pour la semaine",
      time: "Pendant le culte dominical",
      type: "exhortation"
    },
    {
      title: "Témoignages",
      description: "Partage des œuvres de Dieu dans nos vies",
      time: "Services spéciaux",
      type: "testimony"
    },
    {
      title: "Annonces Communautaires",
      description: "Informations importantes pour la communauté",
      time: "Chaque dimanche",
      type: "announcement"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre demande d\'adhésion a été soumise avec succès !');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      motivation: ''
    });
    setShowJoinForm(false);
  };

  const toggleDepartment = (deptId) => {
    setExpandedDepartment(expandedDepartment === deptId ? null : deptId);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow text-gradient-blue">
            Activités & Départements
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Programme, ministères et vie de notre communauté
          </p>
        </motion.div>
      </section>

      {/* Programme Hebdomadaire */}
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
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="font-semibold">{activity.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-500" />
                      <span>{activity.location}</span>
                    </div>
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

      {/* Vie de l'Église */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient mb-4">
              Vie de l'Église
            </h2>
            <p className="text-xl text-gray-600">
              Exhortations, témoignages et moments de communion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vieEglise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl p-6 text-center hover-lift shadow-elegant"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="text-sm text-blue-600 font-semibold">{item.time}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements à Venir avec Affiches */}
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
                  {/* Date et Affiche */}
                  <div className={`md:w-1/3 bg-gradient-to-br ${event.gradient} p-8 text-white flex flex-col items-center justify-center`}>
                    <div className="text-center mb-6">
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
                    </div>
                    
                    {/* Affiche de l'événement */}
                    <div className="w-full max-w-xs">
                      <img
                        src={event.poster}
                        alt={`Affiche ${event.title}`}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
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
                        <MapPin className="w-5 h-5 mr-2 text-green-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-purple-500" />
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

      {/* Départements avec Accordéons */}
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
              Nos Départements & Ministères
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos différents ministères et trouvez votre place
            </p>
          </motion.div>

          <div className="space-y-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl overflow-hidden shadow-elegant"
              >
                <div
                  className={`cursor-pointer p-6 bg-gradient-to-r ${dept.gradient} text-white`}
                  onClick={() => toggleDepartment(dept.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        {dept.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{dept.name}</h3>
                        <p className="opacity-90">{dept.description}</p>
                      </div>
                    </div>
                    <div className="transform transition-transform duration-300">
                      {expandedDepartment === dept.id ? 
                        <ChevronUp className="w-6 h-6" /> : 
                        <ChevronDown className="w-6 h-6" />
                      }
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedDepartment === dept.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Photos d'illustration */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Photos du ministère</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {dept.photos.map((photo, photoIndex) => (
                                <div key={photoIndex} className="relative">
                                  <img
                                    src={photo}
                                    alt={`${dept.name} ${photoIndex + 1}`}
                                    className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Informations détaillées */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">Vision</h4>
                              <p className="text-gray-600">{dept.vision}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">Responsable</h4>
                              <p className="text-gray-600">{dept.responsible}</p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">Activités</h4>
                              <ul className="space-y-1">
                                {dept.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="text-gray-600 flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">Groupes</h4>
                              <div className="flex flex-wrap gap-2">
                                {dept.groups?.map((group, groupIndex) => (
                                  <span key={groupIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                    {group}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setFormData({...formData, department: dept.name});
                                setShowJoinForm(true);
                              }}
                              className={`w-full bg-gradient-to-r ${dept.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                            >
                              Rejoindre ce département
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bouton général d'adhésion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowJoinForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Formulaire d'Adhésion Général
            </button>
          </motion.div>
        </div>
      </section>

      {/* Formulaire d'Adhésion Modal */}
      {showJoinForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Formulaire d'Adhésion</h2>
                <button
                  onClick={() => setShowJoinForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Département souhaité *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionner un département</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Motivation *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Expliquez pourquoi vous souhaitez rejoindre ce département..."
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowJoinForm(false)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesDepartments;