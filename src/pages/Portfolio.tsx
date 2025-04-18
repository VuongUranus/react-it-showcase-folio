
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Updated portfolio project data with more details
const projects = [
  {
    id: 1,
    title: "Enterprise Chat System (XCHAT)",
    slug: "xchat",
    category: "Mobile World Group",
    tags: ["Golang", "WebSocket", "PostgreSQL", "Redis", "Elasticsearch", "ReactJS"],
    image: "/lovable-uploads/xchat.png",
    icon: <img src='/lovable-uploads/xchat_logo.png'></img>,
    client: "Mobile World Group",
    description: "A scalable internal chat platform built for real-time communication across departments, featuring SSO, role-based access control, message search, group management, real-time indicators, and bot/webhook integration."
  },
  {
    id: 2,
    title: "Remote VM Access Tool (Cloud Management Platform)",
    slug: "vmconnect",
    category: "Mobile World Group",
    tags: ["Golang", "WebSocket", "SSH", "VNC", "RDP", "Access Control", "Security"],
    image: "/lovable-uploads/vmconnect.png",
    icon: <svg width="146" height="146" viewBox="0 0 146 146" fill="none">
      <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
      <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
      <g filter="url(#filter0_d_322_11595)">
        <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
        <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
        <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
        <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
        <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
        <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
        <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
        <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
        <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
        <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
      </g>
      <g filter="url(#filter1_f_322_11595)">
        <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter2_f_322_11595)">
        <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter3_f_322_11595)">
        <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <defs>
        <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
        </filter>
        <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
      </defs>
    </svg>,
    client: "Mobile World Group",
    description: "A remote virtual machine control platform using WebSocket with support for SSH, VNC, and RDP protocols, including permission-based access, command restrictions, and session logging."
  },
  {
    id: 3,
    title: "Zalo CRM Bridge",
    slug: "zalo-crm-bridge",
    category: "Mobile World Group",
    tags: ["Golang", "Zalo OA", "PostgreSQL", "NATS", "Hazelcast", "Apache Airflow"],
    image: "/lovable-uploads/oa_hub.png",
    icon: <img src='https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images//logo.svg'></img>,
    client: "Mobile World Group",
    description: "A Zalo OA integration system for customer support, enabling 2-way communication, automatic assignment, internal agent UI, message logging, KPI tracking, and real-time monitoring dashboard."
  },
  {
    id: 4,
    title: "Custom Support Chat Platforms",
    slug: "support-chat-brands",
    category: "Mobile World Group",
    tags: ["Golang", "PostgreSQL", "NATS", "Hazelcast"],
    image: "/lovable-uploads/bhx_chat.jpg",
    icon: <svg width="146" height="146" viewBox="0 0 146 146" fill="none">
      <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
      <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
      <g filter="url(#filter0_d_322_11595)">
        <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
        <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
        <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
        <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
        <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
        <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
        <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
        <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
        <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
        <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
      </g>
      <g filter="url(#filter1_f_322_11595)">
        <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter2_f_322_11595)">
        <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter3_f_322_11595)">
        <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <defs>
        <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
        </filter>
        <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
      </defs>
    </svg>,
    client: "Mobile World Group",
    description: "Dedicated customer support chat systems tailored for specific brands like Qua Tang VIP, Bach Hoa Xanh, and Dien May Xanh, each customized to their unique workflows and UI/UX requirements."
  },
  {
    id: 5,
    title: "Real-Time Shipper Tracking Map",
    slug: "shipper-tracking",
    category: "Mobile World Group",
    tags: ["Golang", "Real-time Map", "Tracking", "WebSocket", "Internal Tool"],
    image: "/lovable-uploads/shipper_map.png",
    icon: <svg width="146" height="146" viewBox="0 0 146 146" fill="none">
      <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
      <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
      <g filter="url(#filter0_d_322_11595)">
        <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
        <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
        <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
        <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
        <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
        <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
        <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
        <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
        <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
        <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
      </g>
      <g filter="url(#filter1_f_322_11595)">
        <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter2_f_322_11595)">
        <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter3_f_322_11595)">
        <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <defs>
        <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
        </filter>
        <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
      </defs>
    </svg>,
    client: "Mobile World Group",
    description: "A real-time map system for visualizing and tracking the locations of delivery staff, improving logistics transparency and operational efficiency."
  },
  {
    id: 6,
    title: "SSO QR Scanner & Anti-Theft Utilities",
    slug: "internal-utilities",
    category: "Mobile World Group",
    tags: ["Golang", "QR Code", "SSO", "Security", "Internal Tools"],
    image: "/lovable-uploads/qrcode.png",
    icon: <svg width="146" height="146" viewBox="0 0 146 146" fill="none">
      <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
      <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
      <g filter="url(#filter0_d_322_11595)">
        <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
        <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
        <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
        <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
        <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
        <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
        <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
        <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
        <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
        <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
        <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
        <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
      </g>
      <g filter="url(#filter1_f_322_11595)">
        <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter2_f_322_11595)">
        <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <g filter="url(#filter3_f_322_11595)">
        <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
      </g>
      <defs>
        <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
        </filter>
        <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
        </filter>
      </defs>
    </svg>,
    client: "Mobile World Group",
    description: "A set of internal utilities including a QR code scanner integrated with the SSO system and an anti-theft alert system to improve internal security and identity verification."
  }
];

const categories = ["All", "Mobile World Group", "Personal Projects"];

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <motion.span
      className="px-4 py-2 rounded-full bg-[#ffffff] dark:bg-gray-800 dark:text-lightgray text-[#475569] text-sm"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(59,130,246,0.2)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {label}
    </motion.span>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="dark:bg-[#1e2230] bg-[#f2f3f5] rounded-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
    >
      <div className="p-6">
        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div
            className="h-12 w-12 rounded-full flex items-center justify-center mr-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            {project.icon || <div className="h-6 w-6 bg-white rounded-full" />}
          </motion.div>
          <motion.h3
            className="text-xl font-medium"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {project.client}
          </motion.h3>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {project.title}
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {project.tags?.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </motion.div>
      </div>

      <div className="mt-auto relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <Link
          to={`/portfolio/${project.slug}`}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <motion.span
            className="bg-primaryblue text-white px-6 py-3 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0
    }
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
            </motion.h1>
            <motion.p
              className="dark:text-lightgray text-[475569] text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of enterprise-grade solutions developed to solve complex internal and external operational challenges — from real-time data processing to secure system integrations.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full ${filter === category
                    ? 'bg-primaryblue text-white'
                    : 'dark:bg-gray-800 bg-[#f2f3f5] dark:text-lightgray dark:hover:bg-gray-700 hover:bg-gray-300'
                    } transition-colors`}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="initial"
              animate="animate"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;
