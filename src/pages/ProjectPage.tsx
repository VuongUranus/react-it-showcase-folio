
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail from '@/components/ProjectDetail';

// Project data with detailed information
const projectsData = [
  {
    slug: "internal-chat-application",
    title: "Internal Chat Application (XCHAT)",
    client: "MWG (TheGioiDiDong)",
    services: ["Web Development"],
    technologies: ["React JS"],
    website: "https://example.com/defi-x",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
    ]
  },
  {
    slug: "dev-x",
    title: "Agency Website Development for Dev X",
    client: "Dev X",
    services: ["Web Development"],
    technologies: ["React JS"],
    website: "https://example.com/dev-x",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1573495627361-d9b87960b6e2?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
    ]
  },
  {
    slug: "social-media-app",
    title: "Social Media App",
    client: "ConnectMe",
    services: ["Mobile App Development", "UI/UX Design"],
    technologies: ["React Native", "Firebase"],
    website: "https://example.com/social-app",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1618522133279-85613c8947f4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1515468381879-40d0eaee7d4e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1585398999889-c04d196beb4a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1585399001849-8b9672accdbb?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3"
    ]
  },
  {
    slug: "travel-booking",
    title: "Travel Booking Website",
    client: "TravelEase",
    services: ["Web Development", "UI/UX Design"],
    technologies: ["React JS", "Node.js", "MongoDB"],
    website: "https://example.com/travel-booking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1537905569824-f89f14ccbe68?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3"
    ]
  },
  {
    slug: "task-management",
    title: "Task Management Tool",
    client: "TaskMaster",
    services: ["Web Application", "SaaS Development"],
    technologies: ["React JS", "Node.js", "PostgreSQL"],
    website: "https://example.com/task-manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
    ]
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    client: "MediCare",
    services: ["Web Development", "UI/UX Design"],
    technologies: ["React JS", "Node.js", "MongoDB"],
    website: "https://example.com/healthcare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam non justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
    goal: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus gravida quis blandit turpis.",
    execution: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent",
      "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
      "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti"
    ],
    results: "Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing diam donec adipiscing tristique risus, amet est placerat in egestas erat imperdiet sed euismod nisi.",
    mainImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1516549655669-d99212d13a36?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3"
    ]
  }
];

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }
  
  return <ProjectDetail project={project} />;
};

export default ProjectPage;
