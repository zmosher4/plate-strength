export default function Nav() {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between mx-10 h-20 text-white px-64">
        <div className="hover:text-gray-400 transition-colors ease-in-out cursor-pointer">
          Home
        </div>
        <div className="hover:text-gray-400 transition-colors ease-in-out cursor-pointer">
          About Me
        </div>
        <div className="hover:text-gray-400 transition-colors ease-in-out cursor-pointer">
          Stories
        </div>
        <div className="hover:text-gray-400 transition-colors ease-in-out cursor-pointer">
          Testimonials
        </div>
        <div className="hover:text-gray-400 transition-colors ease-in-out cursor-pointer">
          Request Consultation
        </div>
      </div>
    </div>
  );
}
