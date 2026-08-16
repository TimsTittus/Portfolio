import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "Projects | Tims Tittus",
  description: "A curated selection of my projects showcasing my skills in development, design, and problem-solving.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}