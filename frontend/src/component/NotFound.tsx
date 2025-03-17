const NotFound = ({ message }: { message: string }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col font-bold">
      <h1>404 - Not Found!</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>The page you are looking for is not available.</p>
      )}
      </div>
      <div>
        <p className="my-5 flex justify-center items-center bg-gray-100">
          <img
            src="https://static.tildacdn.net/tild3265-6337-4139-a339-323832653339/404.svg"
            alt="No Blogs Found"
            className="h-full"
          />
        </p>
      </div>
    </div>
  );
};

export default NotFound;
