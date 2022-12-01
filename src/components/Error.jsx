const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold rounded mb-3">
      {children}
    </div>
  );
};

export default Error;
