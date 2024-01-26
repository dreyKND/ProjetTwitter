function Profil() {
    return (
        <>
            <div className='w-1/3 border Timeline' >
                <section>
                    <img className=" w-full h-60 object-cover" src="https://cdn.pixabay.com/photo/2023/09/29/10/20/sunset-8283538_640.jpg" alt="" />
                </section>
                <section className=" pl-6">
                    <div className=" flex justify-between items-start h-20 ">
                        <img className=" transform -translate-y-20 w-32" src="/src/assets/images/Profile-Photo.png" alt="" />
                        <button className=" rounded-full mt-6 bg-blue-400 text-lg w-60 " variant="outlined">Edit profil</button>
                    </div>
                    <div>
                        <div className=" flex items-center">
                            <h1 className=" font-bold text-2xl">Audrey Kabamba</h1>
                        </div>
                        <h1 className="text-sm text-gray-500">@AudreyKabamba</h1>
                    </div>
                    <div className="mt-2 space-y-3">
                        <p className=" text-xl">Hello, my name is Audrey come on,let's talk </p>
                    </div >

                    <div className=" flex items-center space-x-5 mt-5">
                        <div className=" flex items-center space-x-1">
                            <span className=" text-lg">1000</span>
                            <span className=" text-gray-500 text-lg">followings</span>
                        </div>
                        <div className=" flex items-center space-x-1">
                            <span className=" text-lg">900</span>
                            <span className=" text-gray-500 text-lg">followers</span>
                        </div>

                    </div>
                </section>
                <section>
                    <div className=" flex items-center space-x-5 ml-5 mt-5 text-lg text-gray-500">
                        <button className=" hover:text-blue-500">TWEETS</button>
                        <button className=" hover:text-blue-500">REPLIES</button>
                        <button className=" hover:text-blue-500">MEDIA</button>
                        <button className=" hover:text-blue-500">LIKES</button>


                    </div>
                </section>
            </div>
        </>


    )

}
export default Profil;