// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/Main'; // Assuming you made a Main component

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style="auto" />
    </>
  );
}