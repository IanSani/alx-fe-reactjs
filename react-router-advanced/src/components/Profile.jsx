
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Make sure this component exists
import ProfileSettings from './ProfileSettings'; // Make sure this component exists

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Routes>
        <Route path="/" element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;