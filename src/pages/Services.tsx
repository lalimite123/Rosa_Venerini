import React from 'react';
import Layout from '../components/Layout';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Page Title Section */}
      <div className="bg-cover bg-center h-64 flex items-end pt-16" style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "center 30%" }}>
        <div className="container-custom pb-6">
          <h1 className="text-3xl font-bold text-white">Nos Services et Structures</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom">
          <p className="text-sm">
            <a href="/" className="text-primary hover:text-secondary">Accueil</a> &gt; Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">NOS SERVICES ET STRUCTURES</h2>
            <p className="text-base mb-6">
              Nous offrons une gamme complète de services pour accompagner les enfants, les jeunes et les personnes vulnérables
              dans leur développement. Notre détermination est de fournir des services de qualité qui favorisent l'apprentissage,
              la croissance personnelle, la santé et le bien-être.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">ÉDUCATION</h2>
          <p className="text-base mb-6">
            Nous offrons une gamme complète de services éducatifs pour accompagner les enfants et les jeunes dans leurs développements.
            Nous avons une détermination à fournir une éducation de qualité qui favorise l'apprentissage, la croissance personnelle et le succès.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Crèche</h3>
              <p className="text-base mb-4">
                Nous accueillons les tout-petits dans un environnement chaleureux et sécuritaire. Nos éducateurs qualifiés proposent
                des activités ludiques et éducatives pour favoriser le développement cognitif, moteur et social des enfants.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">École Primaire et Maternelle</h3>
              <p className="text-base mb-4">
                Nous offrons un programme éducatif complet qui couvre les matières fondamentales telles que la lecture, l'écriture,
                les mathématiques et les sciences. Nos enseignants expérimentés utilisent des méthodes pédagogiques innovantes,
                pour rendre l'apprentissage amusant et efficace.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Foyer des Filles (Internat)</h3>
              <p className="text-base mb-4">
                Nous offrons un espace sûr et accueillant où les jeunes filles peuvent vivre et étudier dans un environnement
                favorable à leur développement. Nous proposons des activités extra-scolaires et des programmes de mentorat.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Institut Technique</h3>
              <p className="text-base mb-4">
                Nous offrons des programmes de formations professionnelles dans divers domaines tels que l'industrie d'habillement (IH)
                et l'économie sociale et familiale (ESF) dans les sections anglophone et francophone.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-6 rounded-md">
            <h3 className="font-bold text-lg mb-3">Centre de Formation Professionnelle</h3>
            <p className="text-base mb-4">
              Notre centre offre des programmes de formation dans divers domaines, notamment :
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>
                <strong>Couture :</strong> Les étudiants apprennent les techniques de couture et de confection des vêtements.
              </li>
              <li>
                <strong>Hôtellerie/Décoration :</strong> Les étudiants apprennent les compétences nécessaires pour travailler
                dans l'industrie hôtelière et de décoration.
              </li>
              <li>
                <strong>Savonnerie :</strong> Les étudiants apprennent les techniques de fabrication de savon et de produits cosmétiques.
              </li>
              <li>
                <strong>Alphabétisation/Cas sociaux :</strong> Les étudiants apprennent les compétences nécessaires pour travailler
                avec des personnes défavorisées pour les aider à acquérir des compétences de base en lecture et en écriture.
              </li>
            </ul>
          </div>
        </section>

        {/* Health Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">SANTÉ</h2>
          <p className="text-base mb-6">
            Nous fournissons des services de santé de qualité pour améliorer la vie des personnes dans notre communauté.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Léproserie</h3>
              <p className="text-base mb-4">
                C'est un centre spécialisé qui offre des services de santé pour des personnes atteintes de lèpre.
                Nous fournissons des soins médicaux, des services de rééducation, des programmes d'éducation pour
                sensibiliser les patients.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Dispensaires</h3>
              <p className="text-base mb-4">
                Ce sont des centres de santé qui offrent des services de soins primaires pour les personnes de notre communauté.
                Nous fournissons des consultations médicales, des services de vaccination, des programmes de santé publique.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-12">
          <div className="bg-primary text-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Témoignage</h2>
            <blockquote className="text-lg italic">
              "Grâce à la formation professionnelle en couture que j'ai reçue chez les sœurs de Rosa Venerini,
              j'ai pu ouvrir ma propre boutique et subvenir aux besoins de ma famille. Je suis reconnaissante
              pour l'éducation et le soutien que j'ai reçus."
            </blockquote>
            <p className="text-right mt-4">- Marie, ancienne élève du centre de formation d'Ebolowa</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gray-50 p-6 rounded-md text-center">
            <h3 className="font-bold text-lg mb-3">Intéressé par nos services?</h3>
            <p className="text-base mb-4">
              Pour plus d'informations sur nos services et comment nous pouvons vous aider, n'hésitez pas à nous contacter.
            </p>
            <a href="/contact" className="btn-primary">
              Contactez-nous
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
