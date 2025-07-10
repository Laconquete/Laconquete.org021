import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, History, Users } from "lucide-react";

const About = () => {
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
            backgroundImage: `url('https://images.unsplash.com/photo-1636228492584-fb485ee36af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85')`
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
            À Propos de Notre Église
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Découvrez notre histoire, notre mission et nos valeurs
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Notre Vision</h2>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-2xl font-semibold text-blue-600 mb-4">
                  "La conquête des âmes et des terres est notre raison d'être en tant qu'église."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous croyons fermement que chaque âme a de la valeur aux yeux de Dieu, 
                  et notre vision est d'atteindre le plus grand nombre possible de personnes 
                  avec l'amour transformateur de Jésus-Christ.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDB8fHxibHVlfDE3NTIxNzgxODN8MA&ixlib=rb-4.1.0&q=85"
                alt="Vision"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/10207025/pexels-photo-10207025.jpeg"
                alt="Mission"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 text-red-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Notre Mission</h2>
              </div>
              <div className="bg-red-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  "Nous œuvrons, au moyen de la Parole de Dieu, à gagner les âmes pour Jésus-Christ. 
                  Nous les équipons, les instruisons et les envoyons comme agents de transformation 
                  dans les nations."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Nous motivons et équipons également nos membres pour la conquête des terres, 
                  afin qu'ils deviennent des témoins efficaces dans leurs communautés et au-delà."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <History className="w-12 h-12 text-yellow-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Notre Histoire</h2>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-1/2 pr-8">
                  <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">21 Novembre 2004</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Fondation de l'Église</h4>
                    <p className="text-gray-700">
                      L'Église Évangélique La Conquête a été fondée par une poignée de croyants 
                      passionnés avec un seul objectif : servir Dieu, répandre l'Évangile, 
                      et vivre selon les principes bibliques.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-1/2 ml-auto pl-8">
                  <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-green-600 mb-3">2004 - Aujourd'hui</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Croissance Remarquable</h4>
                    <p className="text-gray-700">
                      Depuis ce moment initial, l'Église a connu une croissance spirituelle 
                      et communautaire remarquable, transformant des vies et marquant de 
                      nombreuses générations par la conquête.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center">
                <div className="bg-blue-600 w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-1/2 pr-8">
                  <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-3">Notre Héritage</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">20 Années de Fidélité</h4>
                    <p className="text-gray-700">
                      Aujourd'hui, nous continuons à porter la vision originale avec 
                      la même passion, guidés par l'Esprit Saint et unis dans la 
                      mission de conquête des âmes et des terres.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-800">Nos Valeurs</h2>
            </div>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Foi",
                description: "Une foi solide basée sur les Écritures saintes",
                icon: "📖",
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: "Amour",
                description: "L'amour de Dieu manifesté dans nos relations",
                icon: "❤️",
                color: "bg-red-50 border-red-200"
              },
              {
                title: "Unité",
                description: "L'unité dans la diversité de notre communauté",
                icon: "🤝",
                color: "bg-green-50 border-green-200"
              },
              {
                title: "Service",
                description: "Le service désintéressé envers Dieu et les autres",
                icon: "🙏",
                color: "bg-purple-50 border-purple-200"
              },
              {
                title: "Intégrité",
                description: "L'intégrité dans tous nos actes et paroles",
                icon: "⚖️",
                color: "bg-yellow-50 border-yellow-200"
              },
              {
                title: "Excellence",
                description: "L'excellence dans tout ce que nous entreprenons",
                icon: "⭐",
                color: "bg-indigo-50 border-indigo-200"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${value.color} p-6 rounded-lg border-2 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;