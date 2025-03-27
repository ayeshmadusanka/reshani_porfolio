import React from 'react';
import { Cog, Github, Linkedin, Mail, Phone, Award, Book, Code, Palette, TestTube, GraduationCap, Trophy, Star, Activity, Link } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 text-slate-800 font-serif">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full absolute bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center" />
        </div>
        
        <div className="z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 gap-12">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-purple-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img 
              src="https://i.ibb.co/84c5byCw/1000388915.jpg"
              alt="Reshani Dananjana"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Reshani Dananjana</h1>
            <h2 className="text-2xl mb-6 text-indigo-600">UI/UX Designer & Developer</h2>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="mailto:reshanidananjana70@gmail.com" className="text-purple-500 hover:text-pink-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+94775367680" className="text-purple-500 hover:text-pink-500 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-purple-500 hover:text-pink-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-indigo-600">
            <Book className="w-8 h-8" />
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            A dedicated final-year BSc (Hons) in Computer Science student at Wayamba University of Sri Lanka,
            eager to apply academic knowledge and gain practical experience through an internship. Passionate
            about contributing to innovative projects and expanding skills in a professional setting.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="space-y-8">
            <EducationCard
              institution="Wayamba University of Sri Lanka"
              degree="BSc (Hons) in Computer Science"
              duration="2020 - Present"
              details={["CGPA - 3.78"]}
            />
            <EducationCard
              institution="Newstead Girls' College, Negombo"
              degree="G.C.E. Advanced Level"
              duration="2018 - 2020"
              details={["Science Stream"]}
            />
            <EducationCard
              institution="St. Ann's College, Negombo"
              degree="G.C.E. Ordinary Level"
              duration="2015 - 2018"
              details={["Completed with Distinction"]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <Code className="w-8 h-8" />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategory title="Programming" skills={["Java", "Python", "HTML", "CSS", "Flutter"]} />
            <SkillCategory title="Design" skills={["Figma", "Adobe Photoshop", "Wireframing", "Prototyping"]} />
            <SkillCategory title="Testing & QA" skills={["Agile Testing", "Software Quality Assurance"]} />
            <SkillCategory title="Tools" skills={["VS Code", "Android Studio"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <Palette className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Sweet Food Mobile Application"
              description="Created the UI/UX design for a sweet food mobile application, focusing on an intuitive and visually appealing user experience."
              tools={["Figma"]}
              link="https://www.figma.com/proto/Al99nHxGF8zcDrney0tgAO/1st?node-id=52157"
            />
            <ProjectCard 
              title="SupMarket Web Application"
              description="Designed a comprehensive web application for supermarket management and customer interaction."
              tools={["Figma"]}
              link="https://www.figma.com/proto/0uNejtwmPFV5cvx6EoyNW8/Web-app?node-id=3-2"
            />
            <ProjectCard 
              title="Eco-Friendly Web Application"
              description="Developed a sustainable and eco-conscious web application design."
              tools={["Figma"]}
              link="https://www.figma.com/proto/g0LQFV9vzfyGUUS9ZSqyj7/Untitled?node-id=1-2"
            />
            <ProjectCard 
              title="Foodie Express Mobile Application"
              description="Created a user-friendly food delivery application design."
              tools={["Figma"]}
              link="https://www.figma.com/proto/aC8u67UP99jFrR88gbLYuV/Untitled?node-id=3-2"
            />
            <ProjectCard 
              title="Event Booking Dashboard"
              description="Designed an intuitive dashboard for event management and booking."
              tools={["Figma"]}
              link="https://www.figma.com/proto/fKm5GFYZy1YWYuVr5qbKdy/Untitled?node-id=2-2"
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <Trophy className="w-8 h-8" />
            Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AwardCard 
              title="Dean's List"
              details={["Level 02 (2023)", "Level 03 (2024)"]}
            />
            <AwardCard 
              title="Competitions"
              details={[
                "Second Place in Dancing & Ballet (2015)",
                "Second Place in Division level Mathematics Quiz (2014)",
                "First Place in Zonal level Mathematics Quiz (2014)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <Star className="w-8 h-8" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CertificationCard 
              title="Professional Development"
              certifications={[
                "Course 'Agile Testing' by Ash Coleman | LinkedIn",
                "Course 'Programming Foundations: Software Testing/QA' | LinkedIn",
                "UI UX App Design with Figma Course | Udemy",
                "Digital Skill: User Experience Course | Accenture"
              ]}
            />
            <CertificationCard 
              title="Additional Qualifications"
              certifications={[
                "UI UX beginners Course | Great Learning",
                "Diploma in Information Technology | ESOFT",
                "Graphic Design & Text typing Course | DIGITEC",
                "Intermediate Level of the Aquinas English Diploma | BCI"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-indigo-600">
            <Activity className="w-8 h-8" />
            Extracurricular Activities
          </h2>
          <div className="space-y-6">
            <ActivityCard 
              activities={[
                "Member of Wayaexplorers (WUSL) - Present",
                "Participated in BITCODE (RUSL) - 2024",
                "Excellence Performance in Enigma Trials V 4.0 (WUSL) - 2024",
                "Excellence Performance in Enigma Trials V 3.0 (WUSL) - 2023"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-purple-50 to-pink-50 text-center">
        <p className="text-slate-600">© 2024 Reshani Dananjana. All rights reserved.</p>
      </footer>
    </div>
  );
}

function EducationCard({ institution, degree, duration, details }: { institution: string; degree: string; duration: string; details: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400">
      <h3 className="text-xl font-bold mb-2 text-indigo-600">{institution}</h3>
      <h4 className="text-lg font-semibold mb-2 text-purple-600">{degree}</h4>
      <p className="text-slate-500 mb-3">{duration}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-indigo-600">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600">
            <Cog className="w-4 h-4 text-purple-400" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tools, link }: { title: string; description: string; tools: string[]; link?: string }) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 duration-300">
      <h3 className="text-xl font-bold mb-2 text-indigo-600">{title}</h3>
      <p className="mb-4 text-slate-600">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span key={index} className="px-3 py-1 bg-purple-50 rounded-full text-sm text-purple-600 shadow">
            {tool}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 hover:text-purple-500 transition-colors">
          <Link className="w-4 h-4" />
          View Project
        </a>
      )}
    </div>
  );
}

function AwardCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-indigo-600">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600">
            <Trophy className="w-4 h-4 text-purple-400" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertificationCard({ title, certifications }: { title: string; certifications: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-indigo-600">{title}</h3>
      <ul className="space-y-2">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600">
            <Star className="w-4 h-4 text-purple-400" />
            {cert}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActivityCard({ activities }: { activities: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center gap-2 text-slate-600">
            <Activity className="w-4 h-4 text-purple-400" />
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;