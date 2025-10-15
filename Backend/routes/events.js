import { Router } from 'express';
import CalendarEvent from '../../Domain/CalendarEvent.js'; // adjust path if needed

const router = Router();

// GET /api/test-event -> returns a CalendarEvent object
router.get('/test-event', (_req, res) => {
  const event = new CalendarEvent(
    '2000-01-01', // date (YYYY-MM-DD)
    '22:00',      // time (24h) -> 10:00pm
    'TestEvent',  // title
    'this is a test' // notes
  );

  res.json(event);
});

export default router;
