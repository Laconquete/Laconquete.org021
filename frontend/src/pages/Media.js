import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Eye, Download, Filter, ExternalLink, Star, Heart, Crown } from "lucide-react";
import { FaYoutube, FaFacebook } from "react-icons/fa";

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const mediaCategories = [
    { id: 'all', name: 'Tous', icon: <Star className="w-5 h-5" />, gradient: 'from-gray-500 to-gray-600' },
    { id: 'sermons', name: 'Prédications', icon: <Crown className="w-5 h-5" />, gradient: 'from-blue-500 to-indigo-600' },
    { id: 'worship', name: 'Louange', icon: <Heart className="w-5 h-5" />, gradient: 'from-pink-500 to-rose-600' },
    { id: 'testimonies', name: 'Témoignages', icon: <Star className="w-5 h-5" />, gradient: 'from-yellow-500 to-orange-600' },
    { id: 'events', name: 'Événements', icon: <Calendar className="w-5 h-5" />, gradient: 'from-green-500 to-emerald-600' },
    { id: 'teachings', name: 'Enseignements', icon: <Crown className="w-5 h-5" />, gradient: 'from-purple-500 to-violet-600' }
  ];

  const months = [
    { id: 'all', name: 'Tous les mois' },
    { id: '2024-12', name: 'Décembre 2024' },
    { id: '2024-11', name: 'Novembre 2024' },
    { id: '2024-10', name: 'Octobre 2024' },
    { id: '2024-09', name: 'Septembre 2024' },
    { id: '2024-08', name: 'Août 2024' },
    { id: '2024-07', name: 'Juillet 2024' }
  ];

  // YouTube Playlist avec miniatures et thèmes
  const youtubePlaylist = [
    {
      id: 1,
      title: "Donne-moi donc cette montagne",
      description: "Message d'ouverture de la semaine de jeûne et de prière 2025",
      thumbnail: "https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
      speaker: "Pst. Josué Romain KAZADI",
      theme: "Conquête Spirituelle",
      date: "2024-12-15",
      duration: "45:30",
      views: "1.2K",
      category: "sermons",
      month: "2024-12",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    },
    {
      id: 2,
      title: "La Puissance de la Prière",
      description: "Enseignement sur l'importance de la prière dans la vie chrétienne",
      thumbnail: "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
      speaker: "Dr. David KATEBA",
      theme: "Vie de Prière",
      date: "2024-12-08",
      duration: "52:15",
      views: "890",
      category: "teachings",
      month: "2024-12",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    },
    {
      id: 3,
      title: "Témoignage de Guérison Divine",
      description: "Témoignage puissant de guérison divine dans notre communauté",
      thumbnail: "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
      speaker: "Sœur Marie Ntumba",
      theme: "Miracles & Guérisons",
      date: "2024-12-01",
      duration: "15:45",
      views: "567",
      category: "testimonies",
      month: "2024-12",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    },
    {
      id: 4,
      title: "Session de Louange - Groupe ARCO",
      description: "Moment de louange puissante avec le Groupe ARCO",
      thumbnail: "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
      speaker: "Groupe ARCO",
      theme: "Adoration & Louange",
      date: "2024-11-24",
      duration: "35:20",
      views: "1.5K",
      category: "worship",
      month: "2024-11",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    },
    {
      id: 5,
      title: "Moments Forts - Excursion des Couples",
      description: "Highlights de l'excursion spirituelle pour couples",
      thumbnail: "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
      speaker: "Équipe Pastorale",
      theme: "Famille & Mariage",
      date: "2024-11-21",
      duration: "28:10",
      views: "743",
      category: "events",
      month: "2024-11",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    },
    {
      id: 6,
      title: "La Foi qui Déplace les Montagnes",
      description: "Prédication inspirante sur la foi authentique",
      thumbnail: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
      speaker: "Pst. Richard MUKENDI",
      theme: "Foi & Miracles",
      date: "2024-11-17",
      duration: "41:25",
      views: "1.1K",
      category: "sermons",
      month: "2024-11",
      youtubeUrl: "https://www.youtube.com/@LaconqueteEEC"
    }
  ];

  // Facebook Moments classés par date/événement
  const facebookMoments = [
    {
      id: 1,
      title: "Semaine de Jeûne et Prière 2025",
      date: "2024-12-15",
      eventType: "Événement Spécial",
      images: [
        "https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85"
      ],
      description: "Moments forts de notre semaine de jeûne et de prière",
      count: 25,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Culte Dominical - Décembre",
      date: "2024-12-08",
      eventType: "Culte Régulier",
      images: [
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
      ],
      description: "Louange, adoration et communion fraternelle",
      count: 18,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Excursion des Couples",
      date: "2024-11-21",
      eventType: "Activité Spéciale",
      images: [
        "https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg"
      ],
      description: "Temps de communion et de formation pour les couples",
      count: 32,
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const filteredVideos = youtubePlaylist.filter(video => {
    const categoryMatch = selectedCategory === 'all' || video.category === selectedCategory;
    const monthMatch = selectedMonth === 'all' || video.month === selectedMonth;
    return categoryMatch && monthMatch;
  });

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
            backgroundImage: `url('https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85')`
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
              <Play className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow text-gradient-blue">
            Médias & Ressources
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Sermons, témoignages et moments forts de notre communauté
          </p>
        </motion.div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {mediaCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Month Filter */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {months.map(month => (
                <option key={month.id} value={month.id}>
                  {month.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* YouTube Playlist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                <FaYoutube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gradient mb-4">
              Playlist YouTube
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Retrouvez nos derniers messages et contenus
            </p>
            <a
              href="https://www.youtube.com/@LaconqueteEEC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaYoutube className="w-5 h-5 mr-2" />
              Visiter notre chaîne
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl overflow-hidden hover-lift shadow-elegant group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 bg-opacity-80 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.theme}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="font-semibold">{video.speaker}</span>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {new Date(video.date).toLocaleDateString('fr-FR')}
                    </span>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center"
                    >
                      Voir sur YouTube
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucune vidéo trouvée pour les critères sélectionnés.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Facebook Moments */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <FaFacebook className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gradient mb-4">
              Moments Forts Facebook
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Revivez nos événements et activités communautaires
            </p>
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaFacebook className="w-5 h-5 mr-2" />
              Suivez-nous sur Facebook
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          <div className="space-y-8">
            {facebookMoments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card-elevated rounded-2xl overflow-hidden hover-lift shadow-dramatic"
              >
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-3 gap-1 h-64">
                      {moment.images.map((image, imgIndex) => (
                        <div key={imgIndex} className={`relative ${imgIndex === 0 ? 'col-span-2 row-span-2' : ''}`}>
                          <img
                            src={image}
                            alt={moment.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {imgIndex === 2 && moment.count > 3 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-xl">
                              +{moment.count - 3}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 p-8 flex flex-col justify-center">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${moment.gradient} text-white text-sm font-semibold mb-3 w-fit`}>
                      {moment.eventType}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{moment.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(moment.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>{moment.count} photos</span>
                      </div>
                    </div>
                    <a
                      href="https://web.facebook.com/?_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-flex items-center bg-gradient-to-r ${moment.gradient} text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-fit`}
                    >
                      Voir sur Facebook
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;