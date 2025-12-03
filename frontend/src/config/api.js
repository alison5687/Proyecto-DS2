// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const apiConfig = {
  baseURL: API_URL,
  endpoints: {
    profile: `${API_URL}/api/profile/current/`,
    skills: `${API_URL}/api/skills/`,
    technologies: `${API_URL}/api/technologies/`,
    experience: `${API_URL}/api/experience/`,
    education: `${API_URL}/api/education/`,
    projects: `${API_URL}/api/projects/`,
    contact: `${API_URL}/api/contact/messages/`,
    health: `${API_URL}/api/health/`
  }
}

export default apiConfig

