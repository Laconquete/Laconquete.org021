import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, BookOpen, Calendar } from "lucide-react";

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

  // Pastors data with the provided photos
  const pastors = [
    {
      name: "Pasteur Josué Romain KAZADI",
      role: "Pasteur Principal & Visionnaire",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Pasteur visionnaire, fondateur de l'église, guide spirituel de la communauté.",
      quote: "La conquête des âmes est notre mission première."
    },
    {
      name: "Dr. David KATEBA",
      role: "1er Pasteur Assistant",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Docteur en théologie, responsable de l'enseignement et de la formation.",
      quote: "L'enseignement de la Parole transforme les vies."
    },
    {
      name: "Pasteur Richard MUKENDI",
      role: "2e Pasteur Assistant",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAxQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z",
      bio: "Pasteur dévoué à l'accompagnement pastoral et aux visites.",
      quote: "Servir avec amour et compassion."
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl px-6"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 hero-title text-shadow"
            variants={fadeInUp}
          >
            La Conquête des Âmes
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 hero-subtitle text-shadow"
            variants={fadeInUp}
          >
            La conquête des terres
          </motion.p>
          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
            variants={fadeInUp}
          >
            <Link 
              to="/about" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir Notre Mission
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Nous Rejoindre
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Message de Bienvenue
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
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
              <p className="text-lg text-gray-700 leading-relaxed">
                "Nous sommes à votre disposition pour écouter vos requêtes, vous accompagner et 
                vous encadrer dans votre marche avec le Seigneur."
              </p>
              <div className="mt-6 text-right">
                <span className="text-blue-600 font-semibold">- Pasteur Josué Romain KAZADI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pastors Section */}
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 w-full h-80 bg-gray-200">
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {pastor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {pastor.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {pastor.bio}
                  </p>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="italic text-gray-700">
                      "{pastor.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
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
                color: "bg-blue-600"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Activités",
                description: "Programme hebdomadaire et événements",
                link: "/activities",
                color: "bg-green-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Départements",
                description: "Rejoignez un ministère",
                link: "/departments",
                color: "bg-purple-600"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Médias",
                description: "Sermons et galerie photo",
                link: "/media",
                color: "bg-orange-600"
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
                  className="block bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-xl mb-8">
              Venez vivre une expérience spirituelle authentique avec nous
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Nous Contacter
              </Link>
              <Link
                to="/donate"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Faire un Don
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;