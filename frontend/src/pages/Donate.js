import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Smartphone, DollarSign, Gift, Users, Church, BookOpen } from "lucide-react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const donationCategories = [
    {
      id: 'general',
      name: 'Don Général',
      description: 'Soutien général aux activités de l\'église',
      icon: <Church className="w-8 h-8" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'construction',
      name: 'Construction',
      description: 'Projet de construction et rénovation',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'missions',
      name: 'Missions',
      description: 'Soutien aux missions et évangélisation',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-red-50 border-red-200'
    },
    {
      id: 'education',
      name: 'Éducation',
      description: 'Formation biblique et éducation',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'social',
      name: 'Œuvres Sociales',
      description: 'Aide aux nécessiteux et œuvres caritatives',
      icon: <Gift className="w-8 h-8" />,
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const paymentMethods = [
    {
      id: 'mobile_money',
      name: 'Mobile Money',
      description: 'Airtel Money, Orange Money, Vodacom M-Pesa',
      icon: <Smartphone className="w-6 h-6" />,
      numbers: ['+243 997 030 259', '+243 814 065 815']
    },
    {
      id: 'bank_transfer',
      name: 'Virement Bancaire',
      description: 'Transfert bancaire direct',
      icon: <CreditCard className="w-6 h-6" />,
      details: 'Contactez-nous pour les détails bancaires'
    },
    {
      id: 'cash',
      name: 'Don en Espèces',
      description: 'Remise directe à l\'église',
      icon: <DollarSign className="w-6 h-6" />,
      details: 'Remise directe pendant les services'
    }
  ];

  const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const handleInputChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    
    if (!donationAmount || !paymentMethod) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const selectedPayment = paymentMethods.find(method => method.id === paymentMethod);
    
    if (paymentMethod === 'mobile_money') {
      const message = `Merci pour votre don de ${donationAmount} CDF pour ${donationCategories.find(cat => cat.id === donationType)?.name}. Veuillez envoyer votre don via Mobile Money aux numéros: ${selectedPayment.numbers.join(' ou ')}`;
      alert(message);
    } else if (paymentMethod === 'bank_transfer') {
      alert('Merci pour votre intention de don. Nous vous contacterons avec les détails bancaires.');
    } else {
      alert('Merci pour votre don. Vous pouvez le remettre directement à l\'église pendant les services.');
    }
    
    // Reset form
    setDonationAmount('');
    setDonationType('general');
    setPaymentMethod('');
    setDonorInfo({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
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
            backgroundImage: `url('https://images.unsplash.com/photo-1634261952340-0e3d61bf1dc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2h8ZW58MHx8fGJsdWV8MTc1MjE3ODE3NXww&ixlib=rb-4.1.0&q=85')`
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
            Faire un Don
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Participez à l'œuvre de Dieu par vos dons et offrandes
          </p>
        </motion.div>
      </section>

      {/* Bible Verse */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-light text-blue-800 mb-4">
              "Donnez, et il vous sera donné : on versera dans votre sein une bonne mesure, 
              serrée, secouée et qui déborde"
            </blockquote>
            <cite className="text-lg text-blue-600 font-semibold">
              - Luc 6:38
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Donation Categories */}
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
              Catégories de Don
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez la cause qui vous tient à cœur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {donationCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${category.color} border-2 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  donationType === category.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setDonationType(category.id)}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Formulaire de Don
              </h3>
              
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                {/* Preset Amounts */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Montant suggéré (CDF)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                          donationAmount === amount.toString()
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {amount.toLocaleString()} CDF
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Montant personnalisé (CDF) *
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Entrez le montant"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Mode de paiement *
                  </label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600">
                            {method.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {method.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                            {method.numbers && (
                              <p className="text-sm text-blue-600 mt-1">
                                {method.numbers.join(' • ')}
                              </p>
                            )}
                            {method.details && (
                              <p className="text-sm text-gray-500 mt-1">
                                {method.details}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Informations du donateur (optionnel)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={donorInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={donorInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={donorInfo.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre message ou intention de prière..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Procéder au don
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
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
              Impact de Vos Dons
            </h2>
            <p className="text-xl text-gray-600">
              Voici comment vos dons transforment des vies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Familles Soutenues",
                description: "Aide aux familles nécessiteuses de notre communauté",
                impact: "50+ familles aidées chaque mois"
              },
              {
                icon: "🏗️",
                title: "Infrastructure",
                description: "Amélioration et maintenance des installations",
                impact: "Rénovations et équipements modernes"
              },
              {
                icon: "📚",
                title: "Formation",
                description: "Programmes de formation et d'éducation biblique",
                impact: "100+ personnes formées annuellement"
              },
              {
                icon: "🌍",
                title: "Missions",
                description: "Évangélisation et implantation d'églises",
                impact: "Expansion dans 5 nouvelles régions"
              },
              {
                icon: "🍞",
                title: "Œuvres Sociales",
                description: "Aide alimentaire et soutien médical",
                impact: "Distribution hebdomadaire de vivres"
              },
              {
                icon: "🎵",
                title: "Ministères",
                description: "Équipement des différents départements",
                impact: "Instruments et matériel moderne"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-600">
                    {item.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Questions sur les Dons ?
            </h2>
            <p className="text-xl mb-8">
              Contactez-nous pour plus d'informations sur les dons et offrandes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Téléphone</h3>
                <p className="mb-2">+243 997 030 259</p>
                <p>+243 814 065 815</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">WhatsApp</h3>
                <a
                  href="https://wa.me/243997030259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-100 transition-colors"
                >
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;