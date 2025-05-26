import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  // Variantes d'animation pour les éléments de la page
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout>
      {/* Page Title Section */}
      <div className="bg-cover bg-center h-64 flex items-end pt-16" style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "center 30%" }}>
        <div className="container-custom pb-6">
          <h1 className="text-3xl font-bold text-white">Contact</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom">
          <p className="text-sm">
            <a href="/" className="text-primary hover:text-secondary">Accueil</a> &gt; Contact
          </p>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="container-custom py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction Section */}
        <motion.section className="mb-12" variants={itemVariants}>
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">CONTACTEZ-NOUS</h2>
            <p className="text-base mb-6">
              Nous sommes à votre disposition pour répondre à vos questions et vous fournir plus d'informations sur nos activités.
              N'hésitez pas à nous contacter par téléphone, email ou en utilisant le formulaire ci-dessous.
            </p>
          </div>
        </motion.section>

        {/* Contact Information and Form */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={itemVariants}>
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">INFORMATIONS DE CONTACT</h2>
            
            <div className="bg-gray-50 p-6 rounded-md mb-6">
              <h3 className="font-bold text-lg mb-3">Bureau de Développement</h3>
              <p className="flex items-start mb-3">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                <span>YAOUNDE CAMEROUN</span>
              </p>
              <p className="flex items-start mb-3">
                <i className="fas fa-phone text-primary mr-3 mt-1"></i>
                <span>00237692196785<br />00237654872652</span>
              </p>
              <p className="flex items-start mb-3">
                <i className="fas fa-envelope text-primary mr-3 mt-1"></i>
                <span>Missionrosaveneriniebolowa@gmail.com</span>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Heures d'ouverture</h3>
              <p className="mb-2"><strong>Lundi - Vendredi:</strong> 8h00 - 16h00</p>
              <p><strong>Samedi:</strong> 9h00 - 12h00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">FORMULAIRE DE CONTACT</h2>
            
            <form className="bg-gray-50 p-6 rounded-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-primary mb-6">NOTRE LOCALISATION</h2>
          <div className="bg-gray-200 h-96 rounded-md flex items-center justify-center">
            {/* Placeholder for Google Maps - In a real implementation, you would add the Google Maps iframe or component here */}
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-4xl text-primary mb-3"></i>
              <p>Carte Google Maps sera intégrée ici</p>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-primary mb-6">QUESTIONS FRÉQUENTES</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-2">Comment puis-je faire un don à la congrégation?</h3>
              <p>Vous pouvez faire un don en contactant directement notre bureau de développement. Nous acceptons les dons par virement bancaire, chèque ou en espèces.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-2">Comment puis-je devenir bénévole?</h3>
              <p>Nous accueillons toujours des bénévoles pour nous aider dans nos différentes activités. Veuillez nous contacter par téléphone ou email pour discuter des opportunités de bénévolat disponibles.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-2">Quels sont les horaires des services religieux?</h3>
              <p>Les horaires des services religieux varient selon les communautés. Veuillez contacter la communauté spécifique pour obtenir les horaires actuels.</p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

export default Contact;