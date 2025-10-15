import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getTestEvent } from '../services/testService';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0];
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const handleDayPress = async (day: any) => {
    setSelected(day.dateString);
    setError(null);
    setData(null);
    setLoading(true);

    try {
      const result = await getTestEvent(); // calls your backend test endpoint
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Calendar
        current={today}
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true },
        }}
      />

      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <View>
          <Text>{data.title}</Text>
          <Text>{data.date} {data.time}</Text>
          <Text>{data.notes}</Text>
        </View>
      )}
    </View>
  );
}

