import React from 'react';
import { useUser } from '../hooks/user';
import { Link } from 'react-router-dom';

//TODO Create a different homepage for users that are already signed in 

//TODO Take signup button off navbar, put something like "Get Started" as a button that takes u to sign up

const Homepage: React.FC = () => {
  const user = useUser();
  const renderLoggedInContent = () => (
    <>
      {/* Make workout stats somehow */}
    </>
  );
  const renderLoggedOutContent = () => (

    <>
    <div className="homepage container mx-auto">
 <h1 className="text-4xl font-bold mb-4">Welcome to BODi - Your Personal Fitness Tracker</h1>
 <p className="mb-10 text-xl">
   BODi is a comprehensive fitness app designed to help you achieve your fitness goals and track your progress effectively. Whether you're a beginner or an experienced fitness enthusiast, BODi has the tools you need to stay motivated and stay on track.
 </p>
 <h2 className="text-3xl font-bold mb-2">Key Features of BODi</h2>
 <ul className="list-disc ml-8 mb-6">
   <li>Workout Tracking: BODi allows you to track your workouts with ease. Log your exercises, sets, and reps to keep a detailed record of your training sessions.</li>
   <li>Custom Workouts: Create your own personalized workouts tailored to your specific needs and preferences. Choose from a variety of exercises and arrange them to create a routine that works best for you.</li>
   <li>Library of Workouts: If you're looking for inspiration or want to try something new, BODi provides a library of pre-built workouts created by fitness professionals. Explore a wide range of workouts and find the ones that suit your goals.</li>
   <li>Progress Tracking: Keep track of your progress by monitoring changes in your body measurements and weight. BODi provides charts and graphs to visualize your progress over time, helping you stay motivated and see the results of your hard work.</li>
 </ul>
 <h2 className="text-3xl font-bold mb-2">Get Started with BODi</h2>
 <p className="mb-6">
   To get started with BODi, simply sign up for an account and set up your profile. You can then start logging your workouts, creating custom routines, and tracking your progress. Whether your goal is to build muscle, lose weight, or improve your overall fitness, BODi is here to support you every step of the way.
 </p>
 <p className="mb-4">
   Sign up to BODi today and take control of your fitness journey!
 </p>
 
 <Link to="/signup" className="btn btn-primary">
        Get Started
      </Link>
 </div>
    </>

  );
  return (
    <div className='homepage containter mx-auto'>
    {user ? renderLoggedInContent() : renderLoggedOutContent()}
    </div>
  );
}
export default Homepage;
