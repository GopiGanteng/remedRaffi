import Sidebar from "@/component/sidebar";

export default function Home() {
  return (
    <>
    <div className="flex-1 text-center p-8 mt-40">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">
        HI, SELAMAT DATANG
      </h1>
       
       <p className="text-gray-600 text-sm max-w-2xl flex-1 teks-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        ipsum cum laborum adipisci dicta similique enim ex eius facere eligendi
        eos necessitatibus, repudiandae iste earum tempora rem voluptas, error
        ad!
       </p>
      </div>

      <div>
          <div className="mt-40 p-2 items-center">
            <div className="shadow-2xl w-full h-30 mt-4 bg-blue-950  ">
              <h1 className="font-bold text-2xl text-white items-center ml-150 py-11"> HOW TO INFORMATION</h1>
            </div>
          </div>
        </div>

        <div className="block shadow-2xl w-full h-120 mt-20 ">

        </div>
        </>
  );
}