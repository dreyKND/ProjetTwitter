import TweetIcon from "./TweetIcon";

export default function Clone(props) {
    const item = props.item;
    return (
        <div className='flex p-4 mt-4 text-white'>
            <div className=''>
                <img className='h-18  w-32 rounded-full' src={item.author_avatar} />
            </div>
            <div className='ml-6'>
                <h2>{item.source} <small>{"@" + item.date}</small></h2>
                <p>{item.text}</p>
                <img className='pt-2 rounded-3xl w-full  h-60' src={item.image} alt="" />
                <div className='flex pt-5 justify-between  w-12' >
                    <TweetIcon icon={'./src/assets/images/Replies.png'} count={item.replies} />
                    <TweetIcon icon={'./src/assets/images/Favorites.png'} count={item.favorites} />
                    <TweetIcon icon={'./src/assets/images/Retweets.png'} count={item.retweets} />
                    <TweetIcon icon={'./src/assets/images/Shares.png'} count={item.Shares} />
                </div>
            </div>
        </div>
    )
    
}