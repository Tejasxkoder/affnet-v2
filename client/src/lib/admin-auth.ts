/**
 * Admin authentication utilities
 */

// Clear admin session from local storage and session storage
export const clearAdminSession = () => {
  // Remove admin-related data from localStorage
  localStorage.removeItem("adminToken")
  localStorage.removeItem("adminUser")
  localStorage.removeItem("adminSession")
  
  // Remove admin-related data from sessionStorage
  sessionStorage.removeItem("adminToken")
  sessionStorage.removeItem("adminUser")
  sessionStorage.removeItem("adminSession")
}

// Check if admin is authenticated
export const isAdminAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  
  const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken")
  return !!token
}

// Get admin token
export const getAdminToken = (): string | null => {
  if (typeof window === "undefined") return null
  
  return localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken")
}

// Set admin session
export const setAdminSession = (token: string, user?: any) => {
  if (typeof window === "undefined") return
  
  localStorage.setItem("adminToken", token)
  if (user) {
    localStorage.setItem("adminUser", JSON.stringify(user))
  }
}

// Get admin user
export const getAdminUser = () => {
  if (typeof window === "undefined") return null
  
  const user = localStorage.getItem("adminUser") || sessionStorage.getItem("adminUser")
  return user ? JSON.parse(user) : null
}
