
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail from '@/components/ProjectDetail';

// Project data with detailed information
const projectsData = [
  {
    slug: "xchat",
    title: "Enterprise Chat System (XCHAT)",
    client: "Mobile World Group",
    services: ["Chat Application"],
    technologies: ["Golang", "WebSocket", "PostgreSQL", "Redis", "Elasticsearch", "ReactJS"],
    website: "#",
    description: "A scalable internal chat platform built for real-time communication across departments, featuring SSO, role-based access control, message search, group management, real-time indicators, and bot/webhook integration.",
    goal: `
The goal of the XChat project was to develop a secure, real-time, self-hosted internal messaging platform by leveraging and customizing the open-source version of Mattermost. The project aimed to replace external chat applications such as LINE, Telegram, and Zalo with a platform fully controlled and tailored for the company’s specific needs.

A standout aspect of this initiative was the in-house redevelopment of key Mattermost enterprise features — without relying on official enterprise licenses. These features include advanced role-based access control, message retention policies, system-level audit logs, granular permissions, and other capabilities typically gated behind enterprise tiers.

This approach allowed the team to:

  - Avoid costly licensing fees.

  - Gain full ownership of the platform's source code and functionality.

  - Customize deeply at the code level to meet specific business logic and compliance requirements.

In addition, XChat was intended to integrate tightly with the company’s internal ecosystem, including:

  - Single Sign-On (SSO) with the internal identity provider for seamless and secure authentication.

  - XTask, the internal task management system, for unified communication and task tracking.

Ultimately, XChat was envisioned as a flexible, extensible, and secure communication hub that could evolve along with the organization’s future requirements.
    `,
    executionDescription: "The execution of the XChat project involved a deep-level customization and enhancement of the open-source Mattermost platform to match enterprise-grade expectations. Rather than relying on official enterprise licensing, the team independently re-engineered and extended core features to meet internal scalability, performance, and observability needs.",
    execution: [
      "Cluster support via Gossip Protocol: Implemented a distributed cluster mechanism using gossip-based communication, enabling multi-node deployments and improved system resilience.",
      "Search optimization with ElasticSearch: Integrated ElasticSearch to handle full-text search and indexing, significantly improving the speed and accuracy of message search across channels and users.",
      "Distributed caching with Redis: Added Redis-based caching to accelerate frequently accessed data and reduce database load, boosting system performance and responsiveness.",
      "SSO integration: Integrated the company’s internal Single Sign-On (SSO) system to enable secure and seamless user authentication aligned with existing IT policies.",
      "Centralized logging to Graylog: Forwarded system logs and events to Graylog for centralized monitoring, analysis, and easier troubleshooting across distributed services.",
      "System-wide Notifications: Developed a custom notification system to support global announcements and targeted system messages for all or specific user groups.",
    ],
    results: `
- Fully functional internal messaging platform deployed and adopted across teams.

- Successfully recreated and customized enterprise-level features of Mattermost without relying on proprietary licenses.

- Enabled SSO-based authentication, reducing friction for end users and improving access control.

- Seamless integration with XTask, allowing for improved workflow efficiency and cross-functional collaboration.

- Reduced dependency on external platforms, mitigating compliance and security risks.

- Positioned the organization with a scalable foundation for future enhancements, including integration with other internal tools (e.g., HR systems, ticketing systems, knowledge bases).
    `,
    mainImage: "/lovable-uploads/xchat.png",
    galleryImages: []
  },
  {
    slug: "vmconnect",
    title: "Remote VM Access Tool (Cloud Management Platform)",
    client: "Mobile World Group",
    services: ["Websocket", "Cloud Management Platform"],
    technologies: ["Golang", "WebSocket", "SSH", "VNC", "RDP", "Access Control", "Security"],
    website: "#",
    description: "A remote virtual machine control platform using WebSocket with support for SSH, VNC, and RDP protocols, including permission-based access, command restrictions, and session logging.",
    goal: `The goal of this project was to build a unified internal tool to manage virtual machines (VMs) across various protocols such as SSH and VNC. The platform aimed to simplify access and control for different teams, enabling administrators and users to interact with VMs securely and efficiently through a web-based interface.

A key objective was to abstract protocol complexities and provide seamless, real-time access to VM sessions via WebSocket-based communication, ensuring low-latency data exchange between clients and virtual machines. Additionally, the system was designed to enforce command-level permissions for SSH access, allowing granular control over which commands users were authorized to execute.`,
    executionDescription: "To achieve these goals, the system was architected and implemented with the following key components:",
    execution: [
      "WebSocket Gateway: Established bi-directional WebSocket tunnels for real-time communication between client browsers and remote VMs (over both SSH and VNC).",
      "SSH Command Filtering: Built a middleware layer to intercept and validate SSH commands against predefined permission sets, ensuring that only authorized operations could be executed by users.",
      "Session Management: Implemented session lifecycle tracking, timeout handling, and auditing for all active VM sessions.",
      "Access Control: Integrated role-based access control (RBAC) to determine which users could access which VMs, and over which protocol (SSH or VNC).",
      "Custom Protocol Handlers: Developed custom logic to handle low-level SSH and VNC interactions, wrapping them into a consistent WebSocket API for frontend consumption.",
      "Security & Logging: Enforced secure authentication, encrypted traffic, and comprehensive session logging for traceability and compliance."
    ],
    results: `Delivered a centralized, real-time VM management tool used by internal teams for development, operations, and support tasks.

Enabled secure, browser-based SSH and VNC access to virtual machines with no need for local terminal tools.

Successfully enforced command-level restrictions, improving system safety and preventing unauthorized actions.

Reduced manual workload for infrastructure teams and improved response times in incident management and troubleshooting.

Established a modular architecture ready for future extension, such as support for RDP or container management.`,
    mainImage: "/lovable-uploads/vmconnect.png",
    galleryImages: [
      "/lovable-uploads/vmconnect.png",
      "/lovable-uploads/vmconnect_vnc.png",
      "/lovable-uploads/blacklist_cmd.png"
    ]
  },
  {
    slug: "zalo-crm-bridge",
    title: "Zalo CRM Bridge",
    client: "Mobile World Group",
    services: ["Chat Application", "Zalo OA"],
    technologies: ["Golang", "Zalo OA", "PostgreSQL", "NATS", "Hazelcast", "Apache Airflow"],
    website: "#",
    description: "A Zalo OA integration system for customer support, enabling 2-way communication, automatic assignment, internal agent UI, message logging, KPI tracking, and real-time monitoring dashboard.",
    goal: `The goal of this project was to build a Zalo OA-based customer support system that integrates directly with Zalo’s official API and Webhook services. Unlike the default Zalo OA chat interface, which lacks fine-grained user tracking and assignment capabilities, this system was designed to provide full control over how employees interact with customers — enabling KPI tracking, clear agent identification, and structured conversation workflows.

The motivation behind the project was to reduce missed messages, lower the number of customer service agents required, and enable automatic or manual conversation assignment, especially during high-volume messaging periods when the official Zalo OA tool becomes inefficient.`,
    executionDescription: "The system was developed with the following major components:",
    execution: [
      "Zalo OA Webhook Integration: Subscribed to chat events (new messages, user actions) to capture real-time customer messages from Zalo OA channels.",
      "Zalo OA API Consumption: Leveraged Zalo's official API set to: Send reply messages, Fetch user profiles, Mark messages as read, Support other necessary customer interaction tasks",
      "User Authentication: Built a login system where each staff member logs in with a unique username, enabling identification and performance tracking.",
      "Agent Assignment Mechanism: Automatic routing of customer conversations to available agents. Manual join feature for agents to support conversations as needed.",
      "Message Routing & Tracking: Ensured each conversation is tagged with the handling agent. Enabled seamless reassignment without message loss.",
      "KPI & Audit Tools: Tracked number of messages handled by each employee. Logged message history for performance review and dispute handling."
    ],
    results: `- Significantly reduced missed messages, even during peak hours.

- Enabled agent-level KPI tracking, something not supported in Zalo OA’s default interface.

- Helped management identify individual staff contributions and optimize workload distribution.

- Reduced dependency on Zalo’s default OA tool by providing a custom, internal platform better tailored to the company's support workflow.

- Optimized resource usage, minimizing the number of agents needed for daily operations without sacrificing responsiveness or quality of service.`,
    mainImage: "/lovable-uploads/oa_hub.png",
    galleryImages: []
  },
  {
    slug: "support-chat-brands",
    title: "Custom Support Chat Platforms",
    client: "Mobile World Group",
    services: ["Chat Application"],
    technologies: ["Golang", "PostgreSQL", "NATS", "Hazelcast"],
    website: "#",
    description: "Dedicated customer support chat systems tailored for specific brands like Qua Tang VIP, Bach Hoa Xanh, and Dien May Xanh, each customized to their unique workflows and UI/UX requirements.",
    goal: `The goal of this project was to build an in-house chat platform (web/app-based) where customers could directly message the company, and support agents could respond via an internal dashboard. The system was designed to replace third-party chat tools and offer complete control over user experience, data, and workflow.

This internal chat system allowed the company to identify which employee responded to each customer, track KPIs, and automate or manually manage conversation assignments. It also aimed to reduce message loss during peak periods and optimize the efficiency of the customer service team.`,
    executionDescription: "The system was developed with the following key features:",
    execution: [
      "Customer-facing Chat Widget: Embedded in the company's app and website, allowing customers to initiate conversations instantly.",
      "WebSocket Communication: Used for real-time, low-latency two-way communication between clients and agents.",
      "Employee Authentication: Each agent logged in with a unique company account to ensure message attribution and accurate KPI tracking.",
      "Conversation Assignment Logic: Automatic routing to available agents using load balancing. Manual join/claim functionality so staff could assist on-demand.",
      "Role-Based Access Control: Limited visibility and actions per user role (e.g., supervisor, agent, admin).",
      "Dashboard & KPI Monitoring: Message volume and response times per employee. Reassignment logs and conversation history.",
      "Notifications & Alerts: System-wide notifications for new incoming messages or pending replies. SLA tracking and alerts for overdue responses."
    ],
    results: `Launched a fully self-hosted, scalable chat solution without relying on external tools like Zalo, Messenger, or third-party widgets.

Improved visibility into employee performance and customer engagement.

Minimized response delays and message misses, especially during high-volume hours.

Enabled better task distribution and resource management, lowering the number of required agents while maintaining quality of service.

Provided a customizable foundation for future features like chatbots, CRM integration, or multi-channel support.`,
    mainImage: "/lovable-uploads/bhx_chat.jpg",
    galleryImages: []
  },
  {
    slug: "shipper-tracking",
    title: "Real-Time Shipper Tracking Map",
    client: "Mobile World Group",
    services: ["Tracking", "Real-time Map"],
    technologies: ["Golang", "WebSocket", "NATS"],
    website: "#",
    description: "A real-time map system for visualizing and tracking the locations of delivery staff, improving logistics transparency and operational efficiency.",
    goal: "The goal of this project was to develop a real-time location tracking system that allows customers to view the live position of their assigned shipper during delivery. The system aimed to enhance the customer experience by increasing transparency, trust, and convenience, while also giving internal teams better visibility over delivery progress.",
    executionDescription: "To achieve this, the system was built with the following components:",
    execution: [
      "WebSocket-based Location Streaming: Used WebSocket connections to transmit real-time GPS coordinates from the shipper’s mobile app to the server, and then forward them instantly to the customer’s frontend.",
      "Shipper Mobile Integration: The shipper's app was equipped to push GPS data periodically when a delivery is in progress.",
      "Frontend Map Display: The customer’s web/app interface showed the current location of the shipper on an interactive map (e.g., using Google Maps or Leaflet).",
      "Authentication & Session Linking: Each WebSocket session was securely authenticated and linked to a specific delivery order, ensuring that only the correct customer could see the related shipper’s data.",
      "Failover Handling: Implemented fallback mechanisms in case of connection drops or poor signal conditions, including periodic re-sync."
    ],
    results: `Delivered a seamless real-time tracking experience for customers.

Helped reduce support calls asking about delivery status.

Increased customer satisfaction through transparency and reliability.

Provided the foundation for additional delivery management features like ETA prediction, geofencing alerts, and performance tracking for shippers.`,
    mainImage: "/lovable-uploads/shipper_map.png",
    galleryImages: []
  },
  {
    slug: "internal-utilities",
    title: "SSO QR Scanner & Anti-Theft Utilities",
    client: "Mobile World Group",
    services: ["SSO", "Anti-Theft"],
    technologies: ["Golang", "QR Code", "SSO", "Security"],
    website: "#",
    description: "A set of internal utilities including a QR code scanner integrated with the SSO system and an anti-theft alert system to improve internal security and identity verification.",
    goal: "The goal of this project was to develop a Single Sign-On (SSO) QR login system that allows employees to log in to internal company systems by scanning a QR code using their authenticated mobile device. The purpose was to simplify the login process, improve user experience, and enhance security by eliminating the need to enter usernames and passwords on shared or public terminals.",
    executionDescription: "The system was built with real-time communication and strong identity verification in mind, including:",
    execution: [
      "WebSocket Connection Bridge: Established a WebSocket channel between the web-based login page and the backend server, allowing it to listen for authentication confirmation in real time.",
      "Mobile App Integration: Users scanned a one-time QR code via the company mobile app (already authenticated). The app sent the QR token + user identity securely to the backend for verification.",
      "SSO Token Generation: Upon successful validation, the system issued a temporary SSO token to the web client via WebSocket, which was then used to log the user in without manual input.",
      "QR Token Expiry & Security: Tokens had a short lifespan and were one-time use. Session replay and cross-device hijacking were prevented using IP/device validation and timestamps.",
      "System Compatibility: Supported login to various internal platforms (e.g., HR portal, task management, chat system) through a unified SSO gateway."
    ],
    results: `Enabled fast and seamless login to internal systems using mobile authentication.

Reduced the need to type or remember credentials, improving user experience and security.

WebSocket ensured instant login feedback without page reloads or polling.

Helped standardize authentication flows across the company’s internal ecosystem.

Laid the groundwork for future expansions like biometric confirmation or cross-device session sync.`,

    mainImage: "/lovable-uploads/qrcode.png",
    galleryImages: []
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
