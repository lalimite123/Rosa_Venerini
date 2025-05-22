import React from 'react';
import Layout from '../components/Layout';

const Cameroun: React.FC = () => {
  return (
    <Layout>
      {/* Page Title Section */}
      <div className="bg-cover bg-center h-64 flex items-end pt-16" style={{ backgroundImage: "url('/images/hero.jpg')", backgroundPosition: "center 30%" }}>
        <div className="container-custom pb-6">
          <h1 className="text-3xl font-bold text-white">Cameroun</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom">
          <p className="text-sm">
            <a href="/" className="text-primary hover:text-secondary">Accueil</a> &gt; Cameroun
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-6 rounded-md">
            <h2 className="text-xl font-bold text-primary mb-4">PRÉSENCE AU CAMEROUN</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p className="text-base mb-4">
                  Les sœurs de Rosa Venerini sont présentes au Cameroun depuis 1965. La première communauté a été établie à Yaoundé,
                  la capitale du pays, avec l'objectif de promouvoir l'éducation et la santé des jeunes filles et des femmes.
                </p>

                <h3 className="font-bold mb-3">ACTIVITÉS</h3>
                <p className="text-base mb-4">
                  Les sœurs de Rosa Venerini au Cameroun sont engagées dans plusieurs activités :
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Éducation :</strong> Les sœurs gèrent plusieurs écoles primaires et secondaires à Yaoundé et dans
                    d'autres régions du pays. Elles offrent une éducation de qualité aux jeunes filles et aux garçons, avec un
                    accent sur la formation morale et religieuse.
                  </li>
                  <li>
                    <strong>Santé :</strong> Les sœurs gèrent un hôpital et plusieurs dispensaires à Yaoundé et dans d'autres
                    régions du pays. Elles offrent des soins de santé de qualité aux personnes défavorisées, en particulier aux
                    femmes et aux enfants.
                  </li>
                  <li>
                    <strong>Formation professionnelle :</strong> Les sœurs offrent des programmes de formation professionnelle
                    aux jeunes filles et aux femmes, dans des domaines tels que la couture, la cuisine, la gestion d'entreprise, etc.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                {/* Image placeholder - would be replaced with actual image */}
                <div className="w-48 h-64 bg-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">NOS COMMUNAUTÉS AU CAMEROUN</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Yaoundé</h3>
              <p className="text-base mb-4">
                La communauté de Yaoundé est la plus grande et la plus ancienne des communautés des sœurs de Rosa Venerini
                au Cameroun. Elle est située dans le quartier de Mvog-Ada.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Douala</h3>
              <p className="text-base mb-4">
                La communauté de Douala est située dans le quartier de Bonabéri.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Bafoussam</h3>
              <p className="text-base mb-4">
                La communauté de Bafoussam est située dans le quartier de la Cathédrale.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Ebolowa</h3>
              <p className="text-base mb-4">
                La communauté d'Ebolowa est située dans le quartier de la Mission.
              </p>
            </div>
          </div>
        </section>

        {/* Ebolowa Community Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">FOCUS SUR LA COMMUNAUTÉ D'EBOLOWA</h2>

          <div className="bg-gray-50 p-6 rounded-md mb-6">
            <h3 className="font-bold text-lg mb-3">Localisation</h3>
            <p className="text-base mb-4">
              La communauté des sœurs de Rosa Venerini à Ebolowa a été établie en 1985. Elle est située à Ebolowa, dans la région
              du Sud au Cameroun. Plus précisément, elle est située dans le quartier de Mvog-Ebanda, qui est l'un des quartiers
              les plus peuplés de la ville.
            </p>
            <p className="text-base mb-4">
              La communauté est située à proximité de la route nationale N°3, qui relie Ebolowa à Yaoundé, la capitale du Cameroun.
              Elle est également à proximité de plusieurs écoles, églises et commerces, ce qui en fait un emplacement idéal pour
              les activités de la communauté.
            </p>
            <p className="text-base mb-4">
              Le quartier de Mvog-Ebanda est un quartier résidentiel avec des maisons individuelles et des immeubles d'appartements.
              Il est équipé de plusieurs infrastructures de base, telles que des écoles, des dispensaires et des marchés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Activités</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini à Ebolowa sont engagées dans plusieurs activités :
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <strong>Éducation :</strong> Les sœurs gèrent une école primaire et secondaire pour les jeunes filles et les garçons.
                  Elles offrent une éducation de qualité, avec un accent sur la formation morale et religieuse.
                </li>
                <li>
                  <strong>Santé :</strong> Les sœurs gèrent un dispensaire pour les personnes défavorisées. Elles offrent des soins
                  de santé de qualité, notamment pour les femmes et les enfants.
                </li>
                <li>
                  <strong>Formation professionnelle :</strong> Les sœurs offrent des programmes de formation professionnelle pour
                  les jeunes filles et les femmes, dans des domaines tels que la couture, la cuisine, la gestion d'entreprise, etc.
                </li>
                <li>
                  <strong>Aide aux personnes âgées :</strong> Les sœurs offrent une aide aux personnes âgées et isolées de la région.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Projets</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini à Ebolowa ont plusieurs projets en cours :
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  <strong>Construction d'un nouveau bâtiment pour l'école :</strong> Les sœurs sont en train de construire un nouveau
                  bâtiment pour l'école, qui permettra d'accueillir plus d'élèves et d'offrir des conditions d'apprentissage meilleures.
                </li>
                <li>
                  <strong>Création d'un centre de formation professionnelle :</strong> Les sœurs sont en train de créer un centre
                  de formation professionnelle pour les jeunes filles et les femmes, qui leur permettra d'acquérir des compétences
                  et de trouver un emploi.
                </li>
                <li>
                  <strong>Développement d'un programme d'aide aux personnes âgées :</strong> Les sœurs sont en train de développer un
                  programme d'aide aux personnes âgées et isolées de la région, qui leur permettra de recevoir une aide et un soutien réguliers.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">NOS SLOGANS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary text-white p-6 rounded-md text-center">
              <h3 className="font-bold text-lg mb-3">"Éduquer pour sauver"</h3>
              <p className="text-base">
                Ce slogan reflète la mission des sœurs de Rosa Venerini de promouvoir l'éducation et la formation des jeunes filles
                et des femmes, afin de les aider à atteindre leur plein potentiel et à améliorer leur qualité de vie.
              </p>
            </div>

            <div className="bg-secondary text-white p-6 rounded-md text-center">
              <h3 className="font-bold text-lg mb-3">"Former pour servir"</h3>
              <p className="text-base">
                Ce slogan met en avant l'importance de la formation et de l'éducation pour servir les autres et faire une différence
                positive dans la société.
              </p>
            </div>

            <div className="bg-secondary text-white p-6 rounded-md text-center">
              <h3 className="font-bold text-lg mb-3">"Aimer pour donner"</h3>
              <p className="text-base">
                Ce slogan reflète la valeur de la charité et de l'amour que les sœurs de Rosa Venerini cherchent à promouvoir,
                en donnant de leur temps, de leur énergie et de leurs ressources pour aider les autres.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">NOS VALEURS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Charité et compassion</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini cherchent à promouvoir la charité et la compassion envers les autres,
                en donnant de leur temps, de leur énergie et de leurs ressources pour aider les autres.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Éducation et formation</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini cherchent à promouvoir l'éducation et la formation des jeunes filles et des femmes,
                pour les aider à atteindre leur plein potentiel et à améliorer leur qualité de vie.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Service et dévouement</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini cherchent à promouvoir le service et le dévouement envers les autres,
                en donnant de leur temps et de leur énergie pour aider les autres.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-lg mb-3">Respect et dignité</h3>
              <p className="text-base mb-4">
                Les sœurs de Rosa Venerini cherchent à promouvoir le respect et la dignité envers les autres,
                en traitant les autres avec respect et dignité.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cameroun;
