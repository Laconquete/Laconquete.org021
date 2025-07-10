import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, BookOpen, Calendar, Star, Shield, Crown, Target, CheckCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Pastors data with the provided photos and social media
  const pastors = [
    {
      name: "Pasteur Josué Romain KAZADI",
      role: "Pasteur Principal & Visionnaire",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Pasteur visionnaire, fondateur de l'église, guide spirituel de la communauté.",
      quote: "La conquête des âmes est notre mission première.",
      socialMedia: {
        facebook: "https://web.facebook.com/?_rdc=1&_rdr",
        instagram: "https://www.instagram.com/laconquete_eec/",
        youtube: "https://www.youtube.com/@LaconqueteEEC",
        whatsapp: "https://wa.me/243997030259"
      }
    },
    {
      name: "Dr. David KATEBA",
      role: "1er Pasteur Assistant",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Docteur en théologie, responsable de l'enseignement et de la formation.",
      quote: "L'enseignement de la Parole transforme les vies.",
      socialMedia: {
        facebook: "https://web.facebook.com/?_rdc=1&_rdr",
        instagram: "https://www.instagram.com/laconquete_eec/",
        youtube: "https://www.youtube.com/@LaconqueteEEC",
        whatsapp: "https://wa.me/243814065815"
      }
    },
    {
      name: "Pasteur Richard MUKENDI",
      role: "2e Pasteur Assistant",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Pasteur dévoué à l'accompagnement pastoral et aux visites.",
      quote: "Servir avec amour et compassion.",
      socialMedia: {
        facebook: "https://web.facebook.com/?_rdc=1&_rdr",
        instagram: "https://www.instagram.com/laconquete_eec/",
        youtube: "https://www.youtube.com/@LaconqueteEEC",
        whatsapp: "https://wa.me/243997030259"
      }
    }
  ];

  // Nos valeurs alignées avec la vision et mission
  const valeurs = [
    {
      title: "Conquête des Âmes",
      description: "Évangélisation et transformation des vies par l'amour de Christ",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Formation Biblique",
      description: "Équiper et instruire les membres dans la Parole de Dieu",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Envoi Missionnaire",
      description: "Envoyer les membres comme agents de transformation",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Conquête des Terres",
      description: "Motiver nos membres pour l'expansion du Royaume",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "Unité Communautaire",
      description: "Vivre dans l'unité et la communion fraternelle",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      title: "Excellence Spirituelle",
      description: "Rechercher l'excellence dans tout ce que nous entreprenons",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-black/60"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-6xl px-6"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 hero-title text-shadow"
            variants={fadeInUp}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            La Conquête des Âmes
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-4 hero-subtitle text-shadow"
            variants={fadeInUp}
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            La conquête des terres
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Une église évangélique dédiée à la transformation des vies par l'Évangile de Jésus-Christ
          </motion.p>
          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
            variants={fadeInUp}
          >
            <Link 
              to="/about" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                Découvrir Notre Mission
                <Heart className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Nous Rejoindre
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Notre Vision & Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 ml-4">Notre Vision</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-xl font-semibold text-blue-700 mb-4">
                  "La Conquête des âmes et des terres est notre raison d'être en tant qu'église."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous croyons fermement que chaque âme a de la valeur aux yeux de Dieu, 
                  et notre vision est d'atteindre le plus grand nombre possible de personnes 
                  avec l'amour transformateur de Jésus-Christ dans toutes les nations.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 ml-4">Notre Mission</h3>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  "Nous œuvrons au moyen de la Parole de Dieu, à gagner les âmes pour Jésus. 
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

      {/* Welcome Message with Pastor Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-8" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Message de Bienvenue
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Pastor Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={pastors[0].image}
                      alt="Pasteur Josué Romain KAZADI"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white font-bold text-lg mb-1">
                        Pasteur Josué Romain KAZADI
                      </h3>
                      <p className="text-blue-200 text-sm">
                        Pasteur Principal & Visionnaire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/95 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "C'est avec une grande joie que nous vous accueillons aujourd'hui dans notre église. 
                  Nous espérons que votre expérience ici vous inspirera à revenir et, si Dieu le permet, 
                  à rejoindre définitivement notre communauté."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "Notre message est simple et puissant : Jésus-Christ, mort pour nos péchés et ressuscité 
                  pour notre justification, est la réponse de Dieu à tous nos besoins. Il est notre espoir 
                  et notre solution en toutes circonstances."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "Nous sommes à votre disposition pour écouter vos requêtes, vous accompagner et 
                  vous encadrer dans votre marche avec le Seigneur."
                </p>
                <div className="text-right border-t pt-4">
                  <span className="text-blue-600 font-semibold text-lg">- Pasteur Josué Romain KAZADI</span>
                  <p className="text-gray-500 text-sm">Pasteur Principal & Visionnaire</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Pastors Section with Social Media */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Nos Pasteurs
            </h2>
            <p className="text-xl text-gray-600">
              Serviteurs dévoués à la mission de l'église
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastors.map((pastor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={pastor.image}
                      alt={pastor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold mb-2">
                        {pastor.role}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {pastor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {pastor.bio}
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-r-lg mb-4">
                      <p className="italic text-gray-700 font-medium">
                        "{pastor.quote}"
                      </p>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Suivez-nous :</p>
                      <div className="flex space-x-3">
                        <a
                          href={pastor.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                        >
                          <FaFacebook className="text-white text-sm" />
                        </a>
                        <a
                          href={pastor.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                        >
                          <FaInstagram className="text-white text-sm" />
                        </a>
                        <a
                          href={pastor.socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                        >
                          <FaYoutube className="text-white text-sm" />
                        </a>
                        <a
                          href={pastor.socialMedia.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                        >
                          <FaWhatsapp className="text-white text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs - Alignées avec Vision & Mission */}
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
              <Shield className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-5xl font-bold" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Nos Valeurs</h2>
            </div>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre communauté, alignés avec notre vision et mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${valeur.gradient} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  {valeur.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{valeur.title}</h3>
                <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
                <div className="mt-4 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Explorez Notre Communauté
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos différents ministères et activités
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Notre Mission",
                description: "Découvrez notre vision et nos valeurs",
                link: "/about",
                gradient: "from-red-500 to-pink-600"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Activités",
                description: "Programme hebdomadaire et événements",
                link: "/activities",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Départements",
                description: "Rejoignez un ministère",
                link: "/departments",
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Médias",
                description: "Sermons et galerie photo",
                link: "/media",
                gradient: "from-orange-500 to-yellow-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={item.link}
                  className="block bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-4 rounded-full glass-effect mb-6">
                <Crown className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-shadow">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Venez vivre une expérience spirituelle authentique avec nous
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center">
                  Nous Contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link
                to="/donate"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Faire un Don
                  <Heart className="w-5 h-5 ml-2" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;