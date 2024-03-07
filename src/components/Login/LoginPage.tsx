import React, { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      // Redirects to an external URL after 3 seconds
      window.location.replace('https://whale-app-3xvcg.ondigitalocean.app/v1/auth');
    }, 100);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div>
    </div>
  );
}
