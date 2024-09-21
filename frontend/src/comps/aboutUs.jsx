import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#E6F2F4] p-8">
      {/* Header Section */}
      <header className="text-center mb-8 bg-[#81CEEB] py-12">
        <h1
          className="text-5xl font-bold text-black"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          About Us
        </h1>
        <p className="text-lg text-black mt-4 max-w-2xl mx-auto">
          Connecting students, faculty, and alumni in a dynamic platform
          designed for collaboration and growth.
        </p>
      </header>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to foster a vibrant academic community where students,
          faculty, and alumni can seamlessly collaborate, share knowledge, and
          contribute to one another's growth. This platform serves as a bridge,
          bringing together the energy of students, the expertise of faculty,
          and the experience of alumni to create an enriched learning
          environment.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What We Do
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide a social media platform tailored to the needs of academic
          collaboration. Through this platform, students can connect with their
          peers for project work, study groups, or co-curricular activities.
          Faculty can share insights, updates, and research opportunities, while
          alumni can contribute their industry knowledge and mentor current
          students, fostering a community of support and collaboration.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Why Choose Us
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            **Seamless Communication**: Stay connected with your peers, faculty,
            and alumni through messaging, forums, and group discussions.
          </li>
          <li className="mb-2">
            **Collaboration Opportunities**: Engage in collaborative projects,
            find research partners, and share resources easily.
          </li>
          <li className="mb-2">
            **Career Growth**: Leverage alumni insights for career guidance,
            internships, and job opportunities.
          </li>
          <li className="mb-2">
            **Real-Time Updates**: Stay informed with academic updates,
            announcements, and upcoming events within your community.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a world where academic boundaries dissolve and
          collaborative learning thrives. By bridging the gap between current
          students, esteemed faculty, and accomplished alumni, we aim to create
          a network of lifelong learning and professional development. Together,
          we can shape the future of education and innovation.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Ojas Patrikar
            </h3>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Shrey Nagda</h3>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Sapna Mishra
            </h3>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Pritam Ninganaik
            </h3>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Chinmayee Sadalgekar
            </h3>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Aryan Pardeshi
            </h3>
          </div>

          {/* Add more team members here */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
