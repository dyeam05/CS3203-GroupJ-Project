import React, {useState} from 'react';
import { View } from "react-native";
import { Calendar, LocaleConfig} from 'react-native-calendars';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0];
  
  const [selected, setSelected] = useState('');

  return (
    <View>
      <Calendar
      current = {today}
      onDayPress = {(day) => {
        console.log (day), setSelected(day.dateString);
      }}

      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true}
      }}
      />
    </View>
  );
}
