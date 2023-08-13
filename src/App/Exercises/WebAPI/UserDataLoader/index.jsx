import { useState } from 'react';

function loadUserDetails(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, age: 30, country: 'Poland' });
    }, 2000);
  });
}

export const UserDataLoader = () => {
  {
    const [loadedUserId, setLoadedUserId] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLoadUserDetails = async () => {
      setLoading(true);
      try {
        const user = await loadUser();
        setLoadedUserId(user.id);

        const userDetails = await loadUserDetails(user.id);
        setUserDetails(userDetails);
      } catch (error) {
        console.error('Error loading user data:', error);
      }
      setLoading(false);
    };

    const handleClearUserDetails = () => {
      setLoadedUserId(null);
      setUserDetails(null);
    };

    return (
      <div>
        <div id="user-details-container">
          {userDetails ? (
            <>
              <p>
                <strong>ID:</strong> {userDetails.id}
              </p>
              <p>
                <strong>Age:</strong> {userDetails.age}
              </p>
              <p>
                <strong>Country:</strong> {userDetails.country}
              </p>
            </>
          ) : loading ? (
            <p>Loading user details...</p>
          ) : null}
        </div>
        <button
          id="load-user-button"
          onClick={handleLoadUserDetails}
          disabled={loading}
        >
          Load User Details
        </button>
        <button
          id="clear-button"
          onClick={handleClearUserDetails}
          disabled={!userDetails || loading}
        >
          Clear
        </button>
      </div>
    );
  }

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }
};
