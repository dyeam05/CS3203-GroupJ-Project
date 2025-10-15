// basically gets the general address of the API to be used by the rest of the services
import { Platform } from 'react-native';

const localhost = Platform.select({
  ios: 'http://localhost:3001',     
  android: 'http://10.0.2.2:3001',
  default: 'http://localhost:3001',
});


export const API_BASE_URL = localhost;

export async function apiGet<T>(path: string): Promise<T> { //fetches a certain endpoint. Like "apiGet<CalendarEvent>(/api/test-event)"
  const res = await fetch(`${API_BASE_URL}${path}`);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GET ${path} failed: ${res.status} ${text}`);
  }
  return res.json() as Promise<T>;
}
