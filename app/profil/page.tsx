import Image from "next/image"

export default function profil(){
    return(
        <div>
            <div className="block shadow-2xl w-full h-90 mt-20">
                <div className="p-20 flex flex-col md:flex-row items-center gap-8">
                    {/* Gambar Profil */}
                    <div className="flex-shrink-0">
                        <Image 
                            src="/kei.jpg"
                            width={400}
                            height={400}
                            alt="profil"
                            className="h-50 w-50 object-cover rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                    
                    {/* Teks Konten */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-blue-400 mb-4">
                            HI, I'M KEI
                        </h1>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            ipsum cum laborum adipisci dicta similique enim ex eius facere eligendi
                            eos necessitatibus, repudiandae iste earum tempora rem voluptas, error
                            ad!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}