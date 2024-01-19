import './App.css'
import TrendslistItems from './TrendslistItems';
function TrendsList() {
    return (
        <>
            <div className='w-1/3 Trendlist sticky top pl-5 pr-40'>
                <div className='relative flex items-center  '>
                    <input className='TrendslistItems_input bg-gray-900 py-3 rounded-full h-10 text-gray-500 w-full pl-12' placeholder='Search Twitter' type="text" />
                    <div className=' absolute top-0 left-0 pl-3 pt-3'>
                        <TrendslistItems className='text-gray-500' icon={"./src/assets/images/Menu-Button/Icons/rechercher.png"} />
                    </div>

                </div>
                <section className=' text-gray-300 mt-7 space-y-5  rounded-lg bg-gray-900 pr-5 pl-5'>
                    <h1 className=' font-bold text-xl py-1 text-gray-400'>Trends for you</h1>

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className=' text-sm'>Trending in turkey</p>
                            <h2 className=' font-bold'>#SQUID</h2>
                            <p className='text-sm'>2,066 Tweets</p>
                        </div>
                        <TrendslistItems className="" icon={"./src/assets/images/Menu-Button/Icons/More-2.png"} />
                    </div>

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className=' text-sm'>Trending in turkey</p>
                            <h2 className=' font-bold'>#SQUID</h2>
                            <p className='text-sm'>2,066 Tweets</p>
                        </div>
                        <TrendslistItems className="" icon={"./src/assets/images/Menu-Button/Icons/More-2.png"} />
                    </div>

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className=' text-sm'>Trending in turkey</p>
                            <h2 className=' font-bold'>#SQUID</h2>
                            <p className='text-sm'>2,066 Tweets</p>
                        </div>
                        <TrendslistItems className="" icon={"./src/assets/images/Menu-Button/Icons/More-2.png"} />
                    </div>

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className=' text-sm'>Trending in turkey</p>
                            <h2 className=' font-bold'>#SQUID</h2>
                            <p className='text-sm'>2,066 Tweets</p>
                        </div>
                        <TrendslistItems className="" icon={"./src/assets/images/Menu-Button/Icons/More-2.png"} />
                    </div>
                    <button className=' text-blue-400'>Show more</button>
    
                </section>
            </div>

        </>


    )

}
export default TrendsList;