import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    motivation: ''
  });

  const departments = [
    {
      id: 1,
      name: "Louange",
      icon: "🎵",
      color: "bg-blue-50 border-blue-200",
      description: "Ministère de la musique et de la louange pour glorifier Dieu",
      groups: ["Groupe ARCO", "Chorale des Mamans (Miriame)", "Cano Vocal"],
      activities: [
        "Répétitions hebdomadaires",
        "Animation des cultes",
        "Concerts spirituels",
        "Formation musicale"
      ],
      responsible: "Équipe Pastorale",
      vision: "Conduire l'assemblée dans l'adoration et la louange authentique"
    },
    {
      id: 2,
      name: "Ecodime",
      icon: "🎓",
      color: "bg-green-50 border-green-200",
      description: "École Dominicale - Formation biblique pour tous les âges",
      groups: ["Enfants", "Adolescents", "Jeunes", "Adultes"],
      activities: [
        "Cours bibliques dominicaux",
        "Programmes d'évangélisation",
        "Formation de moniteurs",
        "Activités éducatives"
      ],
      responsible: "Équipe d'Enseignement",
      vision: "Équiper chaque membre dans la connaissance de la Parole de Dieu"
    },
    {
      id: 3,
      name: "Département des Sœurs",
      icon: "👩‍👩‍👧‍👧",
      color: "bg-pink-50 border-pink-200",
      description: "Ministère dédié aux femmes de l'église",
      groups: ["Femmes mariées", "Jeunes femmes", "Mamans"],
      activities: [
        "Réunions de prière",
        "Conférences féminines",
        "Œuvres sociales",
        "Mentorat spirituel"
      ],
      responsible: "Équipe Féminine",
      vision: "Édifier et autonomiser les femmes dans leur rôle biblique"
    },
    {
      id: 4,
      name: "Département des Papas",
      icon: "👨‍👨‍👦‍👦",
      color: "bg-indigo-50 border-indigo-200",
      description: "Ministère dédié aux hommes de l'église",
      groups: ["Hommes mariés", "Jeunes hommes", "Pères"],
      activities: [
        "Réunions d'hommes",
        "Retraites spirituelles",
        "Mentorat masculin",
        "Projets communautaires"
      ],
      responsible: "Équipe Masculine",
      vision: "Former des hommes selon le cœur de Dieu, leaders dans leurs foyers"
    },
    {
      id: 5,
      name: "Protocole",
      icon: "📋",
      color: "bg-yellow-50 border-yellow-200",
      description: "Organisation et coordination des événements",
      groups: ["Équipe d'accueil", "Coordination", "Logistique"],
      activities: [
        "Organisation d'événements",
        "Accueil des visiteurs",
        "Coordination des services",
        "Gestion logistique"
      ],
      responsible: "Équipe de Coordination",
      vision: "Assurer un service d'excellence dans l'organisation"
    },
    {
      id: 6,
      name: "Média et Communication",
      icon: "📱",
      color: "bg-purple-50 border-purple-200",
      description: "Diffusion et communication des activités",
      groups: ["Équipe technique", "Réseaux sociaux", "Communication"],
      activities: [
        "Diffusion des cultes",
        "Gestion des réseaux sociaux",
        "Communication interne",
        "Production multimédia"
      ],
      responsible: "Équipe Média",
      vision: "Étendre la portée de l'Évangile par les médias modernes"
    },
    {
      id: 7,
      name: "Les Anciens",
      icon: "👴",
      color: "bg-gray-50 border-gray-200",
      description: "Conseil des anciens de l'église",
      groups: ["Conseil pastoral", "Anciens", "Conseillers"],
      activities: [
        "Conseil pastoral",
        "Prise de décisions",
        "Mentorat spirituel",
        "Résolution de conflits"
      ],
      responsible: "Pasteur Principal",
      vision: "Gouverner l'église avec sagesse et dans la crainte de Dieu"
    },
    {
      id: 8,
      name: "Les Diacres",
      icon: "🤝",
      color: "bg-teal-50 border-teal-200",
      description: "Service diaconal et soutien pastoral",
      groups: ["Diacres", "Assistants", "Serviteurs"],
      activities: [
        "Assistance pastorale",
        "Visites aux malades",
        "Soutien aux nécessiteux",
        "Service pratique"
      ],
      responsible: "Équipe Diaconale",
      vision: "Servir l'église avec un cœur de serviteur"
    },
    {
      id: 9,
      name: "Social",
      icon: "❤️",
      color: "bg-red-50 border-red-200",
      description: "Œuvres sociales et soutien communautaire",
      groups: ["Aide humanitaire", "Soutien social", "Bénévoles"],
      activities: [
        "Aide aux nécessiteux",
        "Projets communautaires",
        "Assistance sociale",
        "Œuvres caritatives"
      ],
      responsible: "Équipe Sociale",
      vision: "Manifester l'amour de Dieu par l'action sociale"
    },
    {
      id: 10,
      name: "Propreté",
      icon: "🧹",
      color: "bg-emerald-50 border-emerald-200",
      description: "Entretien et maintenance des locaux",
      groups: ["Équipe d'entretien", "Maintenance", "Propreté"],
      activities: [
        "Entretien des locaux",
        "Maintenance préventive",
        "Aménagement",
        "Hygiène et salubrité"
      ],
      responsible: "Équipe d'Entretien",
      vision: "Maintenir la maison de Dieu dans un état exemplaire"
    },
    {
      id: 11,
      name: "Intercession",
      icon: "🕊️",
      color: "bg-sky-50 border-sky-200",
      description: "Ministère de la prière et de l'intercession",
      groups: ["Intercesseurs", "Prière", "Jeûne"],
      activities: [
        "Prières d'intercession",
        "Veillées de prière",
        "Jeûne et prière",
        "Prière pour les malades"
      ],
      responsible: "Équipe d'Intercession",
      vision: "Être un rempart de prière pour l'église et la nation"
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
            backgroundImage: `url('https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg')`
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
            Nos Départements
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Trouvez votre place dans le service de Dieu
          </p>
        </motion.div>
      </section>

      {/* Departments Grid */}
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
              Ministères & Départements
            </h2>
            <p className="text-xl text-gray-600">
              Chacun a une place dans le corps du Christ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${dept.color} border-2 rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setSelectedDepartment(dept)}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </div>
                
                {dept.groups && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Groupes :</p>
                    <div className="flex flex-wrap gap-1">
                      {dept.groups.map((group, idx) => (
                        <span key={idx} className="bg-white px-2 py-1 rounded text-xs text-gray-600">
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-center text-blue-600 font-semibold">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez un Département
            </h2>
            <p className="text-xl mb-8">
              Dieu a des dons pour chacun. Découvrez le vôtre en servant dans un de nos départements.
            </p>
            <button
              onClick={() => setShowJoinForm(true)}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Formulaire d'Adhésion
            </button>
          </motion.div>
        </div>
      </section>

      {/* Department Details Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{selectedDepartment.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedDepartment.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedDepartment(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedDepartment.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Vision</h3>
                  <p className="text-gray-600">{selectedDepartment.vision}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsable</h3>
                  <p className="text-gray-600">{selectedDepartment.responsible}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Activités</h3>
                  <ul className="space-y-1">
                    {selectedDepartment.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Groupes</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDepartment.groups?.map((group, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {group}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => {
                    setSelectedDepartment(null);
                    setShowJoinForm(true);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Rejoindre ce département
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Join Form Modal */}
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
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
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

export default Departments;