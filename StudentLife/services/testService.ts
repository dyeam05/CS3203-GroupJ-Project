//Test endpoint - returns a predefined CalendarEvent object 
import CalendarEvent from '../../Domain/CalendarEvent';

import { apiGet } from './api';

export async function getTestEvent():Promise<CalendarEvent>
{
    return apiGet<CalendarEvent>('/api/test-event');
}

