import React from 'react';
import { View } from "react-native";
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0];
  return (
    <View>
      <Calendar
      current = {today}
      onDayPress = {(day) => {console.log (day)}}
      />
    </View>
  );
}
