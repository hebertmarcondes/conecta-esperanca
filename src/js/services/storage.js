const STORAGE_KEY = 'conectaEsperancaCadastros';
const CONTRAST_KEY = 'conectaEsperancaAltoContraste';

export function saveRegistration(registration) {
  const registrations = getRegistrations();
  registrations.push(registration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
}

export function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function getContrastPreference() {
  return localStorage.getItem(CONTRAST_KEY) === 'true';
}

export function saveContrastPreference(enabled) {
  localStorage.setItem(CONTRAST_KEY, String(enabled));
}
