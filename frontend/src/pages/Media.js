import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Eye, Download, Filter } from "lucide-react";

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const mediaCategories = [
    { id: 'all', name: 'Tous', icon: '📱' },
    { id: 'sermons', name: 'Prédications', icon: '📖' },
    { id: 'worship', name: 'Louange', icon: '🎵' },
    { id: 'testimonies', name: 'Témoignages', icon: '❤️' },
    { id: 'events', name: 'Événements', icon: '🎉' },
    { id: 'teachings', name: 'Enseignements', icon: '🎓' }
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

  const videoContent = [
    {
      id: 1,
      title: "Donne-moi donc cette montagne",
      description: "Message d'ouverture de la semaine de jeûne et de prière 2025",
      thumbnail: "https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
      speaker: "Pst. Josué Romain KAZADI",
      date: "2024-12-15",
      duration: "45:30",
      views: "1.2K",
      category: "sermons",
      month: "2024-12"
    },
    {
      id: 2,
      title: "La Puissance de la Prière",
      description: "Enseignement sur l'importance de la prière dans la vie chrétienne",
      thumbnail: "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
      speaker: "Dr. David KATEBA",
      date: "2024-12-08",
      duration: "52:15",
      views: "890",
      category: "teachings",
      month: "2024-12"
    },
    {
      id: 3,
      title: "Témoignage de Guérison",
      description: "Témoignage puissant de guérison divine",
      thumbnail: "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
      speaker: "Sœur Marie",
      date: "2024-12-01",
      duration: "15:45",
      views: "567",
      category: "testimonies",
      month: "2024-12"
    },
    {
      id: 4,
      title: "Louange et Adoration",
      description: "Moment de louange avec le Groupe ARCO",
      thumbnail: "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
      speaker: "Groupe ARCO",
      date: "2024-11-24",
      duration: "35:20",
      views: "1.5K",
      category: "worship",
      month: "2024-11"
    },
    {
      id: 5,
      title: "Excursion des Couples",
      description: "Moments forts de l'excursion pour couples",
      thumbnail: "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
      speaker: "Équipe Pastorale",
      date: "2024-11-21",
      duration: "28:10",
      views: "743",
      category: "events",
      month: "2024-11"
    },
    {
      id: 6,
      title: "La Foi qui Déplace les Montagnes",
      description: "Prédication sur la foi et les miracles",
      thumbnail: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
      speaker: "Pst. Richard MUKENDI",
      date: "2024-11-17",
      duration: "41:25",
      views: "1.1K",
      category: "sermons",
      month: "2024-11"
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: "Culte Dominical",
      images: [
        "https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85"
      ],
      count: 12
    },
    {
      id: 2,
      title: "Jeûne et Prière",
      images: [
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg",
        "https://images.pexels.com/photos/15689010/pexels-photo-15689010.jpeg",
        "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
      ],
      count: 8
    },
    {
      id: 3,
      title: "Activités Communautaires",
      images: [
        "https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg"
      ],
      count: 15
    }
  ];

  const filteredVideos = videoContent.filter(video => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85')`
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
            Médias & Ressources
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Sermons, témoignages et moments forts de notre communauté
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {mediaCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Filter */}
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {months.map(month => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Content */}
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
              Vidéos & Messages
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez nos prédications et enseignements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.speaker}</span>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {new Date(video.date).toLocaleDateString('fr-FR')}
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

      {/* Photo Gallery */}
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
              Galerie Photo
            </h2>
            <p className="text-xl text-gray-600">
              Moments forts et souvenirs de notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoGallery.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-2 gap-1 h-48">
                  <img
                    src={album.images[0]}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="grid grid-rows-2 gap-1">
                    <img
                      src={album.images[1]}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="relative">
                      <img
                        src={album.images[2]}
                        alt={album.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold">
                        +{album.count - 3}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {album.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {album.count} photos
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Voir l'album
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Chaîne YouTube
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Abonnez-vous à notre chaîne YouTube pour ne rater aucun de nos contenus
            </p>
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                @LaconqueteEEC
              </h3>
              <p className="text-gray-600 mb-6">
                Suivez-nous sur YouTube pour tous nos contenus vidéo
              </p>
              <a
                href="https://www.youtube.com/@LaconqueteEEC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Visiter notre chaîne
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;