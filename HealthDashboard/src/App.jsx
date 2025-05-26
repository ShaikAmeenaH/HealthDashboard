import { useState } from 'react';

import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Calendar from './Components/Calendar';
import Appointment from './Components/Appointments';
import Chat from './Components/Chat';
import History from './Components/History';
import Statistic from './Components/Statistics';
import Tests from './Components/Tests';
import Support from './Components/Support';
import Setting from './Components/Setting';
import Dashboard from './Components/Dashboard';

function App() {


  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right section: Header at top, then Main */}
      <div className="flex flex-col flex-1">
        {/* Header at the top */}
        <Header />

        {/* Main content below header */}
        <main className="flex-1 p-4 bg-gray-100">
          <Appointment/>
          <Calendar/>
          <History/>
          <Statistic/>
          <Dashboard/>
          <Tests/>
          <Support/>
          <Chat/>
          <Setting/>
        </main>
      </div>
    </div>
  );
}

export default App;
