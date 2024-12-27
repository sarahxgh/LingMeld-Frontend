import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CommitmentCard from './CommitmentCard';
import ProgressCard from './ProgressCard';
import TotalProgressCard from './TotalProgressCard';
import ProjectCard from './ProjectCard';

const DashboardLayout = () => {
  const projects = [
    { id: 1, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0817fc21eb1685927af10b54ceaacbe15fa9742ccabb2da28f31f072526b1334', title: 'Modern', description: 'As Uber works through a huge amount of internal management turmoil.' },
    { id: 2, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7093ceb98f1d1be4640a6ff05c815093a81e51d3d649ae225b7b64df9cab4852', title: 'Modern', description: 'As Uber works through a huge amount of internal management turmoil.' },
    { id: 3, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6edc0e70937d976a7b1cdc859a61d925dcda99792106217400a55898736cebe2', title: 'Modern', description: 'As Uber works through a huge amount of internal management turmoil.' },
    { id: 4, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7630bc47bc18a1481798d5fbf1997e51e4580ee6e2cd76338ad9b015c958289b', title: 'Modern', description: 'As Uber works through a huge amount of internal management turmoil.' },
  ];

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[250px]"> {/* Width of sidebar */}
        <div className="h-screen overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <Header />

            {/* Content Sections */}
            <div className="mt-8 space-y-8">
              {/* Cards Section */}
              <section className="flex flex-wrap gap-6 items-start w-full">
                <CommitmentCard />
                <ProgressCard value={100} />
                <TotalProgressCard />
              </section>

              {/* Projects Section */}
              <section className="flex flex-wrap gap-8 items-center w-full">
                {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
