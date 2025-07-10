import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      info: "520, Avenue N'Djamena, À côté de la Cour d'Ordre Militaire",
      subInfo: "Haut-Katanga, République Démocratique du Congo",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphones",
      info: "+243 997 030 259",
      subInfo: "+243 814 065 815",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires de Service",
      info: "Lundi - Samedi : 06h00 - 08h30",
      subInfo: "Dimanche : 08h00 - 11h00",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Réseaux Sociaux",
      info: "@laconquete_eec",
      subInfo: "@LaconqueteEEC",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const scheduleItems = [
    {
      day: "Lundi - Samedi",
      time: "06h00 - 08h30",
      activity: "Dévotion Matinale",
      description: "Temps de prière et méditation"
    },
    {
      day: "Mercredi",
      time: "16h30 - 18h30",
      activity: "Enseignements Bibliques",
      description: "Étude approfondie de la Parole"
    },
    {
      day: "Vendredi",
      time: "16h00 - 18h30",
      activity: "Jeûne et Prière",
      description: "Temps de jeûne et intercession"
    },
    {
      day: "Dimanche",
      time: "08h00 - 11h00",
      activity: "Culte Dominical",
      description: "Culte principal avec louange"
    }
  ];

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
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Nous sommes là pour vous écouter et vous accompagner
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
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
              Informations de Contact
            </h2>
            <p className="text-xl text-gray-600">
              Plusieurs façons de nous joindre
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-2 font-semibold">
                  {info.info}
                </p>
                <p className="text-gray-500 text-sm">
                  {info.subInfo}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Envoyez-nous un Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre nom complet"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre adresse email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="prayer">Demande de prière</option>
                      <option value="counseling">Conseil pastoral</option>
                      <option value="baptism">Baptême</option>
                      <option value="marriage">Mariage</option>
                      <option value="department">Rejoindre un département</option>
                      <option value="visit">Visite pastorale</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Notre Localisation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    520, Avenue N'Djamena, À côté de la Cour d'Ordre Militaire
                  </p>
                </div>
                
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.123456789!2d27.479882!3d-11.659649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzM0LjciUyAyN8KwMjgnNDcuNiJF!5e0!3m2!1sfr!2scd!4v1640995200000!5m2!1sfr!2scd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Église Évangélique La Conquête"
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <a
                    href="https://maps.app.goo.gl/9KMSfxUM2yxew53PA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Voir dans Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Horaires des Services
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez-nous pour nos activités hebdomadaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {item.day}
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.activity}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Quick Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Suivez-nous & Contactez-nous
            </h2>
            <p className="text-xl text-gray-600">
              Restez connectés avec notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Réseaux Sociaux
              </h3>
              <div className="space-y-4">
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FaFacebook className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/laconquete_eec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                >
                  <FaInstagram className="text-pink-600 w-6 h-6" />
                  <span className="text-gray-700">@laconquete_eec</span>
                </a>
                <a
                  href="https://www.youtube.com/@LaconqueteEEC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <FaYoutube className="text-red-600 w-6 h-6" />
                  <span className="text-gray-700">@LaconqueteEEC</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Contact Rapide
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+243997030259"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Phone className="text-green-600 w-6 h-6" />
                  <span className="text-gray-700">+243 997 030 259</span>
                </a>
                <a
                  href="tel:+243814065815"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <Phone className="text-green-600 w-6 h-6" />
                  <span className="text-gray-700">+243 814 065 815</span>
                </a>
                <a
                  href="https://wa.me/243997030259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <FaWhatsapp className="text-green-600 w-6 h-6" />
                  <span className="text-gray-700">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;