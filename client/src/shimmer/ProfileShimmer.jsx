const ProfileShimmer = () => {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center space-y-4 w-2/3 h-2/3 p-4 border rounded-lg shadow-lg bg-gray-100 animate-pulse">
        {/* Profile Image Placeholder */}
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>

        {/* Name Placeholder */}
        <div className="w-32 h-5 bg-gray-300 rounded"></div>

        {/* Bio Placeholder */}
        <div className="w-48 h-4 bg-gray-300 rounded"></div>
        <div className="w-40 h-4 bg-gray-300 rounded"></div>

        {/* Button Placeholder */}
        <div className="w-24 h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProfileShimmer;
