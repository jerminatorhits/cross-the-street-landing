import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const EmailSubscription = () => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState<string>('');

  // Function to handle changes in the input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    event.preventDefault();
    const db = getFirestore(app);
    // Data to be inserted
    const data = {
      email: 'example@email.com',
    };

    const leadsCollection = collection(db, 'leads');
    addDoc(leadsCollection, data).then((doc) => {
      console.info('New document added with ID:', doc.id);
      return doc;
    });
  };

  return (
    <div>
      <form className="flex flex-col">
        <label className="text-slate-900">Join for important updates</label>
        <div>
          <input
            className="focus:shadow-outline appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="text"
            placeholder="Enter your email"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Button
          </button>
          {/* <button className="btn btn-blue">Subscribe</button> */}
        </div>
      </form>
    </div>
  );
};

export default EmailSubscription;
