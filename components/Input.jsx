const Input = ({ label, type = "text", placeholder }) => {
  return (
    <>
      <label htmlFor="" className="text-[#989898]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="bg-[#1A161E] p-4 rounded-md"
      />
    </>
  );
};

export default Input;
